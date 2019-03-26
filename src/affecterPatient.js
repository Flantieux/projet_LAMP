import React, { Component } from 'react';
import logo from './test.svg';
import './App.css';
import {Button} from 'reactstrap';

class App extends Component
{

  constructor(props)
  {
    super(props);

    this.affect=this.affect.bind(this);
    
    this.state =
    {
      patients: [],
      patients_without_room : [],
      patients_with_room : []
    }

    fetch("http://localhost:8000/api/v1/patients", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((patients) => {
        let patients_without_room = [];
        let patients_with_room = [];
        for (let patient of patients) {
          if (patient.room === "None")
          patients_without_room.push(patient);
          else
          patients_with_room.push(patient);
        }
        
        this.setState({
          patients_without_room: patients_without_room,
          patients_with_room: patients_with_room
        });
       }); 

  }



        

     affect(id)
     {
      let nb_aleatoire=Math.random*33;
     fetch( "http://localhost:8000/api/v1/patients/"+id , { method: "PUT",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'  
        },
        body: "room="+17
      })
      .then ((response) =>
        {
          return response.json();
        }
      )
      .then
      (
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

  


  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world
          </p>
          <Button color="danger">Coucou</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {
            //this.state.patients.map((pat) => <div>{pat.room}</div>)
            this.state.patients_without_room.map((patient) => <div>{patient.id} {patient.firstname} {patient.lastname} {patient.room} <button onClick={() => this.affect(patient.id)}>Affecter</button> </div>)
          }
        </header>
      </div>
    );
  }
}

export default App;
