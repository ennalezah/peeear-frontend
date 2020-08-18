import React, { Component } from 'react';
import App from '../App';

import { ProjectCard } from  './ProjectCard';

class ProjectsContainer extends Component {
   displayProjectCard = () => {
      console.log(this.props)
      debugger
      // return console.log(this.props.projectsData.projects)

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