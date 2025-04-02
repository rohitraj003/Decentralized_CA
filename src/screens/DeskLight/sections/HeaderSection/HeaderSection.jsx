import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = () => {
  // const navItems = ["Issue Certificate", "Verify Certificate", "Revoke Certificate"];
  const [account, setAccount] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try{
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("MetaMask connection failed", error);
      }
    } 
    else{
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  return (
    <header className="flex w-full h-[71px] items-center justify-between px-[166px] py-0 bg-white border-b border-[#a6a7ad] backdrop-blur-[5.45px]">
      <img className="relative" alt="Logo" src="/logo.svg" />

      <NavigationMenu>
        <NavigationMenuList className="flex w-[446px] items-center justify-between">
          {/* {navItems.map((item) => ( */}
            {/* <NavigationMenuItem key={item}> */}
              <div className="inline-flex items-center justify-center gap-2 p-2">
                <span className="font-normal text-black text-[#212333] text-sm leading-[22.4px] whitespace-nowrap">
                  {/* About Us */}
                  
                </span>
              </div>
            {/* </NavigationMenuItem> */}
          {/* ))} */}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex w-[264px] items-center justify-between">
        <Button
          className="flex items-center gap-2 px-4 py-2 bg-[#96e963] text-[#1e2f14] text-sm font-normal rounded-lg hover:bg-[#85d855] border border-[#00a146] shadow-md"
          onClick={connectMetaMask}
        >
          <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/crypto-trading-options.png" alt="crypto-icon" />
          {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Connect MetaMask"}
        </Button>
      </div>
    </header>
  );
};
