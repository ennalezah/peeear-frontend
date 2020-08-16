import React,  { Component } from 'react';

class NewProjectContainer extends Component {
   constructor() {
      super();
      this.state = {
         title: "",
         description: "",
         difficulty: "",
         owner_id: ""
      };
   }

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value,
      });
   }

   handleSubmit = (event) => {
      event.preventDefault();
      this.props.addProject(this.state)
   }
}

export default NewProjectContainer;