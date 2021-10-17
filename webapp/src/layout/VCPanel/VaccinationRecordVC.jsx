import React from 'react';
import VCNavigation from '../../components/VCNavigation'
import VaccinationRecord from '../../components/Records/VaccinationRecord/VaccinationRecord';

class VaccinationRecordVC extends React.Component {
render(){
  return(
    <div>
    <VCNavigation />
    <VaccinationRecord />
    </div>
  )
}

}
export default VaccinationRecordVC;