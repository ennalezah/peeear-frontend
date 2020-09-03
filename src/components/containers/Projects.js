import React, { Component } from 'react';
import { ProjectCard } from  '../ProjectCard';

class ProjectsContainer extends Component {
   constructor() {
      super();

      this.state = {
         filtered_by: ""
      }
   }

   displayProjectCard = () => {
      console.log(this.props)
      // debugger
      // return console.log(this.props.projectsData.projects)

      return this.props.projects.map(project => <ProjectCard {...project} /> 
      )
   }

   render() {
      return(
         <div className="container">
            <h1 className="my-5">Projects</h1>
            
            <p>
            <div class="dropdown">
               <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filter by
               </button>

               <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Beginner</a>
                  <a class="dropdown-item" href="#">Intermediate</a>
                  <a class="dropdown-item" href="#">Advanced</a>
               </div>
            </div>
            </p>

            <div className="row row-cols-1 row-cols-md-3">
               { this.displayProjectCard() }                              
            </div>
         </div>
      )
   }
}

 export default ProjectsContainer;