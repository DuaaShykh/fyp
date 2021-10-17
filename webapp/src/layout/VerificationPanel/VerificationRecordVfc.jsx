import React from 'react';
import VFCNavigation from '../../components/VFCNavigation';
import VerificationRecord from '../../components/Records/VerificationRecord/VerificationRecord';

class VerificationRecordVfc extends React.Component {
render(){
  return(
    <div>
    <VFCNavigation />
    <VerificationRecord />
    </div>
  )
}

}
export default VerificationRecordVfc;