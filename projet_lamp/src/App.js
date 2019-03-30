import { BrowserRouter, Route, Link, NavLink as RRNavLink} from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import {Button} from 'reactstrap';
import Chambres from './Chambres/chambres.js';
import Filtres from './Filtres/filtres.js';
import Patients_en_attente from './Patients/Patients_en_attente.js';
import Patients_affectes from './Patients/patients_affectes.js';
import Patients from './Patients/Patients.js'
import Staff from './Staff/staff.js';
import Clock from './Filtres/Clock.js';
import Filtre_a_changer from './Filtres/filtre_a_changer.js';
import Acheter_filtre from './Filtres/acheter_filtre.js';
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
};
  
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
      <NavItem>
        <Clock/> 
      </NavItem> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <UncontrolledDropdown nav inNavbar>
           <DropdownToggle nav caret>
                  Patients
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                  <NavLink tag={RRNavLink} exact to="/patients">Patients</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink tag={RRNavLink} exact to="/patients_en_attente">Patients en attente</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink tag={RRNavLink} exact to="/patients_affectes">Patients déjà affectés</NavLink>
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
                  <NavLink tag={RRNavLink} exact to="/filtre_a_changer">Filtres à changer</NavLink>
                  {/*<NavLink tag={RRNavLink} exact to="/filtre_a_changer" onClick={() => <filtre_a_changer/>}>Filtres à changer</NavLink>*/}
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink tag={RRNavLink} exact to="/acheter_filtre">Acheter nouveau filtre</NavLink>
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
      <Route exact path="/patients" component={() => <Patients display={[]}onSend={()=>{}}/>}/>
      <Route exact path="/patients_en_attente" component={() => <Patients_en_attente display={[]}onSend={()=>{}}/>}/>
      <Route exact path="/patients_affectes" component={() => <Patients_affectes display={[]}onSend={()=>{}}/>}/>
      <Route exact path="/filters" component={() => <Filtres display={[]}onSend={()=>{}}/>}/>
      <Route exact path="/filtre_a_changer" component={() => <Filtre_a_changer display={[]}onSend={()=>{}}/>}/>
      <Route exact path="/acheter_filtre" component={() => <Acheter_filtre display={[]}onSend={()=>{}}/>}/>
      <Route exact path="/rooms" component={() => <Chambres display={[]}onSend={()=>{}}/>}/>
      <Route exact path="/staff" component={() => <Staff display={[]}onSend={()=>{}}/>}/>
      </BrowserRouter>
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
