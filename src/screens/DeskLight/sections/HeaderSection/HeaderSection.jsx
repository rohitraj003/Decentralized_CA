import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { useWallet } from "../../../../WalletProvider";

export const HeaderSection = () => {
  const { account, connectMetaMask } = useWallet();

  return (
    <header className="flex w-full h-[71px] items-center justify-between px-[166px] py-0 bg-white border-b border-[#a6a7ad]">
      <img className="relative" alt="Logo" src="/logo.svg" />

      {/* Navbar with Home and Add Organizer */}
      <nav className="flex gap-6">
        <Link to="/" className="text-black hover:underline">Home</Link>
        <Link to="/add-organization" className="text-black hover:underline">Add Issuer</Link>
      </nav>

      <Button onClick={connectMetaMask} className="bg-[#96e963] text-[#000000]">
      <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/crypto-trading-options.png" alt="crypto-icon" />
        {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect MetaMask"}
      </Button>
    </header>
  );
};
