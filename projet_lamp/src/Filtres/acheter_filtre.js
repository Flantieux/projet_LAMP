import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { CardGroup, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Clock from './Clock.js';


class Acheter_filtre extends Component {

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
      <div className="Acheter_filtre">
        <header className="Acheter_filtre-header">
          <CardGroup>
            <Card body inverse style={{ backgroundColor: '#0099CC', borderColor: '#0099CC' }}>
              <CardTitle>Filtre 1</CardTitle>
              <CardText>Ce filtre coûte 5000€. Il a une qualité initiale de 98% et perd 8% de qualité par jour.</CardText>
              <Button>Acheter</Button>
            </Card>
            <Card body inverse style={{ backgroundColor: '#0066CC', borderColor: '#0066CC' }}>
              <CardTitle>Filtre 2</CardTitle>
              <CardText>Ce filtre coûte 3000€. Il a une qualité initiale de 95% et perd 16% de qualité par jour.</CardText>
              <Button color="secondary" onClick={this.acheter}>Acheter</Button>
            </Card>
            <Card body inverse style={{ backgroundColor: '#0033CC', borderColor: '#0033CC' }}>
              <CardTitle>Filtre 3</CardTitle>
              <CardText>Ce filtre coûte 1000€. Il a une qualité initiale de 90% et perd 24% de qualité par jour.</CardText>
              <Button color="secondary">Acheter</Button>
            </Card>
          </CardGroup>
          <div>
          <Card body inverse style={{backgroundColor: '#000066', borderColor: '#000066'}}>
            <CardTitle>Embaucher vacataire</CardTitle>
            <Button onClick={this.embaucher}>Recruter</Button>
          </Card>
          </div>
        </header>
      </div>
    );
  }
}

export default Acheter_filtre;
