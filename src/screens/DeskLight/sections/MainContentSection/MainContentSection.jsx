import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Separator } from "../../../../components/ui/separator";
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

// Pricing plans data
const pricingPlans = [
  {
    title: "Basic",
    price: "$9.99",
    description: "Essential features for beginners.",
    buttonText: "Get Started with Basic",
    buttonVariant: "outline",
    features: [
      "Basic Platform Access",
      "Email Support",
      "Limited Data Storage",
    ],
    popular: false,
  },
  {
    title: "Pro",
    price: "$19.99",
    description: "Advanced tools for growth.",
    buttonText: "Get Started with Pro",
    buttonVariant: "default",
    features: [
      "Full Platform Access",
      "Email and Chat Support",
      "Unlimited Data Storage",
    ],
    popular: true,
  },
  {
    title: "Premium",
    price: "$29.99",
    description: "Top-tier support and customization.",
    buttonText: "Get Started with Premium",
    buttonVariant: "outline",
    features: [
      "Advanced Platform Access",
      "24/7 Support via Chat, and Phone",
      "Customized Features",
    ],
    popular: false,
  },
];

// Feature cards data
const featureCards = [
  {
    title: "Ready to go services",
    description: "Streamlining solutions for swift success",
    type: "tags",
    background: "/bottom-1.svg",
  },
  {
    title: "For growing teams",
    description: "Tailored support to give you progress",
    type: "invite",
    background: "/vector-25.svg",
  },
  {
    title: "Powerful APIs for developers",
    description: "Seamless Integration for your company",
    type: "code",
  },
  {
    title: "The best blockchains out there",
    description: "Pioneering paths in decentralized solutions",
    type: "blockchain",
  },
  {
    title: "Web 3.0 development",
    description: "Crafting tomorrow's digital landscape today",
    type: "tags-list",
  },
];

export const MainContentSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-24 py-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-12 w-full max-w-7xl px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-black text-[#07070a] text-5xl md:text-[85.3px] leading-tight [font-family:'Blanc_Groove-Black',Helvetica]">
            Empowering Trust
            <br />
            with Blockchain-Powered Certification
          </h2>
          <p className="text-[#212333] text-lg md:text-xl [font-family:'Manrope',Helvetica] font-normal leading-relaxed max-w-2xl">
            Issue, Verify, and Revoke Certificates with Complete Security & Transparency
          </p>
        </div>
        <div className="flex items-center gap-10">
          <Button className="bg-[#96e963] text-[#000000] hover:bg-[#85d855]">
          Issue Certificate
            <img
              className="ml-2 w-[5.25px] h-[9.63px]"
              alt="Vector"
              src="/vector-9.svg"
            />
          </Button>
          <Button className="bg-[#96e963] text-[#000000] hover:bg-[#85d855]">
          Verify Certificate
            <img
              className="ml-2 w-[5.25px] h-[9.63px]"
              alt="Vector"
              src="/vector-9.svg"
            />
          </Button>
          <Button className="bg-[#96e963] text-[#000000] hover:bg-[#85d855]">
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

      {/* Pricing Section */}
      <div className="flex flex-col items-center gap-14 w-full max-w-7xl px-4">
        <div className="flex flex-col items-center gap-9 text-center">
          <h2 className="font-bold text-[#0d0e14] text-4xl [font-family:'Manrope',Helvetica]">
            Pricing
          </h2>
          <div className="flex flex-col items-center gap-3">
            <p className="text-[#a4a7ae] text-lg max-w-md [font-family:'DM_Sans',Helvetica]">
              Explore our pricing plans tailored to fit your needs.
            </p>
            <div className="flex items-center p-[5px] bg-[#07070a] rounded-full border border-solid border-[#4d4f5c]">
              <div className="flex items-center px-2 py-[3px]">
                <span className="text-white text-[13px] [font-family:'Manrope',Helvetica]">
                  Montly
                </span>
              </div>
              <div className="flex items-center px-2 py-[3px] bg-white rounded-full">
                <span className="text-[#0d0e14] text-[13px] [font-family:'Manrope',Helvetica]">
                  Yearly •20% off
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className="flex flex-col h-[423px] bg-white rounded-xl border-[0.5px] border-[#a6a7ad] backdrop-blur-[12.9px] overflow-hidden"
            >
              <CardContent className="flex flex-col justify-between h-full p-5">
                <div className="flex flex-col h-[193px] justify-between">
                  <div className="flex items-center justify-between w-full">
                    <h3 className="font-semibold text-[#0d0e14] text-xl [font-family:'Manrope',Helvetica]">
                      {plan.title}
                    </h3>
                    {plan.popular && (
                      <Badge className="bg-[#96e963] text-[#07070a]">
                        Most popular
                      </Badge>
                    )}
                  </div>
                  <div className="[font-family:'Manrope',Helvetica] text-[32px]">
                    <span className="font-semibold text-[#0d0e14]">
                      {plan.price}{" "}
                    </span>
                    <span className="font-semibold text-[#797c83] text-xl">
                      /
                    </span>
                    <span className="text-[#797c83] text-xl">month</span>
                  </div>
                  <p className="text-[#a4a7ae] text-lg [font-family:'DM_Sans',Helvetica]">
                    {plan.description}
                  </p>
                  <Button
                    variant={
                      plan.buttonVariant === "outline" ? "outline" : "default"
                    }
                    className={`w-full ${
                      plan.buttonVariant === "default"
                        ? "bg-[#96e963] text-[#1e2f14] hover:bg-[#85d855]"
                        : "text-[#1a1c29] border-[#0000004c]"
                    }`}
                  >
                    {plan.buttonText}
                    <img
                      className="ml-2 w-[6.5px] h-[11.5px]"
                      alt="Vector"
                      src="/vector-3.svg"
                    />
                  </Button>
                </div>
                <div className="flex flex-col gap-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 h-10">
                      <img
                        className="w-[23px] h-[23px]"
                        alt="Check"
                        src="/check.svg"
                      />
                      <span className="font-normal text-[#0d0e14] text-base [font-family:'Manrope',Helvetica]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                {index === 1 && (
                  <div className="absolute w-[205px] h-[146px] top-[-106px] left-[68px] bg-[#96e963] rounded-[102.26px/73.07px] blur-[47.65px] opacity-10" />
                )}
              </CardContent>
            </Card>
          ))}
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

      {/* Features Showcase */}
      <div className="flex flex-col items-center gap-14 w-full max-w-7xl px-4">
        <div className="flex flex-col items-center gap-9 text-center">
          <h2 className="font-bold text-[#0d0e14] text-4xl [font-family:'Manrope',Helvetica]">
            Explore Our Feature
          </h2>
          <p className="text-[#4d4f5c] text-lg [font-family:'DM_Sans',Helvetica]">
            Discover the powerful features that make our platform stand out
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Ready to go services */}
          <Card className="col-span-1 md:col-span-2 h-[317px] bg-white rounded-xl border-[0.5px] border-[#d3d3d6] overflow-hidden">
            <CardContent className="p-6 relative h-full">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[#0d0e14] text-xl [font-family:'Manrope',Helvetica]">
                  Ready to go services
                </h3>
                <p className="text-[#4d4f5c] text-[15px] [font-family:'Manrope',Helvetica]">
                  Streamlining solutions for swift success
                </p>
              </div>
              <img
                className="absolute top-[-118px] right-0"
                alt="Background"
                src="/bottom-1.svg"
              />
              <div className="absolute top-[116px] left-2 flex flex-wrap gap-3">
                {[
                  { icon: "/vector-4.svg", text: "Powerful APIs" },
                  { icon: "/vector-13.svg", text: "For Design" },
                  { icon: "/card.svg", text: "Cybersecurity" },
                  { icon: "/card-1.svg", text: "Decentralized" },
                ].map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-2 bg-zinc-100 rounded-lg border-[0.77px] border-[#7a7b85]"
                  >
                    <img
                      className="w-[18.5px]"
                      alt={tag.text}
                      src={tag.icon}
                    />
                    <span className="text-[#14151f] text-[12.3px] [font-family:'Inter',Helvetica]">
                      {tag.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute top-[174px] left-[30px] flex flex-wrap gap-3">
                {[
                  { icon: "/container.svg", text: "Colaborative teams" },
                  { icon: "/card.svg", text: "Safe Space" },
                  { icon: "/vector-1.svg", text: "Revolution" },
                  { icon: "/vector.svg", text: "Scalable" },
                ].map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-2 bg-zinc-100 rounded-lg border-[0.77px] border-[#7a7b85]"
                  >
                    <img
                      className="w-[18px]"
                      alt={tag.text}
                      src={tag.icon}
                    />
                    <span className="text-[#14151f] text-[12.3px] [font-family:'Inter',Helvetica]">
                      {tag.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute top-[225px] left-[15px] flex flex-wrap gap-3">
                {[
                  { icon: "/vector-7.svg", text: "For Teams" },
                  { icon: "/vector-5.svg", text: "Decentralized" },
                  { icon: "/card.svg", text: "Cybersecurity" },
                  { icon: "/vector-4.svg", text: "Powerful APIs" },
                ].map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-2 bg-zinc-100 rounded-lg border-[0.77px] border-[#7a7b85]"
                  >
                    <img
                      className="w-[18px]"
                      alt={tag.text}
                      src={tag.icon}
                    />
                    <span className="text-[#14151f] text-[12.3px] [font-family:'Inter',Helvetica]">
                      {tag.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* For growing teams */}
          <Card className="col-span-1 md:col-span-2 h-[317px] bg-white rounded-2xl border border-[#d3d3d6] overflow-hidden">
            <CardContent className="p-6 relative h-full">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[#0d0e14] text-xl [font-family:'Manrope',Helvetica]">
                  For growing teams
                </h3>
                <p className="text-[#4d4f5c] text-[15px] [font-family:'Manrope',Helvetica]">
                  Tailored support to give you progress
                </p>
              </div>
              <img
                className="absolute w-[614px] h-28 top-[131px] -left-16"
                alt="Vector"
                src="/vector-25.svg"
              />
              <div className="absolute w-[452px] h-[323px] top-[-174px] right-0 bg-[#62ff8e] rounded-[225.87px/161.39px] blur-[105.24px] opacity-10" />
              <div className="absolute top-[155px] left-[142px] flex items-center gap-2 px-4 py-2 bg-zinc-100 rounded-[80px] border-[0.5px] border-[#7a7b85]">
                <img
                  className="w-[18.5px] h-[18.5px]"
                  alt="Envelope"
                  src="/envelopesimple.svg"
                />
                <span className="text-[#0d0e14] text-[12.3px] font-medium [font-family:'Inter',Helvetica]">
                  Invite user to this team
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Powerful APIs for developers */}
          <Card className="h-[380px] bg-white rounded-2xl border border-[#d3d3d6] overflow-hidden">
            <CardContent className="p-6 relative h-full">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[#0d0e14] text-xl [font-family:'Manrope',Helvetica]">
                  Powerful APIs for developers
                </h3>
                <p className="text-[#4d4f5c] text-[15px] [font-family:'Manrope',Helvetica]">
                  Seamless Integration for your company
                </p>
              </div>
              <pre className="mt-4 text-xs font-mono overflow-auto">
                <code className="text-[#4b4c51]">
                  // SPDX-License-Identifier:
                  <span className="text-[#63c217]"> MIT</span> pragma solidity
                  ^0.8.0; import
                  <span className="text-[#63c217]">"./IERC20.</span>
                  <span className="text-[#6146cd]">sol</span>
                  <span className="text-[#63c217]">";</span> contract MyToken{" "}
                  <span className="text-[#24adc4]">is</span> IERC20{" "}
                  <span className="text-white">&#123;</span> string public name{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-[#63c217]">"MyToken"</span>
                  <span className="text-white">;</span> string public symbol{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-[#63c217]">"MT"</span>
                  <span className="text-white">;</span> uint256 public override
                  totalSupply<span className="text-[#63c217]">;</span>{" "}
                  mapping(<span className="text-[#24adc4]">address</span>{" "}
                  <span className="text-white">=&gt;</span>{" "}
                  <span className="text-[#6146cd]">uint256</span>) public override
                  balanceOf; mapping(<span className="text-[#24adc4]">address</span>{" "}
                  <span className="text-white">=&gt;</span>{" "}
                  <span className="text-[#6146cd]">mapping</span>
                  <span className="text-white">(</span>address{" "}
                  <span className="text-white">=&gt;</span>{" "}
                  uint256<span className="text-white">))</span> public override
                  allowance;
                </code>
              </pre>
            </CardContent>
          </Card>

          {/* The best blockchains out there */}
          <Card className="h-[380px] bg-white rounded-2xl border border-[#d3d3d6] overflow-hidden">
            <CardContent className="p-6 relative h-full">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[#0d0e14] text-xl [font-family:'Manrope',Helvetica]">
                  The best blockchains out there
                </h3>
                <p className="text-[#4d4f5c] text-[15px] [font-family:'Manrope',Helvetica]">
                  Pioneering paths in decentralized solutions
                </p>
              </div>
              <div className="relative w-full h-[223px] mt-4">
                <img
                  className="absolute w-11 h-11 top-6 left-[67px]"
                  alt="Switch container"
                  src="/switch-container.svg"
                />
                <img
                  className="absolute w-11 h-11 top-1.5 left-32"
                  alt="Switch container"
                  src="/switch-container-1.svg"
                />
                <img
                  className="absolute w-11 h-11 top-6 left-[194px]"
                  alt="Vertical container"
                  src="/vertical-container-1.svg"
                />
                <img
                  className="absolute w-11 h-11 top-[90px] left-[38px]"
                  alt="Switch"
                  src="/switch.svg"
                />
                <div className="absolute w-11 h-11 top-[90px] left-[218px] bg-[url(/button-container.png)] bg-[100%_100%]" />
                <div className="absolute w-11 h-11 top-[149px] left-[67px]">
                  <div className="h-11 bg-black rounded-[100px]">
                    <div className="relative w-7 h-[22px] top-[11px] left-2">
                      <img
                        className="absolute w-[26px] h-[21px] top-px left-0"
                        alt="Button"
                        src="/button.png"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className="absolute w-11 h-11 top-[175px] left-32"
                  alt="Vertical container"
                  src="/vertical-container.svg"
                />
                <img
                  className="absolute w-11 h-11 top-[149px] left-[194px]"
                  alt="Button container"
                  src="/button-container-1.svg"
                />
              </div>
            </CardContent>
          </Card>

          {/* Web 3.0 development */}
          <Card className="h-[380px] bg-white rounded-2xl border border-[#d3d3d6] overflow-hidden">
            <CardContent className="p-6 relative h-full">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[#0d0e14] text-xl [font-family:'Manrope',Helvetica]">
                  Web 3.0 development
                </h3>
                <p className="text-[#4d4f5c] text-[15px] [font-family:'Manrope',Helvetica]">
                  Crafting tomorrow's digital landscape today
                </p>
              </div>
              <div className="flex flex-col gap-[22px] mt-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center px-4 py-2 bg-zinc-100 rounded-[80px] border-[0.5px] border-[#7a7b85]">
                    <span className="text-[#0d0e14] text-sm [font-family:'Manrope',Helvetica]">
                      Web 3.0 development
                    </span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-zinc-100 rounded-[80px] border-[0.5px] border-[#7a7b85]">
                    <span className="text-[#0d0e14] text-sm [font-family:'Manrope',Helvetica]">
                      Growth
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center px-4 py-2 bg-zinc-100 rounded-[80px] border-[0.5px] border-[#7a7b85]">
                    <span className="text-[#0d0e14] text-sm [font-family:'Manrope',Helvetica]">
                      APIs
                    </span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-zinc-100 rounded-[80px] border-[0.5px] border-[#7a7b85]">
                    <span className="text-[#0d0e14] text-sm [font-family:'Manrope',Helvetica]">
                      Go-to-Market Solutions
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center px-4 py-2 bg-zinc-100 rounded-[80px] border-[0.5px] border-[#7a7b85]">
                    <span className="text-[#0d0e14] text-sm [font-family:'Manrope',Helvetica]">
                      Easy-to-use interface
                    </span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-zinc-100 rounded-[80px] border-[0.5px] border-[#7a7b85]">
                    <span className="text-[#0d0e14] text-sm [font-family:'Manrope',Helvetica]">
                      Scalable
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center px-4 py-2 bg-zinc-100 rounded-[80px] border-[0.5px] border-[#7a7b85]">
                    <span className="text-[#0d0e14] text-sm [font-family:'Manrope',Helvetica]">
                      Fast Integrations
                    </span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-zinc-100 rounded-[80px] border-[0.5px] border-[#7a7b85]">
                    <span className="text-[#0d0e14] text-sm [font-family:'Manrope',Helvetica]">
                      Accessibility
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
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
