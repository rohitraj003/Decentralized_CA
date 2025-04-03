export const CONTRACT_ADDRESS = "0xD7ACd2a9FD159E69Bb102A1ca21C9a3e3A5F771B" 

export const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "issuer",
				"type": "address"
			}
		],
		"name": "addIssuer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "certHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "recipientName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "certificateTitle",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "issuedBy",
				"type": "address"
			}
		],
		"name": "CertificateIssued",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "certHash",
				"type": "bytes32"
			}
		],
		"name": "CertificateRevoked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_recipientName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_recipientWallet",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_certificateTitle",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_expiryDate",
				"type": "uint256"
			}
		],
		"name": "issueCertificate",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "issuer",
				"type": "address"
			}
		],
		"name": "IssuerAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "issuer",
				"type": "address"
			}
		],
		"name": "IssuerRemoved",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "issuer",
				"type": "address"
			}
		],
		"name": "removeIssuer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "certHash",
				"type": "bytes32"
			}
		],
		"name": "revokeCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "authorizedIssuers",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "certificates",
		"outputs": [
			{
				"internalType": "string",
				"name": "recipientName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "recipientWallet",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "certificateTitle",
				"type": "string"
			},
			{
				"internalType": "uint160",
				"name": "issuedBy",
				"type": "uint160"
			},
			{
				"internalType": "uint256",
				"name": "issueDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expiryDate",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isValid",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "certHash",
				"type": "bytes32"
			}
		],
		"name": "verifyCertificate",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];