// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DecentralizedCA {
    mapping(address => bool) public admins;
    address[] public adminList;

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
        bool verified; 
    }

    mapping(bytes32 => Certificate) public certificates;
    mapping(address => bool) public authorizedIssuers;

    mapping(bytes32 => mapping(address => bool)) public certificateVerifications;
    // Counts the total votes for certificate verification.
    mapping(bytes32 => uint256) public verificationVotes;
    // threshold (require at least 2 votes)
    uint256 public constant VERIFICATION_THRESHOLD = 2;

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

    event CertificateVerified(bytes32 indexed certHash, uint256 voteCount);
    event AdminProposed(address indexed proposedAdmin);
    event AdminAdded(address indexed newAdmin);

    modifier onlyAdmin() {
        require(admins[msg.sender], "Only admin can perform this action");
        _;
    }

    modifier onlyIssuer() {
        require(authorizedIssuers[msg.sender], "Only authorized issuers can issue certificates");
        _;
    }

    constructor() {
        // Initialize the deployer as the first admin.
        admins[msg.sender] = true;
        adminList.push(msg.sender);
        // also mark the deployer as an authorized issuer if desired.
        authorizedIssuers[msg.sender] = true;
        emit IssuerAdded(msg.sender);
    }

    function isAuthorizedIssuer(address user) external view returns (bool) {
        return authorizedIssuers[user];
    }

    function isAdmin(address user) external view returns (bool) {
        return admins[user];
    }

    function addIssuer(address issuer) external onlyAdmin {
        authorizedIssuers[issuer] = true;
        emit IssuerAdded(issuer);
    }

    function addAdmin(address newAdmin) external onlyAdmin {
        require(!admins[newAdmin], "Already an admin");
        admins[newAdmin] = true;
        adminList.push(newAdmin);
        emit AdminAdded(newAdmin);
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
            isValid: true,
            verified: false  // Initially, not verified
        });

        emit CertificateIssued(certHash, _recipientName, _certificateTitle, msg.sender, _ipfsHash, _signature);
        return certHash;
    }

    // Function to revoke a certificate (only admin)
    function revokeCertificate(bytes32 certHash) external onlyAdmin {
        require(certificates[certHash].isValid, "Certificate is already revoked or doesn't exist");
        certificates[certHash].isValid = false;
        emit CertificateRevoked(certHash);
    }

    // Function for admins to vote to verify a certificate.
    function verifyCertificateByAdmin(bytes32 certHash) external onlyAdmin {
        // Ensure the certificate exists
        require(certificates[certHash].issueDate > 0, "Certificate not found");
        // Admin cannot vote twice for the same certificate.
        require(!certificateVerifications[certHash][msg.sender], "Admin already voted");
        certificateVerifications[certHash][msg.sender] = true;
        verificationVotes[certHash] += 1;

        // If the threshold is reached, mark certificate as verified.
        if (verificationVotes[certHash] >= VERIFICATION_THRESHOLD) {
            certificates[certHash].verified = true;
            emit CertificateVerified(certHash, verificationVotes[certHash]);
        }
    }

    // The verifyCertificate function returns all details, including whether it's verified.
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
            bool,
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
            cert.isValid,
            cert.verified 
        );
    }
}
