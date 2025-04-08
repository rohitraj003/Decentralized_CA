import React, { useState } from 'react';
import { create } from '@web3-storage/w3up-client';

const SetupIPFS = () => {
  const [status, setStatus] = useState('');

  const handleSetup = async () => {
    try {
      setStatus('🔐 Logging in...');
      const client = await create();

      const email = 'mitali.dixit04@gmail.com'; // your actual email
      const account = await client.login(email);
      await account.plan.wait(); // Wait until email is verified and plan is selected

      setStatus('🌌 Creating new space...');
      const space = await client.createSpace('my-space', { account });

      setStatus('🔗 Setting current space...');
      await client.setCurrentSpace(space.did());

      localStorage.setItem('w3up.space.did', space.did()); // Save for later use

      setStatus(`✅ Setup complete! Space DID: ${space.did()}`);
      console.log('New space created:', space.did());
    } catch (err) {
      console.error(err);
      setStatus('❌ Setup failed: ' + err.message);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>🔧 One-Time IPFS Setup</h2>
      <button onClick={handleSetup} style={{ padding: '10px 20px' }}>
        Run Setup
      </button>
      <p style={{ marginTop: '1rem' }}>{status}</p>
    </div>
  );
};

export default SetupIPFS;
