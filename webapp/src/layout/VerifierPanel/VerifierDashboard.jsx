import React from 'react';
import '../../App.css';
import { Container,Row } from "react-bootstrap";
import VerifierNavigation from '../../components/VerifierNavigation';
import VerificationRecord from '../../components/Records/VerificationRecord/VerificationRecord';

export default function VerifierDashboard(){

    return(
        <div>
            <VerifierNavigation />
            
        <Container >
  <Row>
    
  <VerificationRecord />
  </Row>
</Container>
</div>
)}



