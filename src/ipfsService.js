import { create } from '@web3-storage/w3up-client';


// Replace with your actual space DID (optional use)
//const EXPECTED_SPACE_DID = 'did:key:z6Mkk8ot7MRFHoM3PS5MxdrELmQTKy4kURdLYcuF56Huzvim';


export const initWeb3Client = async () => {
    const client = await create();
    let space = client.currentSpace();
      if (!space) {
        const spaceDID = localStorage.getItem('w3up.space.did');
        if(!spaceDID) {
          console.log('No space DID found in local storage. Please run setup first.');
          throw new Error('Missing space DID. Please run setup first.');
        }
      space = await client.addSpace(spaceDID);
      await client.setCurrentSpace(space.did());
    }
    return client;
  };

export const uploadCertificateToIPFS = async (metadata) => {
  try {
    const client = await initWeb3Client();

    const metadataBlob = new Blob([JSON.stringify(metadata)], {
      type: 'application/json',
    });
    const file = new File([metadataBlob], 'certificate.json');

    const cid = await client.uploadFile(file);
    console.log('Uploaded to IPFS with CID:', cid.toString());

    return cid.toString();
  } catch (error) {
    console.error('IPFS upload failed:', error);
    throw error;
  }
};
