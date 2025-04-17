import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { revokeCertificateOnChain } from "../../blockchainService";

const RevokeCertificate = () => {
  const [certificateHash, setCertificateHash] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const revokeCertificate = async () => {
    if (!certificateHash) {
      alert("Please enter a certificate ID.");
      return;
    }

    try {
      setLoading(true);
      await revokeCertificateOnChain(certificateHash);
      setMessage(`❌ Certificate with ID ${certificateHash} has been successfully revoked.`);
    } catch (error) {
      setMessage(`⚠️ Failed to revoke certificate: ${error.message}`);
    } finally {
      setLoading(false);
      setCertificateHash("");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 mt-16">
      <h1 className="text-3xl font-bold text-center">Revoke Certificate</h1>
      <div className="flex flex-col gap-4 w-full max-w-lg mt-6">
        <Input
          type="text"
          placeholder="Enter Certificate ID"
          value={certificateHash}
          onChange={(e) => setCertificateHash(e.target.value)}
          required
        />
        <Button onClick={revokeCertificate} className="bg-red-500 text-white" disabled={loading}>
          {loading ? "Revoking..." : "Revoke Certificate"}
        </Button>
      </div>
      {message && <p className="mt-4 text-red-500 font-bold">{message}</p>}
    </div>
  );
};

export default RevokeCertificate;
