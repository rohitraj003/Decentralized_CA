import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import AddOrganization from "./AddOrganization";
import IssueCertificate from "./IssueCertificate";
import VerifyCertificate from "./VerifyCertificate";
import RevokeCertificate from "./RevokeCertificate";

const DeskLight = () => {
  return (
    <Router>
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

          {/* Navigation */}
          <HeaderSection />

          {/* Routes for Different Pages */}
          <Routes>
            <Route path="/" element={<MainContentSection />} />
            <Route path="/add-organization" element={<AddOrganization />} />
            <Route path="/issue-certificate" element={<IssueCertificate />} />
            <Route path="/verify-certificate" element={<VerifyCertificate />} />
            <Route path="/revoke-certificate" element={<RevokeCertificate />} />
          </Routes>

          {/* Footer 
          <FooterSection />*/}
        </div>
      </main>
    </Router>
  );
};

export default DeskLight;
