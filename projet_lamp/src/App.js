import { BrowserRouter, Route, Link, NavLink as RRNavLink} from 'react-router-dom';
import React, { Component } from 'react';
//import logo from './fond.svg';
import './App.css';
import {Button} from 'reactstrap';
import Chambres from './Chambres/chambres.js';
import Filtres from './Filtres/filtres.js';
import Pat from './Patients/Patients.js';
import Staff from './Staff/staff.js';
import nouvFiltre from'./Filtres/acheter_filtre.js';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroup, ListGroupItem } from 'reactstrap';


class App extends Component
{

  constructor(props)
  {
    super(props);

  this.toggle = this.toggle.bind(this);
  this.state = { patients: [] }
  this.state = { isOpen : false };
  this.state =
    {
      rooms: [],
      rooms_vides: []
    }
  }
  
  toggle() {
  this.setState({
  isOpen: !this.state.isOpen
  });
    

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
     
      <BrowserRouter>
      <Navbar color="light" light expand="md">
      <NavLink tag={RRNavLink} exact to ="http://localhost:3000">Accueil</NavLink>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
      <Nav className="ml-auto" navbar>
      <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Patients
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink tag={RRNavLink} exact to="/patients">Patients en attente</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink tag={RRNavLink} exact to="/patients">Patients déjà affectés</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Filtres
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink tag={RRNavLink} exact to="/filters">Filtres installés</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink tag={RRNavLink} exact to="http://localhost:3000">Acheter nouveau filtre</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
      <NavItem>
        <NavLink tag={RRNavLink} exact to="/rooms">Chambres</NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Staff
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink tag={RRNavLink} exact to="/staff">Personnel</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink tag={RRNavLink} exact to="/staff">Recruter un vacataire</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
      </Nav>
      </Collapse>
      </Navbar>
      <Route exact path="/patients" component={() => <Pat display={[]}onSend={()=>{}}/>}/>
      <Route exact path="/filters" component={() => <Filtres display={[]}onSend={()=>{}}/>}/>
      <Route exact path="http://localhost:3000" component={() => <nouvFiltre display={[]}onSend={()=>{}}/>}/>
      <Route exact path="/rooms" component={() => <Chambres display={[]}onSend={()=>{}}/>}/>
      <Route exact path="/staff" component={() => <Staff display={[]}onSend={()=>{}}/>}/>
      </BrowserRouter>
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />
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
          }*/}
        </header>
      </div>
    );
  }
}

export default App;
