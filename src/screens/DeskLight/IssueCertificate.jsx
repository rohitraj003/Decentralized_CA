import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useWallet } from "../../WalletProvider";
import { issueCertificate, checkIssuer } from "../../blockchainService";

const IssueCertificate = () => {
  const { account } = useWallet();
  const [recipientName, setRecipientName] = useState("");
  const [recipientWallet, setRecipientWallet] = useState("");
  const [certificateTitle, setCertificateTitle] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isIssuer, setIsIssuer] = useState(false);
  const [certDetails, setCertDetails] = useState(null);

  useEffect(() => {
    const verifyIssuer = async () => {
      if (account) {
        const result = await checkIssuer(account);
        setIsIssuer(result);
      }
    };
    verifyIssuer();
  }, [account]);

  const handleIssueCertificate = async (e) => {
    e.preventDefault();
    try {
      if (!isIssuer) {
        alert("You are not authorized to issue certificates!");
        return;
      }

      const expiryTimestamp = Math.floor(new Date(expiryDate).getTime() / 1000);
      const { certHash, ipfsHash } = await issueCertificate(
        recipientName,
        recipientWallet,
        certificateTitle,
        expiryTimestamp
      );
      setCertDetails({ certHash, ipfsHash });
    } catch (error) {
      alert("Certificate issuance failed!");
      console.error("Certificate issuance failed:", error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(certDetails?.certHash).then(() => {
      alert("Certificate Hash copied to clipboard!");
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 mt-16">
      <h1 className="text-3xl font-bold text-center">Issue Certificate</h1>

      {isIssuer ? (
        <form className="flex flex-col gap-4 w-full max-w-lg mt-6" onSubmit={handleIssueCertificate}>
          <Input
            type="text"
            placeholder="Recipient Name"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Recipient Wallet Address"
            value={recipientWallet}
            onChange={(e) => setRecipientWallet(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Certificate Title"
            value={certificateTitle}
            onChange={(e) => setCertificateTitle(e.target.value)}
            required
          />
          <Input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
          <Button type="submit" className="bg-[#96e963] text-black">
            Issue Certificate
          </Button>
        </form>
      ) : (
        <p className="text-red-500 mt-4">You are not an authorized issuer.</p>
      )}

      {certDetails && (
        <div className="mt-6 text-center flex flex-col items-center gap-2">
          <p>
            <strong>Certificate Hash:</strong> {certDetails.certHash}
          </p>
          <Button onClick={handleCopy} className="bg-blue-500 text-white px-4 py-2 rounded">
            Copy Certificate Hash
          </Button>
          <p>
            <strong>View on IPFS:</strong>{" "}
            <a
              href={`https://${certDetails.ipfsHash}.ipfs.dweb.link`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Open Certificate
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default IssueCertificate;
