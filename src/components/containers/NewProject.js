import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NewProjectForm } from '../NewProjectForm'

class NewProjectContaner extends Component {
   constructor() {
      super();

      this.state = {
         title: "",
         description: "",
         difficulty: "",
         first_name: "",
         last_name: "",
         email: ""
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
         first_name: "",
         last_name: "",
         email: ""
      });

      alert("Project successfully posted!");
      this.props.history.push('/projects')
   }

   render() {
      return(
         <div>
            <h1 className="my-5">Post a New Project</h1>
            <NewProjectForm {...this.state} handleChange={ this.handleChange } handleSubmit={ this.handleSubmit }/>
         </div>
      )
   }
}

export default withRouter(NewProjectContaner);