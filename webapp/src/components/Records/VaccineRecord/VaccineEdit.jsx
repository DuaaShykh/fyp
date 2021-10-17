import React, {useEffect, useState } from 'react';
import '../../../App.css';
import axios from 'axios';
// import { useHistory, useParams } from "react-router-dom";
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Form,Col,Button} from 'react-bootstrap';
import {Container, Typography} from "@material-ui/core";
import logo from '../../../assets/image/logo.png';
import Header from '../../../components/Header';
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft:200,
    marginBottom:100
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 400,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function VaccineEdit(props) {
  const classes = useStyles();
  // const theme = useTheme();
  // const { id } = useParams();
  // let history = useHistory();
  const [vaccine, setVaccine] = useState({
            vaccine_id: '',
           title: '' ,
            vc_id: '',  
            manf:'',
            batch:' ',
            p_date:'',
            e_date:'',
            available:''
           
  });

  const { vaccine_id, title, vc_id , manf, batch, p_date, e_date, available } = vaccine;
  const onInputChange = e => {
    setVaccine({ ...vaccine, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loadVaccine();
  },[]);


const onSubmit = async e => {
e.preventDefault();
await axios.put(`http://localhost:3001/vaccine/update`, vaccine);
alert('Data Updated Successfully');

};

const loadVaccine = async()=>{
  console.log(props.match.params);
  let {vaccine_id} = props.match.params;
  console.log("vacine_id=" + " " + vaccine_id)
  sessionStorage.setItem("vaccine_id", vaccine_id);
 
 
  fetch(`http://localhost:3001/vaccine/${vaccine_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => response.json())
  .then((responseJson) => {
    setVaccine(responseJson.data)
        console.warn(responseJson)
      })     
    .catch(err =>{
      console.log(err)
    })
}

  return (
    <Container style={{marginTop:150, marginLeft:-60}}>
      <Header  />
      <div className="VCLabel"  >
        <img src={logo} alt=" " style={{height:100,width:100, marginLeft:130}} />
 <Typography style={{fontFamily:"Carter One",color:"#fff",fontSize:50,marginLeft:80}} >
        Vaccine
      </Typography>
      </div>
    <Card className="registration">
    <CardMedia
        className={classes.cover}
        // image="https://images.pexels.com/photos/5412/water-blue-ocean.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        // title="Live from space album cover"
        style={{backgroundColor:"#41649c"}}
      />
      
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography style={{fontSize:30, marginBottom:20,fontFamily: "Carter One", color: "#41649c"}}>
            Update Vaccine Form
          </Typography>
        <Form onSubmit={e => onSubmit(e)}>
  <Form.Row>
  <Form.Group as={Col} >
      <Form.Label className="v_id">Vaccine-id</Form.Label>
      <Form.Control type="text" name="vaccine_id" value={vaccine_id} onChange={e => onInputChange(e)} placeholder="Enter Vaccine ID" />
    </Form.Group>
    <Form.Group as={Col} >
      <Form.Label className="title">Vaccine Name</Form.Label>
      <Form.Control type="text" name="title" value={title} onChange={e => onInputChange(e)} placeholder="Enter Vaccine Name" />
    </Form.Group>
    
  </Form.Row>
  
  <Form.Group >
    <Form.Label className="VC_id">Vaccination Center ID</Form.Label>
    <Form.Control type="text" name="vc_id" value={vc_id} onChange={e => onInputChange(e)} placeholder=" Enter VC_id" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} >
      <Form.Label className="manf">Vaccine Manufacturer</Form.Label>
      <Form.Control type="text" name="manf" value={manf} onChange={e => onInputChange(e)} placeholder="Enter Manufacturer" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} >
      <Form.Label className="batch">Vaccine BatchNo.</Form.Label>
      <Form.Control type="text" name="batch" value={batch} onChange={e => onInputChange(e)} placeholder="Enter BatchNo" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col}>
      <Form.Label className="p_date">Vaccine Manufacture Date</Form.Label>
      <Form.Control type="text" name="p_date" value={p_date} onChange={e => onInputChange(e)} placeholder="Enter Manufc" />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label className="e_date">Vaccine Expiry Date</Form.Label>
      <Form.Control type="text" name="e_date" value={e_date} onChange={e => onInputChange(e)} placeholder="Enter Exp" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} >
      <Form.Label className="available">Vaccine Availability</Form.Label>
      <Form.Control type="text" name="available" value={available} onChange={e => onInputChange(e)} placeholder="Enter Availability" />
    </Form.Group>
  </Form.Row>


  <Button variant="primary" type="submit">
  Update Record
  </Button>
</Form>
         
        </CardContent>
        
      </div>
    
    </Card>
    </Container>
  );
}
