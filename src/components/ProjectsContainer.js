import React, { Component } from 'react';

class ProjectsContainer extends Component {
   constructor() {
      super();
      this.state = {
         title: "",
         description: "",
         difficulty: "",
         owner_id: ""
      };
   }

   displayProjects = () => {
      // return console.log(this.props.projectsData.projects)
      return this.props.projectsData.projects.map(project => {
         return (
            <div key={project.title}>
               <h3>{project.title}</h3>
               <p>{project.description}</p>
            </div>
         )
      })
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

   render() {
      return(
         <div>
            <h3>Projects</h3>
            { this.displayProjects() }


            {/* *** START - NEW PROJECT FORM *** */}
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
            {/* *** END - NEW PROJECT FORM *** */}

         </div>
      )
   }
}

export default ProjectsContainer;