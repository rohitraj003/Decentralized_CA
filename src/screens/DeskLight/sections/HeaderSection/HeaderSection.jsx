import { ChevronDownIcon, GlobeIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderSection = () => {
  // Navigation menu items data
  const navItems = ["Home", "Pricing", "Features", "Contact"];

  return (
    <header className="flex w-full h-[71px] items-center justify-between px-[166px] py-0 bg-white border-b border-[#a6a7ad] backdrop-blur-[5.45px]">
      <img className="relative" alt="Logo" src="/logo.svg" />

      <NavigationMenu>
        <NavigationMenuList className="flex w-[446px] items-center justify-between">
          {navItems.map((item) => (
            <NavigationMenuItem key={item}>
              <div className="inline-flex items-center justify-center gap-2 p-2">
                <span className="font-normal text-[#212333] text-sm leading-[22.4px] whitespace-nowrap">
                  {item}
                </span>
              </div>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex w-[264px] items-center justify-between">
        <Button
          variant="ghost"
          className="w-[71px] h-[43px] text-sm font-normal text-[#212333]"
        >
          Login
        </Button>

        <Button className="px-[35px] py-2.5 bg-[#96e963] text-[#11111c] text-sm font-normal rounded-lg hover:bg-[#85d857]">
          Sign up
        </Button>

        <div className="flex w-[62px] items-center justify-between p-2 relative rounded-lg">
          <GlobeIcon className="w-6 h-6" />
          <ChevronDownIcon className="w-[19px] h-[19px]" />
        </div>
      </div>
    </header>
  );
};
