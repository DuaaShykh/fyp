import React from "react";
import '../../../App.css';
import Header from '../../../components/Header';
// import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
// import axios from "axios";


export default class VaccinationViewRecord extends React.Component {

constructor(props){
  super(props);
  this.state={
    vaccination: ['']
  }
}

componentDidMount(){
  console.log(this.props.match.params);
  let {v_id} = this.props.match.params;
  console.log("v_id=" + " " + v_id)
  sessionStorage.setItem("v_id", v_id);
 
 
  fetch(`http://localhost:3001/vaccination/${v_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => response.json())
  .then((responseJson) => {
    this.setState({ 
    vaccination: responseJson.data });
        console.warn(responseJson)
      })
      
    .catch(err =>{
      console.log(err)
    })
}

  
   
render(){
  const {vaccination} = this.state;
  return (
    
    <div className="container py-4" className="myViewCard" style={{marginBottom:30}}>
      <Header />
      <h1 className="display-4" className="headStyle">Vaccination Id: {vaccination.v_id}</h1>
      <hr />
   
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Patient_id:   {vaccination.patient_id} </Card.Title>
      </Card.Body >
      </Card>
      <Card  className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccination Center_id:   {vaccination.vc_id} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle" >
      <Card.Body>
      <Card.Title>Vaccine_id: {vaccination.vaccine_id} </Card.Title>
      </Card.Body >
      </Card >
      <Card className="cardStyle" >
      <Card.Body>
      <Card.Title>Vaccine Name: {vaccination.title} </Card.Title>
      </Card.Body >
      </Card >
      
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>doctor_id: {vaccination.doctor_id} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccination Time: {vaccination.time} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccination Date: {vaccination.date} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccination Dose: {vaccination.dose} </Card.Title>
      </Card.Body >
      </Card>
      <Card className="cardStyle">
      <Card.Body>
      <Card.Title>Vaccination Reason : {vaccination.reason} </Card.Title>
      </Card.Body >
      </Card>
      
    </div>
  );
};

}