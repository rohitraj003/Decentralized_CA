import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

const AddOrganization = () => {
  const [name, setName] = useState("");
  const [orgAddress, setOrgAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding Organization:", { name, orgAddress, description });
    // TODO: Call smart contract function to store data on blockchain
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 mt-16">
      <h1 className="text-3xl font-bold text-center">Add New Organizer</h1>
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
    </div>
  );
  
};
export default AddOrganization; 