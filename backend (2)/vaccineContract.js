const web3 = require("./web3");
const abi =[
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "patient_id",
				"type": "uint64"
			},
			{
				"internalType": "string",
				"name": "patient_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cnic",
				"type": "string"
			}
		],
		"name": "ProviderAddPatientRecord",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "dataHash",
				"type": "bytes32"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "provider_id",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "patient_id",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "vaccine_id",
				"type": "uint64"
			},
			{
				"internalType": "string",
				"name": "vaccine_type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			}
		],
		"name": "ProviderAddVaccineRecord",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "dataHash",
				"type": "bytes32"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "patient_id",
				"type": "uint64"
			},
			{
				"internalType": "string",
				"name": "patient_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cnic",
				"type": "string"
			}
		],
		"name": "getsha256ForPatient",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "dataHash",
				"type": "bytes32"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "provider_id",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "patient_id",
				"type": "uint64"
			},
			{
				"internalType": "uint64",
				"name": "vaccine_id",
				"type": "uint64"
			},
			{
				"internalType": "string",
				"name": "vaccine_type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			}
		],
		"name": "getsha256ForVaccine",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "dataHash",
				"type": "bytes32"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "hash",
				"type": "bytes32"
			}
		],
		"name": "verifyPatient",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint64",
						"name": "patient_id",
						"type": "uint64"
					},
					{
						"internalType": "string",
						"name": "patient_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "cnic",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "addr",
						"type": "address"
					}
				],
				"internalType": "struct Encounter.Patient",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "hash",
				"type": "bytes32"
			}
		],
		"name": "verifyVaccination",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint64",
						"name": "patient_id",
						"type": "uint64"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "addr",
								"type": "address"
							},
							{
								"internalType": "uint64",
								"name": "provider_id",
								"type": "uint64"
							}
						],
						"internalType": "struct Encounter.Provider",
						"name": "provider",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint64",
								"name": "vaccine_id",
								"type": "uint64"
							},
							{
								"internalType": "string",
								"name": "vaccine_type",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "date",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "status",
								"type": "string"
							}
						],
						"internalType": "struct Encounter.Vaccine",
						"name": "vaccine",
						"type": "tuple"
					}
				],
				"internalType": "struct Encounter.Vaccination",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const address = '0xe6e16450098Fd024e78E33247FED5b432Aa6542f';

module.exports = new web3.eth.Contract(abi, address);
