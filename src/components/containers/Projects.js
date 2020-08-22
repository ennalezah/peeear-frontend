import React, { Component } from 'react';
import { ProjectCard } from  '../ProjectCard';

class ProjectsContainer extends Component {

   displayProjectCard = () => {
      console.log(this.props)
      debugger
      // return console.log(this.props.projectsData.projects)

      return this.props.projects.map(project => <ProjectCard {...project} /> 
      )
   }

   render() {
      return(
         <div className="container">
            <h1 className="my-5">Projects</h1>
            <div className="row row-cols-1 row-cols-md-3">
               { this.displayProjectCard() }                              
            </div>
         </div>
      )
   }
}

 export default ProjectsContainer;

//  <ProjectCard 
//          title={project.title} 
//          description={project.description} 
//          difficulty={project.difficulty} 
//          first_name={project.first_name} 
//          last_name={project.last_name} 
//          email={project.email} /> 