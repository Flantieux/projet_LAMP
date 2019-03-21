import React, { Component } from 'react';
import logo from './test.svg';
import './App.css';
import {Button} from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      patients: []
    }

    fetch( "http://localhost:8000/api/v1/patients" , { method: "GET" })
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world
          </p>
          <Button color="danger">Coucou</Button>
          <Button color="danger">Connexion</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {
            this.state.patients.map((pat) => <div>{pat.firstname}</div>)
          }
        </header> 
      </div>
    );
  }
}

export default App;
