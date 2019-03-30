import React, { Component } from 'react';
import {Button, Table} from 'reactstrap';
//import {Doughnut, Pie} from "react-chartjs";

class Patients extends Component
{

  constructor(props)
  {
    super(props);

    //this.affect=this.affect.bind(this);
    
    this.state =
    {
      patients : [],
      patients_without_room : [],
      patients_with_room : [],
    }

    fetch("http://localhost:8000/api/v1/patients", { method: "GET" })
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
    {/*let pieOrDoughnutData = [
        { label: "Chambres remplies", value: this.state.patients_without_room.length },
        { label: "Chambres non remplies", value: this.state.patients_with_room.length },
          ];*/}
    return (
      <div className="Patients">
        <header className="Patients-header">
        <Table dark>
        <thead>
          <tr>
            <th>#</th>
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
            <td>{this.state.patients.map ((pat) => <div>{pat.id}</div>)}</td>
            <td>{this.state.patients.map ((pat) => <div>{pat.firstname}</div>)}</td>
            <td>{this.state.patients.map ((pat) => <div>{pat.lastname}</div>)}</td>
            <td>{this.state.patients.map ((pat) => <div>{pat.birthday}</div>)}</td>
            <td>{this.state.patients.map ((pat) => <div>{pat.entry_date}</div>)}</td>
            <td>{this.state.patients.map ((pat) => <div>{pat.arrival_date}</div>)}</td>
            <td>{this.state.patients.map ((pat) => <div>{pat.room}</div>)}</td>            
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
      {/*<Pie data={pieOrDoughnutData} width="400" height="300"/>*/}
        </header>
      </div>
    );
  }
}

export default Patients;
