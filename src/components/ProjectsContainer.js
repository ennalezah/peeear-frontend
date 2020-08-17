import React, { Component } from 'react';
import { ProjectCard } from  './ProjectCard';

class ProjectsContainer extends Component {
   displayProjectCard = () => {
      // return console.log(this.prosps.projectsData.projects)

      return this.props.projectsData.projects.map(project => <ProjectCard title={project.title} description={project.description} difficulty={project.difficulty} /> )
   }

   render() {
      return(
         <div>
            <h1>Projects</h1>
            { this.displayProjectCard() }
         </div>
      )
   }
}

export default ProjectsContainer;