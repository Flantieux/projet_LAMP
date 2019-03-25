import { BrowserRouter, Route, Link, NavLink as RRNavLink} from 'react-router-dom';
import React, { Component } from 'react';
import logo from './test.svg';
import './App.css';
import {Button} from 'reactstrap';
import Filtres from './Filtres/filtres.js';
import Pat from './Patients/Patients.js';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroup, ListGroupItem } from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);


    this.toggle = this.toggle.bind(this);
    this.state = { patients: [] }
    this.state = { isOpen : false };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    /*fetch( "http://localhost:8000/api/v1/patients/" , { method: "GET" })
            .then((response) => {
              return response.json();
              })
              .then((json) => {
                this.setState({
                  patients: json
                })
              });
            .then((json) => {
              console.log(JSON.stringify(json));
              });
  //}
  fetch( "http://localhost:8000/api/v1/patients/4" , { method: "PUT",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'  
        },
        body: "room=5"
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
  
  update() {
      fetch( "http://localhost:8000/api/v1/patients" , { method: "GET"})
            .then((response) => {
              return response.json();
              })
              .then((json) => {
                this.setState({
                  patients: json
                })
                });
  }*/

  /*constructor(props) {
    super(props);

    this.state = {
      filters: []
    }
    fetch( "http://localhost:8000/api/v1/filters/" , { method: "GET" })
            .then((response) => {
              return response.json();
              })
              .then((json) => {
                this.setState({
                  filters: json
                })
                });*/
  




  render() {
    return (
      <div className="App">
      <BrowserRouter>
      
      
      

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Accueil</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
              <NavLink tag={RRNavLink} exact to="/patients">Patients</NavLink>
              </NavItem>

              <NavItem>
              <NavLink tag={RRNavLink} exact to="/filters">Filtres</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route exact path="/patients" component={() => <Pat display={[]}onSend={()=>{}}/>}/>
      <Route exact path="/filters" component={() => <Filtres display={[]}onSend={()=>{}}/>}/>
      </BrowserRouter>
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello world
          </p>
          
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
          }
          {
            //this.state.filters.map((pat) => <div>{pat.installation_date}</div>)
          }
        </header>*/}
      </div>
    );
  }
}

export default App;