import React, { Component } from 'react'  
import axios from 'axios';  
import { Line } from 'react-chartjs-2';  
export default class VaccineChart extends Component {  
        constructor(props) {  
                super(props);  
                this.state = { Data: {} };  

        }  
        componentDidMount() {  
                axios.get(`http://localhost:3001/vaccination`)  
                        .then(res => {  
                                console.log(res);  
                                const ipl = res.data;  
                                let patient_id = [];  
                                let title = []; 
                                
                                ipl.forEach(record => {  
                                        patient_id.push(record.patient_id);  
                                        title.push(record.title); 
                                       
                                });  
                               this.setState({  
                                        Data: {  
                                                // labels: ['1', '2', '3', '4', '5', '6'], 
                                                labels: title ,
                                                datasets: [  
                                                        {  
                                                                label: 'patient',
                                                                axis: 'y',  
                                                                data:  patient_id,
                                                                fill: false,
                                                                backgroundColor: [ 

                                                                        "#ced8ed",
                                                                        "Pink",   
                                                                        "Red",
                                                                        "#e6de09",
                                                                        "Orange",
                                                                        "#3cb371",  
                                                                        // "#0000FF",  
                                                                        "#9966FF",  
                                                                        "#4C4CFF",  
                                                                        "#00FFFF",  
                                                                        "#f990a7",  
                                                                        "#c42bc2",
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
                        <div className="chart">  
                                <Line 
                                        data={this.state.Data}
                                      
                                        options={{ maintainAspectRatio: false,
                                                indexAxis: 'y',
                                            title:{
                                            display: true,
                                            text: "Vaccinated Patient",
                                            fontSize : 20,
                                           
                                        }
                                        
                                        }} />  
                        </div>  

                )  

        }  
    }
