import { BrowserRouter, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';
import { Table } from 'reactstrap';
//import './App.css';
import {Button} from 'reactstrap';


class Filtres extends Component {

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
              /*.then((json) => {
                console.log(JSON.stringify(json));
                });*/
    }


render() {
    return (
      <div className="App">
      <header className="App-header">
        <Table dark>
        <thead>
          <tr>
            <th>Id</th>
            <th>Room</th>
            <th>Quality</th>
            <th>Installation Date</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{this.state.filters.map((pat) => <div>{pat.room}</div>)}</td>
            <td>{this.state.filters.map((pat) => <div>{pat.quality}</div>)}</td>
            <td>{this.state.filters.map((pat) => <div>{pat.installation_date}</div>)}</td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>A</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>A</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
        </header>
      </div>
    );
  }
}

export default Filtres;
