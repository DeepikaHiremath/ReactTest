import React, { Component } from 'react';
import  './Common.css';
import './App.css'; 
class PropertyType extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
      }
    
      onChangeValue(event) {
        console.log(event.target.value);  
      }
    
  render() {
    return (
      <div>
         <h1 className="Question">What type of property is it?</h1>
        {/* <div> */}
        <h3> 
        <input type="radio" value="Condo" name="Property" ></input> Condo<br/> <br/>
        <input type="radio" value="Co-op" name="Property" />  Co-Op <br/><br/>
        <input type="radio" value="House" name="Property" /> House <br/><br/>
        <input type="submit" className="btn-standard.btn-pink" value="NEXT" name="NEXT"></input><br/>
        

</h3>




      {/* </div> */}
      </div>
    );
  }
}

export default PropertyType;
