import React, { Component } from 'react';
import logo from './test.svg';
import './App.css';
import {Button} from 'reactstrap';

class App extends Component
{

  constructor(props)
  {
    super(props);

    
    this.state =
    {
      rooms: [],
      rooms_vides: []
    }

    fetch("http://localhost:8000/api/v1/rooms", { method: "GET" })
      .then((response) => {
        return response.json();
      })

      .then((rooms) => {
        let rooms_vides= [];
        for (let room of rooms) {
         // let nb_patients=0
         // while(room.patients[nb_patients]!=="")
         // {nb_patients=nb_patients+1;}
         // if (room.capacity<nb_patients)
         // {rooms_vides.push(room.id)}
         rooms_vides.push("3")
        }
        //this.update();
        this.setState({
          rooms_vides: rooms_vides
        });
       }); 

  }
   
  
 update()
    {
      fetch( "http://localhost:8000/api/v1/rooms" , { method: "GET"})
            .then((response) => {
              return response.json();
              })
              .then((json) => {
                this.setState({
                  rooms: json
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
            this.state.rooms_vides.map((room) => <div>{room.id} </div>)
          }
        </header>
      </div>
    );
  }
}

export default App;
