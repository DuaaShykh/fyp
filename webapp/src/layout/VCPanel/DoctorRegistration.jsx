import React, {useState } from 'react';
import '../../App.css';
import axios from 'axios'
// import { useHistory } from "react-router-dom";
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Form,Col, Button} from 'react-bootstrap';
import {Container, Typography} from "@material-ui/core";
import logo from '../../assets/image/logo.png';
import VCNavigation from '../../components/VCNavigation';
 
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

export default function DoctorRegistration() {
  const classes = useStyles();
  // const theme = useTheme();

  // let history = useHistory();
  const [doctor, setDoctor] = useState({
            vc_id: '',  
            f_name:'',
            l_name:' ',
            email:'',
            password:'',
            address: '',
            phone:'',
            qualification:'',
            gender:'', 
            dob:'',  
            date: '',
            cnic:'', 
            religion :'',
            city:'', 
            state:'',
            zip:''

           
  });

  const { vc_id ,f_name , l_name , email, password, address,date, phone, qualification, gender, 
  dob,cnic, religion,city,state,zip} = doctor;

  const onInputChange = e => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();  
    await axios.post("http://localhost:3001/doctorRegistration", doctor);
    alert("data submited");
    window.location.reload();

  };
  


  return (
    <Container>
      <VCNavigation />
      <div className="VCLabel"  >
        <img src={logo} alt=" " style={{height:100,width:100, marginLeft:130}} />
 <Typography style={{fontFamily:"Carter One",color:"#fff",fontSize:50,marginLeft:60}} >
        Doctor
      </Typography>
      <Typography style={{fontFamily:"Carter One",color:"#fff",fontSize:50,marginLeft:20}}>
        Registration
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
            Registration Form
          </Typography>
          <Form onSubmit={e => onSubmit(e)}>
  <Form.Row>
  {/* <Form.Group as={Col} controlId="doctor_id">
      <Form.Label className="patient_id">doctor-id</Form.Label>
      <Form.Control type="text" name="doctor_id" value={doctor_id} onChange={e => onInputChange(e)} placeholder="Enter ID" />
    </Form.Group> */}
    <Form.Group as={Col} controlId="VC_id">
      <Form.Label className="VC_id">Vaccination Center ID</Form.Label>
      <Form.Control type="text" name="vc_id" value={vc_id} onChange={e => onInputChange(e)} placeholder="Enter ID" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="f_name">
      <Form.Label className="f_name">FirstName</Form.Label>
      <Form.Control type="text" name="f_name" value={f_name} onChange={e => onInputChange(e)} placeholder="Enter FirstName" />
    </Form.Group>

    <Form.Group as={Col} controlId="l_name">
      <Form.Label className="l_name">LastName</Form.Label>
      <Form.Control type="text" name="l_name" value={l_name}  onChange={e => onInputChange(e)} placeholder="Enter LastName" />
    </Form.Group>
  </Form.Row>
  
  <Form.Group controlId="email">
    <Form.Label className="email">Email</Form.Label>
    <Form.Control type="Email" name="email" value={email} onChange={e => onInputChange(e)} placeholder=" Enter Email" />
    </Form.Group>
  

 <Form.Row>
    <Form.Group as={Col} controlId="password">
      <Form.Label className="password">Password</Form.Label>
      <Form.Control type="Password" name="password" value={password} onChange={e => onInputChange(e)}placeholder="Enter Password" />
    </Form.Group>
    </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="phone">
      <Form.Label className="phone">Phone#</Form.Label>
      <Form.Control type="text" name="phone" value={phone} onChange={e => onInputChange(e)} placeholder="Enter Phone Number" />
    </Form.Group>

    <Form.Group as={Col} controlId="qualification">
    <Form.Label className="qualification">Qualification</Form.Label>
      <Form.Control type="text" name="qualification" value={qualification} onChange={e => onInputChange(e)} placeholder="Enter Qualification" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="date">
      <Form.Label className="date">Date Of Registration</Form.Label>
      <Form.Control type="text" name="date" value={date} onChange={e => onInputChange(e)} placeholder="Enter Date" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="gender">
      <Form.Label className="gender">Gender</Form.Label>
      <Form.Control type="text" name="gender" value={gender} onChange={e => onInputChange(e)} placeholder="Enter Gender" />
    </Form.Group>
    <Form.Group as={Col} controlId="dob">
      <Form.Label className="dob">DOB</Form.Label>
      <Form.Control type="text" name="dob" value={dob}  onChange={e => onInputChange(e)} placeholder="Enter DOB" />
    </Form.Group>
    <Form.Group as={Col} controlId="cnic">
      <Form.Label className="cnic">CNIC</Form.Label>
      <Form.Control type="text" name="cnic" value={cnic} onChange={e => onInputChange(e)} placeholder="Enter CNIC" />
    </Form.Group>
  </Form.Row>
<Form.Row>
<Form.Group as={Col} controlId="religion">
      <Form.Label className="religion">Religion</Form.Label>
      <Form.Control type="text" name="religion" value={religion} onChange={e => onInputChange(e)} placeholder="Enter Religion" />
    </Form.Group>
</Form.Row>
<Form.Group controlId="address">
    <Form.Label className="address">Address</Form.Label>
    <Form.Control type="text" name="address" value={address} onChange={e => onInputChange(e)} placeholder=" 1234 Main St Apartment, studio, or floor" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="city">
      <Form.Label className="city">City</Form.Label>
      <Form.Control type="text" name="city" value={city} onChange={e => onInputChange(e)} placeholder="Enter City" />
    </Form.Group>

    <Form.Group as={Col} controlId="state">
      <Form.Label className="state">State</Form.Label>
      <Form.Control type="text" name="state" value={state} onChange={e => onInputChange(e)} placeholder="Enter state" />
    </Form.Group>

    <Form.Group as={Col} controlId="zip">
      <Form.Label className="zip">Zip</Form.Label>
      <Form.Control type="text" name="zip" value={zip} onChange={e => onInputChange(e)} placeholder="Enter Zip/Postal Code" />
    </Form.Group>
  </Form.Row>


  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>
         
        </CardContent>
        
      </div>
    
    </Card>
    </Container>
  );
}
