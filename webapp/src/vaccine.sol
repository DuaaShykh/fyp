pragma solidity >=0.4.20;

contract Encounter
{

    struct Patient {
        uint64 patient_id;
        string patient_name;
        string cnic;
        address addr;
    }

    struct Provider {
        address addr;
        uint64 provider_id;
    }

    struct Vaccine {
        uint64 vaccine_id;
        string vaccine_type;
        string date;
        string status;
    }

    struct Vaccination {
        uint64 patient_id;
        Provider provider;
        Vaccine vaccine;
    }

    mapping (bytes32 => Vaccination) vaccinations;
    
    mapping (bytes32 => Patient) patients;
    
    // This is called by ContractData using the users address as methodArgs

    function ProviderAddVaccineRecord(uint64  provider_id,uint64  patient_id,uint64  vaccine_id,string memory vaccine_type,string memory status,string memory date) public payable returns (bytes32 dataHash)
    {
        require(msg.value > .001 ether);
        
        bytes32 hash = sha256(abi.encodePacked(provider_id,patient_id,vaccine_id,vaccine_type,status,date)); 
        
        if ( hash == sha256(abi.encodePacked("")))
        {
            revert();
        }

        vaccinations[hash].provider.addr = msg.sender;
        vaccinations[hash].provider.provider_id = provider_id;
        vaccinations[hash].patient_id = patient_id;
        vaccinations[hash].vaccine.vaccine_id = vaccine_id;
        vaccinations[hash].vaccine.vaccine_type = vaccine_type;
        vaccinations[hash].vaccine.status = status;
        vaccinations[hash].vaccine.date = date;
        return hash;
    }
    
    function ProviderAddPatientRecord(uint64  patient_id,string memory patient_name,string memory cnic) public payable returns (bytes32 dataHash)
    {
        require(msg.value > .001 ether);
        
        bytes32 hash =sha256(abi.encodePacked(patient_id,patient_name,cnic)); 
        if ( hash == sha256(abi.encodePacked("")))
        {
            revert();
        }
        patients[hash].addr = msg.sender;
        patients[hash].cnic = cnic;
        patients[hash].patient_id = patient_id;
        patients[hash].patient_name = patient_name;
        return hash;
    }
    
    
      function verifyVaccination(bytes32 hash) public view returns (Vaccination memory) {
          return vaccinations[hash];
      }
      
      function getsha256ForVaccine(uint64  provider_id,uint64  patient_id,uint64  vaccine_id,string memory vaccine_type,string memory status,string memory date) public pure returns (bytes32 dataHash)
      {
          return sha256(abi.encodePacked(provider_id,patient_id,vaccine_id,vaccine_type,status,date));
      }
      
      
      function verifyPatient(bytes32 hash) public view returns (Patient memory) {
          return patients[hash];
      }
      
      function getsha256ForPatient(uint64  patient_id,string memory patient_name,string memory cnic) public pure returns (bytes32 dataHash)
      {
          return sha256(abi.encodePacked(patient_id,patient_name,cnic));
      }
    
}