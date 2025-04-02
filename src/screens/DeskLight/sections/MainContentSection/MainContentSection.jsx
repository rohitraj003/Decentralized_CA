import React from "react";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { ArrowUpRightIcon } from "lucide-react";

// Feature data for the grid
const featureItems = [
  {
    icon: "/vector-15.svg",
    title: "Tamper-Proof Certificates",
    description: "Immutable & Verifiable on the Blockchain.",
  },
  {
    icon: "/vector-2.svg",
    title: "Decentralized & Secure",
    description:
      "Trustless System with Full Transparency.",
  },
  {
    icon: "/vector-6.svg",
    title: "Instant Verification",
    description: "No Middlemen, No Delays.",
  },
  {
    icon: "/vector-10.svg",
    title: "Cross-Platform Verification",
    description:
      "Verify certificates from any device with an internet connection.",
  },
  {
    icon: "/vector-16.svg",
    title: "Open API Integration",
    description:
      "Allow institutions and employers to integrate with our system.",
  },
  {
    icon: "/vector-8.svg",
    title: "Scalable Infrastructure",
    description:
      "Handle thousands of certificates without performance loss.",
  },
];

export const MainContentSection = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center w-full gap-24 py-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-12 w-full max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-black text-[#07070a] text-5xl md:text-[85.3px] leading-tight">
            Empowering Trust
            <br />
            with Blockchain-Powered Certification
          </h2>
          <p className="text-[#212333] text-lg md:text-xl">
            Issue, Verify, and Revoke Certificates with Complete Security & Transparency
          </p>
        </div>

        {/* Buttons for navigation */}
        <div className="flex items-center gap-10">
          <Button
            className="bg-[#96e963] text-[#000000] hover:bg-[#85d855]"
            onClick={() => navigate("/issue-certificate")}
          >
            Issue Certificate
            <img
              className="ml-2 w-[5.25px] h-[9.63px]"
              alt="Vector"
              src="/vector-9.svg"
            />
          </Button>
          <Button
            className="bg-[#96e963] text-[#000000] hover:bg-[#85d855]"
            onClick={() => navigate("/verify-certificate")}
          >
            Verify Certificate
            <img
              className="ml-2 w-[5.25px] h-[9.63px]"
              alt="Vector"
              src="/vector-9.svg"
            />
          </Button>
          <Button
            className="bg-[#96e963] text-[#000000] hover:bg-[#85d855]"
            onClick={() => navigate("/revoke-certificate")}
          >
            Revoke Certificate
            <img
              className="ml-2 w-[5.25px] h-[9.63px]"
              alt="Vector"
              src="/vector-9.svg"
            />
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10 max-w-5xl">
        {featureItems.map((feature, index) => (
          <div key={index} className="flex flex-col w-full max-w-[252px] gap-2">
            <div className="flex items-center gap-2">
              <div className="flex w-[30px] h-[30px] items-center justify-center bg-[#ffffff1a] rounded-[5px] overflow-hidden shadow-[inset_0px_-2px_2px_32px_#ffffff0d] backdrop-blur-[1px]">
                <img
                  className="relative"
                  alt={feature.title}
                  src={feature.icon}
                />
                <div className="absolute w-[38px] h-[18px] top-[22px] -left-1 bg-[#96e963] rounded-[19.03px/8.81px] blur-[9.73px] opacity-40" />
              </div>
              <div className="font-bold text-[#07070a] text-sm [font-family:'Blanc_Groove-Bold',Helvetica]">
                {feature.title}
              </div>
            </div>
            <p className="text-[#4d4f5c] text-xs [font-family:'Urbanist',Helvetica] font-medium leading-4">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Trusted By Section */}
      <div className="flex flex-col items-center gap-9 w-full">
        <h3 className="font-bold text-[#0d0e14] text-lg text-center [font-family:'Manrope',Helvetica]">
          Trusted by the world leaders
        </h3>
        <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
          <img className="h-10 w-auto" alt="Logo" src="/logo-2.svg" />
          <img className="h-[30px] w-auto" alt="Logo" src="/logo-5.svg" />
          <img className="h-[41px] w-auto" alt="Logo" src="/logo-8.svg" />
          <img className="h-10 w-auto" alt="Logo" src="/logo-7.svg" />
          <img className="h-[30px] w-auto" alt="Logo" src="/logo-3.svg" />
          <img className="h-10 w-auto" alt="Logo" src="/logo-6.svg" />
        </div>
      </div>

      {/* CTA Banner */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-12 w-full max-w-7xl bg-white rounded-2xl border border-solid border-[#d3d3d6]">
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className="font-black text-[#07070a] text-3xl [font-family:'Blanc_Groove-Black',Helvetica]">
            Unlock the Power of Web3 Today!
          </h2>
          <p className="text-[#07070a] text-base [font-family:'Manrope',Helvetica]">
            Join us on the journey to the decentralized future.
          </p>
        </div>
        <Button className="bg-[#96e963] text-[#0d0e14] hover:bg-[#85d855]">
          Get Started
          <ArrowUpRightIcon className="ml-2 h-4 w-4" />
        </Button>
        <img
          className="hidden md:block absolute right-0 w-[372px] h-[386px]"
          alt="Bottom"
          src="/bottom.svg"
        />
      </div>

    

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl px-4">
        <div className="flex flex-col gap-12 md:w-1/2">
          <h2 className="font-bold text-[#07070a] text-4xl [font-family:'Manrope',Helvetica]">
            Get in touch
          </h2>
          <p className="text-[#4d4f5c] text-lg [font-family:'DM_Sans',Helvetica]">
            Contact us for additional details or assistance.
          </p>
        </div>
        <form className="flex flex-col gap-6 md:w-1/2">
          <div className="flex flex-col gap-2">
            <label className="text-[#0d0e14] text-sm [font-family:'Manrope',Helvetica]">
              Name
            </label>
            <Input
              className="bg-zinc-100 px-4 py-3 text-sm text-[#4d4f5c] [font-family:'Manrope',Helvetica]"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#0d0e14] text-sm [font-family:'Manrope',Helvetica]">
              E-mail
            </label>
            <Input
              className="bg-zinc-100 px-4 py-3 text-sm text-[#4d4f5c] [font-family:'Manrope',Helvetica]"
              placeholder="E-mail"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#0d0e14] text-sm [font-family:'Manrope',Helvetica]">
              Message
            </label>
            <Textarea
              className="h-[182px] bg-zinc-100 px-4 py-3 text-sm text-[#4d4f5c] [font-family:'Manrope',Helvetica]"
              placeholder="Add your message"
            />
          </div>
          <Button className="w-full bg-[#0d0e14] text-white text-base [font-family:'Manrope',Helvetica]">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};
