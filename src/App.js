
import React from 'react';
import './App.css';
import image from './images/timeclock.jpg'

class Clock extends React.Component {
  constructor() {
    super();
    var Today=new Date();
    var hours=Today.getHours()
    var min=Today.getMinutes()
    var seconds=Today.getSeconds()
    this.state = {
      second: seconds,
      minute:min,
      hour:hours,
    };
  }

  ChangeTime=()=>
  {
    var Today=new Date();
    var hours=Today.getHours()
    var min=Today.getMinutes()
    var seconds=Today.getSeconds()
    this.setState({ second: seconds,
      minute:min,
      hour:hours,})
  }

  render() {
    setInterval(this.ChangeTime,1000)
    return (
      <div className="top">
        <h2>DIGITAL CLOCK REACT</h2>

        <div className="main">

          
        <div>
            <h1><span>{this.state.hour}</span>:</h1><h1><span>{this.state.minute}</span>:</h1><h1><span>{this.state.second}</span></h1>
        </div>

        
        </div>
      </div>
    );
  }
}

export default Clock;
