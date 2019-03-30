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
      rooms_dispos: []
    }

    fetch("http://localhost:8000/api/v1/rooms", { method: "GET" })
      .then((response) => {
        return response.json();
      })

      .then((rooms) => {
        let rooms_dispos= [];
        for (let room of rooms) {
          if (room.capacity>room.patients.length)
          rooms_dispos.push(room)
        }

        this.setState({
          rooms_dispos: rooms_dispos
        });
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
            this.state.rooms_dispos.map((room) => <div>{room.id} </div>)
          }
        </header>
      </div>
    );
  }
}

export default App;


