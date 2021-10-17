import React from 'react';
import '../../App.css';
import { Container,Row } from "react-bootstrap";
import DoctorNavigation from '../../components/DoctorNavigation';
import VaccinationRecord from '../../components/Records/VaccinationRecord/VaccinationRecord';
export default function DoctorDashboard(){

    return(
        <div>
            <DoctorNavigation />

        <Container >
  <Row>
    
  <VaccinationRecord />
  </Row>
</Container>
</div>
)}



