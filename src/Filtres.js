import React, { Component } from 'react';
import './App.css';
import { stringify } from 'querystring';

class Filtres extends Component
{

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

      // this.get_filters(
      //   (filters) => {
      //     this.get_rooms(
      //       (rooms) =>  {

      //       }
      //     );
      //   }
      // );
  }

  // get_filters(callback) {
  //   fetch("http://localhost:8000/api/v1/filters", { method: "GET" })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((filters) => {
  //       callback(filters);
  //     });
  // }
    
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


  render()
  {
    return (
      <div>
          {
            //this.state.patients.map((pat) => <div>{pat.room}</div>)
            this.state.filters_a_changer.map((filter) => <div>{filter.id} </div>)
          }
      </div>
    );
  }
}

export default Filtres;