import { BrowserRouter, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';
import {Button, Table} from 'reactstrap';
//import {Doughnut, Pie} from "react-chartjs";

class Patients_en_attente extends Component
{

  constructor(props)
  {
    super(props);

    this.affect=this.affect.bind(this);
    
    this.state =
    {
      patients : [],
      patients_without_room : [],
      patients_with_room : [],
      rooms_dispos : []
    }

    fetch("http://localhost:8000/api/v1/patients", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((patients) => {
        let patients_without_room = [];
        let patients_with_room = [];
        let rooms_dispos = [];
        for (let patient of patients) {
          if (patient.room === "None")
          patients_without_room.push(patient);
          else
          patients_with_room.push(patient);
        }
        
        this.setState({
          patients_without_room: patients_without_room,
          patients_with_room: patients_with_room,
          rooms_dispos : rooms_dispos
        });
       }); 

  }


  chambreLibre(id,rooms_dispos)
  {

  fetch("http://localhost:8000/api/v1/rooms", { method: "GET" })
      .then((response) => {
        return response.json();
      })

      .then((rooms) => {
        rooms_dispos= [];
        for (let room of rooms) {
          if (room.capacity>room.patients.length)
          rooms_dispos.push(room.id)
        }

        this.setState({
          rooms_dispos: rooms_dispos
        });
        
      })


      .then(
        (json) =>
        {             
              this.affect(id, rooms_dispos[0]);
              console.log(json);
        }
      )
    
    
    };
      
        

     affect(id, room) 
     {
    
     fetch( "http://localhost:8000/api/v1/patients/"+id , { method: "PUT",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'  
        },
        body: "room="+room
      })
      .then ((response) =>
        {
          return response.json();
        }
      )
      .then(
        (json) =>
        {
          this.update();
          console.log(json);
        }
      )
      
  };

    


  
    update()
    {
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
      <div className="Patients_en_attente">
        <header className="Patients_en_attente-header">
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
            <th>Affecter à une chambre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <th scope="row">1</th>
            <td>{this.state.patients_without_room.map((pat) => <div>{pat.id}</div>)}</td>
            <td>{this.state.patients_without_room.map((pat) => <div>{pat.firstname}</div>)}</td>
            <td>{this.state.patients_without_room.map((pat) => <div>{pat.lastname}</div>)}</td>
            <td>{this.state.patients_without_room.map((pat) => <div>{pat.birthday}</div>)}</td>
            <td>{this.state.patients_without_room.map((pat) => <div>{pat.entry_date}</div>)}</td>
            <td>{this.state.patients_without_room.map((pat) => <div>{pat.arrival_date}</div>)}</td>
            <td>{this.state.patients_without_room.map((pat) => <div>{pat.room}</div>)}</td>
            <td>{this.state.patients_without_room.map((pat) => <div><Button color="primary" size="sm" onClick={() => this.chambreLibre(pat.id,this.state.rooms_dispos)}>Ajouter chambre</Button></div>)}</td>
            
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

export default Patients_en_attente;
