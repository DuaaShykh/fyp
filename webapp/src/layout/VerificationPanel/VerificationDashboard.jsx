import React from 'react';
import '../../App.css';
import { Container,Row } from "react-bootstrap";
import VFCNavigation from '../../components/VFCNavigation';
import VerifierRecord from '../../components/Records/VerifierRecord/VerifierRecord';

export default function VerificationDashboard(){

    return(
        <div>
            <VFCNavigation />
            
            <Container >
  <Row>
    
  <VerifierRecord />
  </Row>
</Container>
</div>
)}



