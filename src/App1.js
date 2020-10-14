import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <h1> Hello Welcome All</h1>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );



    


render() {
  return (
    <div>
       <h1 className="Question">Does the building have any of the following?</h1>
      {/* <div> */}
      <h3>  
      <input type="Checkbox" value="Firse Alarm" name="insurance" ></input> Fire Alarm   
      <input type="Checkbox" value="Burglar Alarm" name="insurance" />  Burglar Alarm <br/><br/>
      <input type="submit" className="btn-standard.btn-pink" value="Next"  name="NEXT"></input><br/>
      

</h3>

    {/* </div> */}
    </div>
  );

  }
}


export default App;
