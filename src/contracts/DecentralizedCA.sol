// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DecentralizedCA {
    address public admin;

    struct Certificate {
        string recipientName;
        string recipientWallet;
        string certificateTitle;
        uint160 issuedBy;
        uint256 issueDate;
        uint256 expiryDate;
        string ipfsHash;
        string signature; 
        bool isValid;
    }

    mapping(bytes32 => Certificate) public certificates;
    mapping(address => bool) public authorizedIssuers;

    event CertificateIssued(
        bytes32 indexed certHash,
        string recipientName,
        string certificateTitle,
        address issuedBy,
        string ipfsHash,
        string signature 
    );

    event CertificateRevoked(bytes32 indexed certHash);
    event IssuerAdded(address indexed issuer);
    event IssuerRemoved(address indexed issuer);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    modifier onlyIssuer() {
        require(authorizedIssuers[msg.sender], "Only authorized issuers can issue certificates");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function isAuthorizedIssuer(address user) external view returns (bool) {
        return authorizedIssuers[user];
    }

    function isAdmin(address user) external view returns (bool) {
        return user == admin;
    }

    function addIssuer(address issuer) external onlyAdmin {
        authorizedIssuers[issuer] = true;
        emit IssuerAdded(issuer);
    }

    function removeIssuer(address issuer) external onlyAdmin {
        authorizedIssuers[issuer] = false;
        emit IssuerRemoved(issuer);
    }

    function issueCertificate(
        string memory _recipientName,
        string memory _recipientWallet,
        string memory _certificateTitle,
        string memory _ipfsHash,
        string memory _signature, 
        uint256 _expiryDate
    ) external onlyIssuer returns (bytes32) {
        bytes32 certHash = keccak256(
            abi.encodePacked(_recipientName, _recipientWallet, _certificateTitle, block.timestamp)
        );

        certificates[certHash] = Certificate({
            recipientName: _recipientName,
            recipientWallet: _recipientWallet,
            certificateTitle: _certificateTitle,
            issuedBy: uint160(msg.sender),
            issueDate: block.timestamp,
            expiryDate: _expiryDate,
            ipfsHash: _ipfsHash,
            signature: _signature,
            isValid: true
        });

        emit CertificateIssued(certHash, _recipientName, _certificateTitle, msg.sender, _ipfsHash, _signature);
        return certHash;
    }

    function verifyCertificate(bytes32 certHash)
        external
        view
        returns (
            string memory,
            string memory,
            string memory,
            uint256,
            uint256,
            string memory,
            string memory,
            bool
        )
    {
        Certificate memory cert = certificates[certHash];
        require(cert.issueDate > 0, "Certificate not found");
        return (
            cert.recipientName,
            cert.recipientWallet,
            cert.certificateTitle,
            cert.issueDate,
            cert.expiryDate,
            cert.ipfsHash,
            cert.signature,
            cert.isValid
        );
    }

    function revokeCertificate(bytes32 certHash) external onlyAdmin {
        require(certificates[certHash].isValid, "Certificate is already revoked or doesn't exist");
        certificates[certHash].isValid = false;
        emit CertificateRevoked(certHash);
    }
}
