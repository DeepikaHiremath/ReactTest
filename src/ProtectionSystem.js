import React, { Component } from 'react';
import  './Demo.css';
//import './App.css';
//import './InsuranceType.css'
//import { useHistory } from "react-router-dom";
//import history from './history';

class Protection extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
       
  //      this.routeChange = this.routeChange.bind(this);
      }
    /*  routeChange() {
        let path = `PropertyType.js`;
        this.props.history.push(path);
      }
      onChangeValue(event) {
        console.log(event.target.value);  
      }
    */
  render() {
    return (
      <div>
         <h6 className="Question">Does the building have any of the following?</h6>
        {/* <div> */}
        <h3>
        <div className="check">
        <input   type="Checkbox" value="Firse Alarm" name="insurance" /> Fire Alarm 
        <span></span><input type="Checkbox" value="Burglar Alarm" name="insurance"  style={{marginLeft:"20px"}}/>  Burglar Alarm <br/><br/>
        </div>
        <input type="submit1" className="btn-standard.btn-pink" value="NEXT"  name="NEXT" style={{marginLeft:"550px"}}></input><br/>
        
        </h3>


      {/* </div> */}
      </div>
    );
  }
}

export default Protection;
