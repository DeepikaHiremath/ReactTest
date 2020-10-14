import React, { Component } from 'react';
import Demo from './Demo.css'

class claim extends React.Component {
   

   constructor() {
      super();
      this.state = {
        name: "React"
      };
     // this.onChangeValue = this.onChangeValue.bind(this);
      // this.sayHello = this.sayHello.bind(this);
    }
 
    // onChangeValue(event) {
    //   console.log(event.target.value);
    // }
  
    // sayHello() {
    //   alert('Hello!');
    // }
    
   
    
   render() {
      return (
         <div>
           <h6 className = "Question">Did you file any home or property claims in the past 5 years?</h6>
           <input type="radio" value="No" name="primary" className ="radio"/> Yes
           <br/>
           <br/>
           <input type="radio" value="Just one" name="primary" className ="radio"/> Yes
           <br/>
           <br/>
            <input type="radio" value="More than one" name="primary" className ="radio"/> No
            <br/>
            <br/>
          

            {/* <button onClick={this.sayHello}>
      Click me!
    </button> */}
            <input type = "submit1" value = "Next" name = "next"  />

           
            
         </div>
      );
   }
}
export default claim;