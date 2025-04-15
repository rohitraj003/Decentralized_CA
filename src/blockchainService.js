import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./contractConfig";
import { uploadCertificateToIPFS } from "./ipfsService"; 

// Function to connect to the smart contract
export const getContract = async (providerOrSigner) => {
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, providerOrSigner);
};

// Function to check if user is an authorized issuer
export const checkIssuer = async (account) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = await getContract(provider);
    const isIssuer = await contract.isAuthorizedIssuer(account); // using the new helper
    console.log("Issuer Status:", isIssuer);
    return isIssuer;
  } catch (error) {
    console.error("Error checking issuer status:", error);
    return false;
  }
};

//Check if user is admin 
export const checkAdmin = async (account) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = await getContract(provider);
    const isAdmin = await contract.isAdmin(account);
    console.log("Admin Status:", isAdmin);
    return isAdmin;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
};

// Function to issue a certificate
export const issueCertificate = async (recipientName, recipientWallet, certificateTitle, expiryDate) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = await getContract(signer);
    const sender = await signer.getAddress();
    const isIssuer = await contract.isAuthorizedIssuer(sender);

    if (!isIssuer) {
      throw new Error("You are not an authorized issuer!");
    }

    // Upload metadata to IPFS
    const ipfsHash = await uploadCertificateToIPFS({
      recipientName,
      recipientWallet,
      certificateTitle,
      issuedBy: sender,
      issueDate: Math.floor(Date.now() / 1000),
      expiryDate,
    });

    // Call smart contract
    const tx = await contract.issueCertificate(
      recipientName.trim(),
      recipientWallet.trim(),
      certificateTitle.trim(),
      ipfsHash,
      "dummy-signature",
      expiryDate
    );

    const receipt = await tx.wait();

    // Extract certificate hash from event logs
    const event = receipt.logs
      .map((log) => {
        try {
          return contract.interface.parseLog(log);
        } catch {
          return null;
        }
      })
      .find((e) => e && e.name === "CertificateIssued");

    const certHash = event?.args?.[0];

    console.log("Certificate issued! Hash:", certHash);
    console.log("IPFS Hash:", ipfsHash);

    return { certHash, ipfsHash };
  } catch (error) {
    console.error("Error issuing certificate:", error);
    throw error;
  }
};


export const addIssuer = async (orgAddress) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = await getContract(signer);
    const tx = await contract.addIssuer(orgAddress);
    await tx.wait();
    console.log("Issuer added:", orgAddress);
    return true;
  } catch (error) {
    console.error("Failed to add issuer:", error);
    return false;
  }
};

export const verifyCertificateDetails = async (certHash) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const contract = await getContract(provider);

  const details = await contract.verifyCertificate(certHash);
  return {
    recipientName: details[0],
    recipientWallet: details[1],
    certificateTitle: details[2],
    issueDate: Number(details[3]),
    expiryDate: Number(details[4]),
    ipfsHash: details[5],
    signature: details[6],
    isValid: details[7],
    isVerified: details[8],
  };
};

export const voteToVerifyCertificate = async (certHash) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = await getContract(signer);

  const tx = await contract.verifyCertificateByAdmin(certHash);
  await tx.wait();
};


