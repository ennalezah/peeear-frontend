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
         <div>
            <h1>Projects</h1>

            <div class="container">
               <div class="row row-cols-4">
                  { this.displayProjectCard() }
               </div>
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