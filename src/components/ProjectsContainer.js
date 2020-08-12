import React, { Component } from 'react';

class ProjectsContainer extends Component {
   state = {

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

   render() {
      return(
         <div>
            <h3>Projects</h3>
            { this.displayProjects() }

            <h3>Create a New Project</h3>
            <form>
               <p>
                  <label>Title</label>
                  <input type="text" onChange={this.handleChange} />
               </p>

               <p>
                  <label>Description</label>
                  <textarea onChange={this.handleChange} />
               </p>

               <p>
                  <label>Difficulty</label>
                  <select value={this.state.value} onChange={this.handleChange}>
                     <option hidden disabled selected value>Select one</option>
                     <option value="Beginner">Beginner</option>
                     <option value="Intermediate">Intermediate</option>
                     <option value="Advanced">Advanced</option>
                  </select>
               </p>

               <p>
                  <label>Owner ID</label>
                  <input type="text" onChange={this.handleChange} />
               </p>

               <input type="submit" value="Submit"/>
            </form>
         </div>
      )
   }
}

export default ProjectsContainer;