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
  const [certHash, setCertHash] = useState("");

  useEffect(() => {
    const verifyIssuer = async () => {
      if (account) {
        const result = checkIssuer(account);
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
      const hash = await issueCertificate(recipientName, recipientWallet, certificateTitle, expiryTimestamp);
      setCertHash(hash);
    } catch (error) {
      console.error("Certificate issuance failed:", error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(certHash).then(() => {
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
      {certHash && (
        <div className="mt-4 text-center flex flex-col items-center gap-2">
          <p>Certificate Hash: <strong>{certHash}</strong></p>
          <Button onClick={handleCopy} className="bg-blue-500 text-white px-4 py-2 rounded">
            Copy to Clipboard
          </Button>
        </div>
      )}
    </div>
  );
};

export default IssueCertificate;