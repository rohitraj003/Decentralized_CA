import React from "react";
import {FooterSection} from "./sections/FooterSection/FooterSection.jsx";
import {HeaderSection} from "./sections/HeaderSection/HeaderSection.jsx";
import {MainContentSection} from "./sections/MainContentSection/MainContentSection.jsx";

const DeskLight = () => {
  return (
    <main className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Background decorative elements */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <img
            className="absolute w-[1289px] h-[912px] top-0 left-1/2 -translate-x-1/2"
            alt="Top glow effect"
            src="/glow-1.svg"
          />
          <img
            className="absolute w-[881px] h-[623px] top-[2380px] left-1/2 -translate-x-1/2"
            alt="Bottom glow effect"
            src="/glow.svg"
          />
        </div>

        {/* Main content structure */}
        <div className="flex flex-col w-full">
          <HeaderSection />
          <MainContentSection />
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default DeskLight;
