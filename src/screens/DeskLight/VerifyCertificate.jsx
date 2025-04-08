import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationResult, setVerificationResult] = useState("");

  // Simulated verification (replace with blockchain logic)
  const verifyCertificate = async () => {
    if (!certificateId) {
      alert("Please enter a Certificate ID.");
      return;
    }

    // Simulate checking certificate on blockchain (Replace this with contract call)
    if (certificateId === "123456") {
      setVerificationResult("✅ Certificate is valid.");
    } else {
      setVerificationResult("❌ Certificate not found or revoked.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 mt-16">
      <h1 className="text-3xl font-bold text-center">Verify Certificate</h1>
      <form className="flex flex-col gap-4 w-full max-w-lg mt-6">
        <Input
          type="text"
          placeholder="Enter Certificate ID"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
          required
        />
        <Button onClick={verifyCertificate} className="bg-green-500 text-white">
          Verify Certificate
        </Button>
      </form>
      {verificationResult && <p className="mt-4 font-bold">{verificationResult}</p>}
    </div>
  );
};

export default VerifyCertificate;
