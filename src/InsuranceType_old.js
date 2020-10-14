import React, { Component } from 'react';
import  './Common.css';
import './App.css';
import './InsuranceType.css'
import { useHistory } from "react-router-dom";
import history from './history';
import { Button } from 'react-bootstrap';

class InsuranceType extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
      //  this.routeChange = this.routeChange.bind(this);
      }
      // routeChange() {
      //   // let path = `PropertyType.js`;
      //   // this.props.history.push(path);
      //   window.location.href('./PropertyType');
      // }
      onChangeValue(event) {
        console.log(event.target.value);  
      }
    
  render() {
    return (
      <div>
         <h1 className="Question">Are you insuring the property for the first time or just thinking of switching insurers?</h1>
        {/* <div> */}
        <h3> 
        <input type="radio" value="First time" name="insurance" ></input> First time <br/> <br/>
        <input type="radio" value="Changing insurer" name="insurance" />  Changing insurer <br/><br/>
        <input type="radio" value="Other" name="insurance" /> Others <br/><br/>
        <input type="submit" className="btn-standard.btn-pink" value="NEXT" onClick={() => history.push('/ProtectionSystem')} name="NEXT"></input><br/>
        {/* <input type="submit" className="btn-standard.btn-pink" value="Nextbuttonnew" onClick={this.routeChange()} name="NEXT"></input><br/> */}
         <form>
            <Button variant="btn btn-success" onClick={() => window.location.href('./PropertyType')}>Click button to view products</Button>
          </form>

          {/* <a href="./PropertyType" >Click</a> */} 

</h3>

      {/* </div> */}
      </div>
    );
  }
}

export default InsuranceType;
