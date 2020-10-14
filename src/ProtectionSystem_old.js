import React, { Component } from 'react';
import  './Common.css';
import './App.css';
import './InsuranceType.css'
//import { useHistory } from "react-router-dom";
import history from './history';

class Protection extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
       
        this.routeChange = this.routeChange.bind(this);
      }
      routeChange() {
        let path = `PropertyType.js`;
        this.props.history.push(path);
      }
      onChangeValue(event) {
        console.log(event.target.value);  
      }
    
  render() {
    return (
      <div>
         <h1 className="Question">Does the building have any of the following?</h1>
        {/* <div> */}
        <h3>  
        <input type="Checkbox" value="Firse Alarm" name="insurance" ></input> Fire Alarm   
        <input type="Checkbox" value="Burglar Alarm" name="insurance" />  Burglar Alarm <br/><br/>
        <input type="submit" className="btn-standard.btn-pink" value="NEXT"  name="NEXT"></input><br/>
        

</h3>

      {/* </div> */}
      </div>
    );
  }
}

export default Protection;
