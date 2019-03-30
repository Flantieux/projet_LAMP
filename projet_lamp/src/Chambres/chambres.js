import { BrowserRouter, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './chambres.css' ;
import {Button} from 'reactstrap';


class Chambres extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        rooms: []
      }
  
      fetch( "http://localhost:8000/api/v1/rooms/" , { method: "GET" })
              .then((response) => {
                return response.json();
                })
                .then((json) => {
                  this.setState({
                    rooms: json
                  })
                });
    }

    render() {
        return (
          <div className="Chambres">
            <header className="Chambres-header">
            <Table dark>
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>Capacity</th>
                <th>Filter Threshold</th>
                <th>Patients</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{this.state.rooms.map((pat) => <div>{pat.id}</div>)}</td>
                <td>{this.state.rooms.map((pat) => <div>{pat.capacity}</div>)}</td>
                <td>{this.state.rooms.map((pat) => <div>{pat.filter_threshold}</div>)}</td>
                <td>{this.state.rooms.map((pat) => <div>{pat.patients}</div>)}</td>
                
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
    
    export default Chambres;
    