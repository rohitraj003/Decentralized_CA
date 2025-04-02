import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = () => {
  // Navigation links data
  const navLinks = [
    "Solutions",
    "Pricing",
    "Get Started",
    "Use cases",
    "Documentation",
  ];

  // Social media icons data
  const socialIcons = [
    {
      icon: <InstagramIcon className="w-[22px] h-[22px]" />,
      alt: "Logo instagram",
    },
    {
      icon: <FacebookIcon className="w-[22px] h-[22px]" />,
      alt: "Logo facebook",
    },
    {
      icon: <YoutubeIcon className="w-[22px] h-[22px]" />,
      alt: "Logo youtube",
    },
    {
      icon: <LinkedinIcon className="w-[17.5px] h-5" />,
      alt: "LinkedinIcon brands",
    },
    {
      icon: <img className="w-5 h-5" alt="Logo" src="/logo-1.svg" />,
      alt: "Logo",
    },
  ];

  return (
    <footer className="flex w-full items-center justify-around p-[50px] bg-white border-t border-[#a6a7ad] backdrop-blur-[5.45px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.45px)_brightness(100%)]">
      <div className="flex flex-col w-full max-w-[1108px] h-[158px] items-start justify-between">
        <div className="flex w-full items-start justify-between">
          <img className="flex-none" alt="Logo" src="/logo.svg" />

          <div className="flex items-center justify-between space-x-2">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center gap-2 p-2"
              >
                <div className="w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#212333] text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
                  {link}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="w-full h-px" />

        <div className="flex w-full items-center justify-between">
          <div className="w-[201px] text-[#212333] [font-family:'Manrope',Helvetica] font-normal text-sm tracking-[0] leading-[22.4px]">
            VETRIC - 2024
          </div>

          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 px-3 py-[3px] rounded-[34px] border border-solid border-[#4d4f5c]"
          >
            <div className="w-1.5 h-1.5 bg-[#10a744] rounded-[3px]" />
            <div className="w-fit mt-[-1.00px] text-[#1a1c29] whitespace-nowrap [font-family:'Manrope',Helvetica] font-normal text-sm tracking-[0] leading-[22.4px]">
              Operating System
            </div>
          </Badge>

          <div className="flex w-[201px] items-center justify-between">
            {socialIcons.map((social, index) => (
              <div
                key={index}
                className={
                  social.alt === "Logo" ? "relative w-[22px] h-[22px]" : ""
                }
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
