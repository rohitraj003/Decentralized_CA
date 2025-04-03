import React, { createContext, useContext, useState, useEffect } from "react";
import { ethers } from "ethers";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectMetaMask = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed. Please install it to continue.");
      return;
    }

    try {
      const web3Provider = new ethers.BrowserProvider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const signer = await web3Provider.getSigner();
      const userAccount = await signer.getAddress();

      setAccount(userAccount);
      setProvider(web3Provider);
      console.log("Connected Account:", userAccount);
    } catch (error) {
      console.error("MetaMask connection failed", error);
    }
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (!window.ethereum) return;

      try {
        const web3Provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await window.ethereum.request({ method: "eth_accounts" });

        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setProvider(web3Provider);
          console.log("Wallet already connected:", accounts[0]);
        }
      } catch (error) {
        console.error("Error checking MetaMask connection", error);
      }
    };

    checkConnection();
  }, []);

  return (
    <WalletContext.Provider value={{ account, provider, connectMetaMask }}>
      {children}
    </WalletContext.Provider>
  );
};

// Export `useWallet` **separately** (Fix for Vite HMR issue)
export const useWallet = () => {
  return useContext(WalletContext);
};
