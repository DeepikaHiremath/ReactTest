import React, { Component } from 'react';
import  './Demo.css';
import './App.css';
//import './InsuranceType.css'
import { useHistory } from "react-router-dom";
import history from './history';
import { Button } from 'react-bootstrap';

class InsuranceType extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
       // this.onChangeValue = this.onChangeValue.bind(this);
      //  this.routeChange = this.routeChange.bind(this);
      }
      // routeChange() {
      //   // let path = `PropertyType.js`;
      //   // this.props.history.push(path);
      //   window.location.href('./PropertyType');
      // }
      //onChangeValue(event) {
        //console.log(event.target.value);  
      
    
  render() {
    return (
      <div>
         <h6 className="Question" >Are you insuring the property for the first time or just thinking of switching insurers?</h6>
      
        <h3>
        <input type="radio" value="First time" name="insurance" ></input> First time <br/> <br/>
        <input type="radio" value="Changing insurer" name="insurance" />  Changing insurer <br/><br/>
        <input type="radio" value="Other" name="insurance" /> Others <br/><br/>
        <input type="submit1" className="btn-standard.btn-pink" value="NEXT" name="NEXT" onClick={() => history.push('/PropertyType')}></input><br/>
        <form>
            <Button variant="btn btn-success" onClick={() => history.push('/PropertyType')}>Click button to view products</Button>
          </form> 
          <form>
            <br></br><Button variant="btn btn-success" onClick={() => history.push('/ProtectionSystem')}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ClickButtonNavigate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
          </form>
        </h3> 

          



      
      </div>
    );
  }
}

export default InsuranceType;
