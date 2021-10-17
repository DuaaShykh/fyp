import React, { Component } from 'react'  
import axios from 'axios';  
import { Pie } from 'react-chartjs-2';  
export default class CenterVaccAvailability extends Component {  
        constructor(props) {  
                super(props);  
                this.state = { Data: {} };  

        }  
        componentDidMount() {  
                axios.get(`http://localhost:3001/vaccine`)  
                        .then(res => {  
                                console.log(res);  
                                const ipl = res.data;  
                                let vc_id = [];  
                                let available = []; 
                                
                                ipl.forEach(record => {  
                                        vc_id.push(record.vc_id);  
                                        available.push(record.available); 
                                       
                                });  
                               this.setState({  
                                        Data: {  
                                                labels: vc_id, 
                                                datasets: [  
                                                        {  
                                                                label: 'IPL 2018/2019 Top Run Scorer',  
                                                                data: available, 
                                                                backgroundColor: [  
                                                                        "Blue",   
                                                                        "Red",
                                                                        "Orange",
                                                                        'Pink',
                                                                        "#3cb371",  
                                                                        "#0000FF",  
                                                                        "#9966FF",  
                                                                        "#4C4CFF",  
                                                                        "#00FFFF",  
                                                                        "#f990a7",  
                                                                        "#aad2ed",  
                                                                        "#FF00FF",  
                                                                       

                                                                ]  
                                                        }  
                                                ]  
                                        }  
                                });  
                        })  
        }  
        render() {  
                return (  
                        <div style={{ position: "relative", marginLeft:100, height:"40vh", width: "60vw"}}>  
                                <Pie  
                                        data={this.state.Data}
                                      
                                        options={{ maintainAspectRatio: false,
                                            title:{
                                            display: true,
                                            text: "Vaccine Availability",
                                            fontSize : 20
                                        }
                                        
                                        }} />  
                        </div>  

                )  

        }  
    }
