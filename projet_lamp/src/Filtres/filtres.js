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
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
          {
            this.state.filters.map((pat) => <div>{pat.installation_date}</div>)
          }
        </header>
      </div>
    );
  }
}

export default Filtres;
