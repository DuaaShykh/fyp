import React from 'react';
import '../../App.css';
import { Container,Row,Col} from "react-bootstrap";
import VCNavigation from '../../components/VCNavigation';
import VaccineChart from '../../components/Charts/VaccineChart';
import PatientChart from '../../components/Charts/PatientChart';
export default function VCDashboard(){

    return(
        <div>
            <VCNavigation />
        <Container >
  <Row>
  <Row>
      <Col >
          <div  style={{ width:400}}>
          <PatientChart />
  </div>
  </Col>
  </Row>
  <div>
  <VaccineChart />
  </div>
  </Row>
</Container>
</div>
)}



