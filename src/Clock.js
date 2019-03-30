import React, { Component } from 'react';
import logo from './test.svg';
import './App.css';
import {Button} from 'reactstrap';


class Clock extends Component
{

  constructor(props)
  {
    super(props);
    
    this.state =
    {
      date : []
      //date: this.props.datetime
    }

    
		this.update = this.update.bind(this);

  }

  update() {
    fetch( "http://localhost:8000/api/v1/datetime" , { method: "GET"})
    
      .then((response) => {
        return response.json();
        })
        .then((json) => {
          this.setState({
            date: json.datetime
          })
          });
  }

componentDidMount() {
        this.timerID = setInterval(this.update, 1000);

        this.update();
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

  displayClock() {
    let date = new Date(this.state.date);

    return date.getDay() + "/" + date.getMonth() + "/" + date.getYear();
  }


  render()
  {
    return (
          
          <div>
          {
            //this.state.patients.map((pat) => <div>{pat.room}</div>)
            <div> {this.displayClock()} </div>
           /// this.state.date.toLocaleTimeString()
					}
					</div>
    );
  }
}


export default Clock