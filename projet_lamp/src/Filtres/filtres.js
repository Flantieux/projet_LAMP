import { BrowserRouter, Route, Link} from 'react-router-dom';
import React, { Component } from 'react';
import { Table } from 'reactstrap';
//import './App.css';
import {Button} from 'reactstrap';


class Filtres extends Component {

  constructor(props)
  {
    super(props);
    
    this.state =
    {
      filters : [],
      filters_a_changer : [],
      filters_bons : [],
      rooms : []
    }

    fetch("http://localhost:8000/api/v1/filters", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((filters) => {

        fetch("http://localhost:8000/api/v1/rooms", { method: "GET" })
        .then((response) => {
          return response.json();
        })
        .then((rooms) => {
          let filters_a_changer= [];
          let filters_bons=[];
          for (let filter of filters) {
            //if (filter.quality-filter.model.quality_loss_per_day < 0)
            for (let room of rooms)
            {
              if (filter.id === room.id)
              {
                if (filter.quality < room.filter_threshold)
                filters_a_changer.push(filter);
                else filters_bons.push(filter);
              }
            }

          }

          

          this.setState({
           // filters : filters,
            filters_a_changer : filters_a_changer,
            filters_bons : filters_bons
          });
        })

        .then(
          (json) =>
          {             
                this.acheter();
                console.log(json);
          }
        )
       }); 
  }

  
    
  acheter() 
  {


   
  fetch( "http://localhost:8000/api/v1/filters" , { method: "POST",
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded'  
     },
     body : "model=1"
   })
   .then ((response) =>
     {
       return response.json();
     }
   )
   .then(
     (json) =>
     {
      this.update ()
      console.log(JSON.stringify(json));
     })
   
   
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
          };


render() {
    return (
      <div className="Filtres">
      <header className="Filtres-header">
        <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Room</th>
            <th>Quality</th>
            <th>Installation Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{this.state.filters_bons.map((pat) => <div>{pat.id}</div>)}</td>
            <td>{this.state.filters_bons.map((pat) => <div>{pat.room}</div>)}</td>
            <td>{this.state.filters_bons.map((pat) => <div>{pat.quality}</div>)}</td>
            <td>{this.state.filters_bons.map((pat) => <div>{pat.installation_date}</div>)}</td>
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

export default Filtres;
