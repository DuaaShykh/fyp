import React from 'react';
import '../../App.css';
import { Container,Row,Col } from "react-bootstrap";
import AdminNavigation from '../../components/AdminNavigation';
import VaccineChart from '../../components/Charts/VaccineChart';
import PatientChart from '../../components/Charts/PatientChart';



export default class AdminDashboard extends React.Component{


    render(){

    return(
        <div>
            <AdminNavigation />
            
        <Container >
  <Row>
      
  <div>
  <VaccineChart />
  </div>

  {/* <Col md={6}>
  <div className="d-flex flex-row">
 
  <CenterVaccAvailability />
  </div>
  </Col> */}
  </Row>
  <Row>
      <Col >
          <div >
          <PatientChart />
  </div>
  </Col>
  </Row>
 
 

</Container>
</div>
)}
    }


