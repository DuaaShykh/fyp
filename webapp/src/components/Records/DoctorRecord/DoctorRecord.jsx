
import React,{useState,useEffect} from 'react';
import {Table,Container,Row,Form,FormControl,Col} from 'react-bootstrap';
import '../../../App.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/Edit';





export default function DoctorRecord(){

  const [doctor, setDoctor] = useState(['']);
  const [search, setSearch] = useState(['']);


   useEffect(() => {
     getData();
   
    },[]);

    const getData=() =>{
      const apiURL='http://localhost:3001/doctorRegistration';
      axios.get(apiURL)
      // fetch(apiUrl)
        .then((res) => {
          setDoctor(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
    }

     const thisdelete = (doctor_id)=>{
      fetch(`http://localhost:3001/doctorRegistration/delete/${doctor_id}`,
      {method : "DELETE"
    }).then((result)=>{
      result.json().then((resp)=>{
        alert("Doctor has been Deleted");
        getData();
      })
    })
    }


  return (
   
    <div>

   <div style={{marginTop:200}}>
 
   <Container fluid="xs" className="box" >
   
<Row  className="justify-content-md-center">
<Col xl={4}>
<h1 className="headStyle">Doctor Record </h1>
</Col>
<Col xl={7}>
<Form inline>
 <FormControl type="text" style={{marginTop:50}} placeholder="Search"  onChange={e=>{setSearch(e.target.value)}}  className="mr-xl-2" />
 
</Form></Col>
<Col  >
<Table responsive="sm" style={{marginTop:20}} >
<thead style={{backgroundColor: "#41649c" , color:"white"}}>

<tr>
   <th>Doctor Id</th>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Email</th>
 
  <th colSpan="3">Action </th>
</tr>
</thead>
<tbody>
{doctor.filter((item)=>{
    if(search==""){
      return item
    }
  else if(search == item.doctor_id){
    return item
  }
  }).map(item =>(
   <tr  key={item.id}>
      <td>{item.doctor_id}</td>
     <td>{item.f_name}</td>
     <td>{item.l_name}</td>
     <td>{item.email}</td>
     
     <td ><Link className="mr-2" to={`/DoctorViewRecord/${item.doctor_id}`}><VisibilityIcon style={{color: "#41649c"}}/></Link> </td>
     <td ><DeleteRoundedIcon onClick={()=>thisdelete(item.doctor_id)} style={{color: "#41649c"}}/> </td>
     <td><Link className="mr-2"  to={`/DoctorEdit/${item.doctor_id}`}><EditIcon  style={{color: "#41649c"}}/></Link>
     </td>
   </tr>
     ))}
 </tbody>
</Table>
</Col>
</Row>
</Container>
</div>
</div>
  );
    }
// }
// }
