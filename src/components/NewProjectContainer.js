import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NewProjectForm } from './NewProjectForm'

class NewProjectContaner extends Component {
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
      this.props.addProject(this.state);

      this.setState({
         title: "",
         description: "",
         difficulty: "",
         owner_id: ""
      });

      alert("Project successfully added!");
      this.props.history.push('/projects')
   }

   render() {
      return(
         <div>
            <h1>Post a New Project</h1>
            <NewProjectForm {...this.state} handleChange={ this.handleChange } handleSubmit={ this.handleSubmit }/>
         </div>
      )
   }
}

export default withRouter(NewProjectContaner);