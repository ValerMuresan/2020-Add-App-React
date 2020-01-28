import React, { Component } from "react";

 class Form extends Component {
   constructor(props) {
     super(props)
     this.initialState = {
       name: '',
       nationality: '',
     }
     this.state = this.initialState
   }
 handleChange = event => {
   const { name, value } = event.target
   this.setState({
     [name]: value,
   })
 }
 submitForm = () => {
   //event.preventDefault();
   this.props.handleSubmit(this.state)
   this.setState(this.initialState)
 }
 render() {
   const { name, nationality } = this.state

   return (
    <form>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
    <label for="nationality">Nationality</label>
    <input type="text" name="nationality" id="nationality" value={nationality} onChange={this.handleChange} />
    <input type="button" value="Add" onClick={this.submitForm} />
    </form>
  );
 }
}
 export default Form
