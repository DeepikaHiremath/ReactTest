import React, { Component } from 'react';
import  './Demo.css';

class PropertyType extends Component {
constructor(){
super();
this.state={
fields:{},
errors:{}
}
 
this.handleChange=this.handleChange.bind(this);
this.submituserRegistrationForm=this.submituserRegistrationForm.bind(this);
 
};
 
handleChange(e){
letfields=this.state.fields;
fields[e.target.name] =e.target.value;
this.setState({
fields
});
 
}
 
submituserRegistrationForm(e){
e.preventDefault();
if (this.validateForm()) {
letfields={};
fields["mobileno"] ="";
this.setState({fields:fields});
//alert("Form submitted");
}
 
}
 
validateForm(){
 
letfields=this.state.fields;
leterrors={};
letformIsValid=true;
   
if (!fields["mobileno"]) {
formIsValid=false;
errors["mobileno"] ="*Please enter your mobile no.";
}
 
if (typeoffields["mobileno"] !=="undefined") {
if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
formIsValid=false;
errors["mobileno"] ="*Please enter valid mobile no.";
}
}
   
this.setState({
errors:errors
});
returnformIsValid;
 
}
 
render(){
return (
<div id="main-registration-container">
<div id="register">
<h6 className="Question">At What Number We Can Contact You ?</h6>
<form method="post"name="userRegistrationForm"onSubmit={this.submituserRegistrationForm}>
<label className="phonenumber">Contact No</label>
<input type="text" style={{height:47,width:190}}placeHolder="Contact Number"className="phonenumber"name="mobileno"value={this.state.fields.mobileno}onChange={this.handleChange}/>
<div className="errorMsg">{this.state.errors.mobileno}</div>
<br>
</br>
<br>
</br>
<input type="submit"className="button"value="Next"/>
</form>
</div>
</div>
 
      );
}
 
}
 
exportdefaultContactNumberForm;