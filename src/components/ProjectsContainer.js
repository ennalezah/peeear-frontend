import React, { Component } from 'react';

class ProjectsContainer extends Component {
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
         </div>
      )
   }
}

export default ProjectsContainer;