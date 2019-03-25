import { BrowserRouter, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';
import {Button} from 'reactstrap';

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
          {
            this.state.patients.map((pat) => <div>{pat.firstname}</div>)
          }
        </header>
      </div>
    );
  }
}

export default Pat;
