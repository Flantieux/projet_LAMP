import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';

  class Embaucher extends Component {
  constructor(props) {
    super(props);
    this.updateA = this.updateA.bind(this);
    this.acheter = this.acheter.bind(this);
    this.updateE = this.updateE.bind(this);
    this.embaucher = this.embaucher.bind(this);


    this.state = {
      filters: [],
      staff:[]  
   }

    this.updateE();
    this.updateA();
    this.acheter();
    this.embaucher();
  }



 updateA() {
    fetch("http://localhost:8000/api/v1/filters", { method: "GET" })
    .then((response) => {
    return response.json();
    })
    .then((json) => {
        
      this.setState({
        filters : json
        
      });
    });
  }

  updateE() {
    fetch("http://localhost:8000/api/v1/staff", { method: "GET" })
    .then((response) => {
    return response.json();
    })
    .then((json) => {
        
      this.setState({
        staff : json
        
      });
    });
  }
  
  acheter() {
    fetch("http://localhost:8000/api/v1/filters", { method: "POST", 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: "model=2",
      
    })
    .then((response) => {
    return response.json();
    })
    .then((json) => {
    //console.log('Buy success: ', json);  
    this.updateA();
        
      });
    }
  
    embaucher() {
      fetch("http://localhost:8000/api/v1/staff", { method: "POST", 
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: "days=2",
        
      })
      .then((response) => {
      return response.json();
      })
      .then((json) => {
      //console.log('Hire success: ', json);  
      this.updateE();
          
        });
      }



 render() {
    return (

    <div>
        <Clock/>
          <button onClick={this.embaucher}> Embaucher </button>
          <button onClick={this.acheter}>Acheter</button> 
      </div>
  );
  }
}export default Embaucher;