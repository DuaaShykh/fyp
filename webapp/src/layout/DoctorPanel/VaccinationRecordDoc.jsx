import React from 'react';
import DoctorNavigation from '../../components/DoctorNavigation';
import VaccinationRecord from '../../components/Records/VaccinationRecord/VaccinationRecord';

class VaccinationRecordVc extends React.Component {
render(){
  return(
    <div style={{marginTop: 80}}>
    <DoctorNavigation />
    <VaccinationRecord />
    </div>
  )
}

}
export default VaccinationRecordVc;