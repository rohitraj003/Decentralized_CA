import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { verifyCertificateDetails, voteToVerifyCertificate } from "../../blockchainService";
import { useWallet } from "../../WalletProvider";

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [certificateData, setCertificateData] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const { account } = useWallet();

  const fetchAndDisplayCertificate = async () => {
    try {
      setLoading(true);
      setStatus("Fetching...");
      const data = await verifyCertificateDetails(certificateId);
      setCertificateData(data);
      setStatus("Certificate found.");
    } catch (err) {
      setCertificateData(null);
      setStatus("❌ Certificate not found.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdminVote = async () => {
    try {
      setStatus("Submitting your vote...");
      await voteToVerifyCertificate(certificateId);
      const updatedData = await verifyCertificateDetails(certificateId);
      setCertificateData(updatedData);
      setStatus("✅ Vote recorded. Verification status updated.");
    } catch (err) {
      console.error(err);
      setStatus("❌ You might have already voted or something went wrong.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 mt-16">
      <h1 className="text-3xl font-bold text-center mb-6">Verify Certificate</h1>
      <form
        className="flex flex-col gap-4 w-full max-w-xl"
        onSubmit={(e) => {
          e.preventDefault();
          fetchAndDisplayCertificate();
        }}
      >
        <Input
          type="text"
          placeholder="Enter Certificate Hash"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
          required
        />
        <Button type="submit" className="bg-green-600 text-white">
          {loading ? "Searching..." : "Search Certificate"}
        </Button>
      </form>

      {status && <p className="mt-4 font-medium">{status}</p>}

      {certificateData && (
        <div className="mt-8 bg-white shadow-xl rounded-2xl p-6 w-full max-w-2xl space-y-4">
          <h2 className="text-xl font-semibold mb-2 text-center">Certificate Details</h2>
          <p><strong>Recipient:</strong> {certificateData.recipientName}</p>
          <p><strong>Wallet:</strong> {certificateData.recipientWallet}</p>
          <p><strong>Title:</strong> {certificateData.certificateTitle}</p>
          <p><strong>Issued:</strong> {new Date(certificateData.issueDate * 1000).toLocaleString()}</p>
          <p><strong>Expiry:</strong> {new Date(certificateData.expiryDate * 1000).toLocaleString()}</p>
          <p><strong>IPFS Hash:</strong> <a href={`https://ipfs.io/ipfs/${certificateData.ipfsHash}`} target="_blank" rel="noreferrer">{certificateData.ipfsHash}</a></p>
          <p><strong>Valid:</strong> {certificateData.isValid ? "✅" : "❌ Revoked"}</p>
          <p><strong>Verified:</strong> {certificateData.isVerified ? "✅ Verified by multiple admins" : "❌ Not yet verified"}</p>

          {certificateData.isValid && !certificateData.isVerified && (
            <Button onClick={handleAdminVote} className="bg-blue-600 text-white">
              Vote to Verify (Admin Only)
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default VerifyCertificate;
