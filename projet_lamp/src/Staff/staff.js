import { BrowserRouter, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';
import { Table } from 'reactstrap';
//import './App.css';
import {Button} from 'reactstrap';


class Staff extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        staff: []
      }
  
      fetch( "http://localhost:8000/api/v1/staff/" , { method: "GET" })
              .then((response) => {
                return response.json();
                })
                .then((json) => {
                  this.setState({
                    staff: json
                  })
                });
    }

    render() {
        return (
          <div className="Staff">
          <header className="Staff-header">
            <Table dark>
            <thead>
              <tr>
                <th>#</th>
                <th>Id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Function</th>
                <th>Wage</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{this.state.staff.map((pat) => <div>{pat.id}</div>)}</td>
                <td>{this.state.staff.map((pat) => <div>{pat.firstname}</div>)}</td>
                <td>{this.state.staff.map((pat) => <div>{pat.lastname}</div>)}</td>
                <td>{this.state.staff.map((pat) => <div>{pat.function}</div>)}</td>
                <td>{this.state.staff.map((pat) => <div>{pat.wage}</div>)}</td>
                <td>{this.state.staff.map((pat) => <div>{pat.start_date}</div>)}</td>
                <td>{this.state.staff.map((pat) => <div>{pat.end_date}</div>)}</td>
                
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
    
    export default Staff;
    
