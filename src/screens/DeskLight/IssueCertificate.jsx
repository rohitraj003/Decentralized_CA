import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const IssueCertificate = () => {
  const [recipient, setRecipient] = useState("");
  const [certificateHash, setCertificateHash] = useState("");
  const [organization, setOrganization] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [message, setMessage] = useState("");

  const issueCertificate = () => {
    if (!recipient || !certificateHash || !organization || !issueDate) {
      alert("Please enter all details.");
      return;
    }

    setMessage(`✅ Certificate issued to ${recipient} by ${organization} on ${issueDate}`);
    
    // Clear fields after submission
    setRecipient("");
    setCertificateHash("");
    setOrganization("");
    setIssueDate("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 mt-16">
      <h1 className="text-3xl font-bold text-center">Issue Certificate</h1>
      <form className="flex flex-col gap-4 w-full max-w-lg mt-6">
        <Input 
          type="text" 
          placeholder="Recipient Name" 
          value={recipient} 
          onChange={(e) => setRecipient(e.target.value)} 
          required 
        />
        <Input 
          type="text" 
          placeholder="Certificate ID" 
          value={certificateHash} 
          onChange={(e) => setCertificateHash(e.target.value)} 
          required 
        />
        <Input 
          type="text" 
          placeholder="Organization Name" 
          value={organization} 
          onChange={(e) => setOrganization(e.target.value)} 
          required 
        />
        <Input 
          type="date" 
          value={issueDate} 
          onChange={(e) => setIssueDate(e.target.value)} 
          required 
        />
        <Button onClick={issueCertificate} className="bg-green-500 text-white">
          Issue Certificate
        </Button>
      </form>
      {message && <p className="mt-4 text-green-500 font-bold">{message}</p>}
    </div>
  );
};

export default IssueCertificate;
