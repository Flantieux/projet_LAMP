import { BrowserRouter, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';
import { Table } from 'reactstrap';
//import './App.css';
import {Button} from 'reactstrap';

class nouvFiltre extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        filters: []
      }
  
      fetch( "http://localhost:8000/api/v1/filters/" , { method: "GET" })
              .then((response) => {
                return response.json();
                })
                .then((json) => {
                  this.setState({
                    filters: json
                  })
                });
    }

    render() {
        return (
          <div className="nouvFiltre">
          <header className="nouvFiltre-header">
            <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>     </th>
                <th>Modèle 1</th>
                <th>Modèle 2</th>
                <th>Modèle 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Prix (en €)</td>
                <td>5000</td>
                <td>3000</td>
                <td>1000</td>                
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Qualité initiale (%)</td>
                <td>98.0</td>
                <td>95.0</td>
                <td>90.0</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Qualité perdue par jour (%)</td>
                <td>8.0</td>
                <td>16.0</td>
                <td>24.0</td>
              </tr>
            </tbody>
          </Table>
            </header>
          </div>
        );
    }
}

    export default nouvFiltre;
