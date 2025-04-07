import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./contractConfig";

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
    const isIssuer = await contract.isAuthorizedIssuer(sender); // using the helper again
    if (!isIssuer) {
      throw new Error("You are not an authorized issuer!");
    }

    const tx = await contract.issueCertificate(
      recipientName,
      recipientWallet,
      certificateTitle,
      expiryDate
    );
    await tx.wait();

    console.log("Transaction Hash (Certificate Hash):", tx.hash);
    return tx.hash;
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

