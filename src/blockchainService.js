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
    const isIssuer =contract.authorizedIssuers(account);
    const result = Boolean(isIssuer);
    console.log("Issuer Status:", result);
    return result;
  } catch (error) {
    console.error("Error checking issuer status:", error);
    return false;
  }
};

// Function to issue a certificate
export const issueCertificate = async (recipientName, recipientWallet, certificateTitle, expiryDate) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = await getContract(signer);

    // Check if the user is an authorized issuer
    const isIssuer = contract.authorizedIssuers(await signer.getAddress());
    if (!isIssuer) {
      throw new Error("You are not an authorized issuer!");
    }

    const tx = await contract.issueCertificate(recipientName, recipientWallet, certificateTitle, expiryDate);
    await tx.wait(); // Wait for the transaction to be confirmed

    console.log("Transaction Hash:", tx.hash);
    return tx.hash; // Return certificate hash
  } catch (error) {
    console.error("Error issuing certificate:", error);
    throw error;
  }
};
