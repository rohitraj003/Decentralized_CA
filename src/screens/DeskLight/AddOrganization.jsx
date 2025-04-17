import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useWallet } from "../../WalletProvider";
import { checkAdmin } from "../../blockchainService";
import { addIssuer } from "../../blockchainService";

const AddOrganization = () => {
  const [name, setName] = useState("");
  const [orgAddress, setOrgAddress] = useState("");
  const [description, setDescription] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const { account } = useWallet();

  useEffect(() => {
    const verifyAdmin = async () => {
      if (account) {
        const result = await checkAdmin(account);
        setIsAdmin(result);
      }
    };
    verifyAdmin();
  }, [account]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Adding Organization:", { name, orgAddress, description });
    if (!isAdmin) {
      alert("You are not authorized to add an organization.");
      return;
    }
    const added = await addIssuer(orgAddress);
    if (added) {
      alert("Organization successfully added as an issuer!");
    } else {
      alert("Failed to add organization.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 mt-16">
      <h1 className="text-3xl font-bold text-center">Add New Organization</h1>
      {isAdmin ? (
        <form className="flex flex-col gap-4 w-full max-w-lg mt-6" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Organization Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Organization Address (Wallet Address)"
            value={orgAddress}
            onChange={(e) => setOrgAddress(e.target.value)}
            required
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Button type="submit" className="bg-[#96e963] text-black">
            Add Organizer
          </Button>
        </form>
      ) : (
        <p className="text-red-500 mt-6">Only admin can add organizations.</p>
      )}
    </div>
  );
};

export default AddOrganization;
