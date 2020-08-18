import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
         <>
         <h3>Add a New Project</h3>
         <form onSubmit={this.handleSubmit}>
            <p>
               <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title"/>
            </p>

            <p>
               <textarea name="description" value={this.state.description} onChange={this.handleChange} placeholder="Describe your project in detail. What are some features on it? What can users do with it? What problem are you trying to solve?" />
            </p>

            <p>
               <select name="difficulty" value={this.state.difficulty} onChange={this.handleChange} >
                  <option hidden selected value>Difficulty (select one)</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
               </select>
            </p>

            <p>
               <label>Owner ID</label>
               <input type="text" name="owner_id" value={this.state.ownerId} onChange={this.handleChange} />
            </p>

            <input type="submit" value="Submit"/>
         </form>
         </>
      )
   }
}

export default withRouter(NewProjectContaner);