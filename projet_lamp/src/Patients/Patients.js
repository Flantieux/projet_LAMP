import { BrowserRouter, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';
import {Button, Table} from 'reactstrap';

class Pat extends Component
{

  constructor(props)
  {
    super(props);

    this.state =
    {
      patients: []
    }


    fetch( "http://localhost:8000/api/v1/patients" , { method: "GET"})
            .then((response) => {
              return response.json();
              })
              .then((json) => {
                this.setState({
                  patients: json
                })
                });

    }

  



  render() {
    return (
      <div className="Pat">
        <header className="Pat-header">
        <Table dark>
        <thead>
          <tr>
            <th>Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Birthday</th>
            <th>Entry date</th>
            <th>Arrival date</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{this.state.patients.map((pat) => <div>{pat.firstname}</div>)}</td>
            <td>{this.state.patients.map((pat) => <div>{pat.lastname}</div>)}</td>
            <td>{this.state.patients.map((pat) => <div>{pat.birthday}</div>)}</td>
            
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

export default Pat;
