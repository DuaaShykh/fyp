import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';  
import { Bar } from 'react-chartjs-2';  
export default class VaccineChart extends Component {  
        constructor(props) {  
                super(props);  
                this.state = { Data: {} };  

        }  
        componentDidMount() {  
                axios.get(`http://localhost:3001/vaccine`)  
                        .then(res => {  
                                console.log(res);  
                                const ipl = res.data;  
                                let title = [];  
                                let available = []; 
                                
                                ipl.forEach(record => {  
                                        title.push(record.title);  
                                        available.push(record.available); 
                                       
                                });  
                               this.setState({  
                                        Data: {  
                                                labels: title, 
                                                datasets: [  
                                                        {  
                                                                label: 'Availability',  
                                                                data: available, 
                                                               
                                                                backgroundColor: [  
                                                                        // "Blue",   
                                                                        "Red",
                                                                        "Orange",
                                                                        "#aad2ed",  
                                                                        "#3cb371",  
                                                                        // "#0000FF",  
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
                        <div className="chart">  
                                <Bar 
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
