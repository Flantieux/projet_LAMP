import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class Clock extends Component {
    constructor(props) {
      super(props);
      
      this.heure = this.heure.bind(this);
  
  
      this.state =
      {
        date : []
    }
  
      this.heure();
    }

    heure() {
        fetch("http://localhost:8000/api/v1/datetime", { method: "GET" })
        .then((response) => {
        return response.json();
        })
        .then((json) => {
          console.log(JSON.stringify(json));
          this.setState({
            date : json
            
          });
        });
      }



      componentDidMount() {
        this.timerID = setInterval(this.heure, 1000);

        this.heure();
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }





      render() {
        return (
        <div>
        {this.state.date.datetime}
        </div>
      );
      }
    }
    
    
    export default Clock;