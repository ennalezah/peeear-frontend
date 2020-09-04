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

   handleFilter = (event) => {
     this.setState({
        filtered_by: event.target.value
     })
   }

   render() {
      return(
         <div className="container">
            <h1 className="my-5">Projects</h1>
            
            <div class="dropdown text-right mb-5 ">
               <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filter by
               </button>

               <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" onClick={this.handleFilter}>Beginner</a>
                  <a class="dropdown-item" onClick={this.handleFilter}href="#">Intermediate</a>
                  <a class="dropdown-item" onClick={this.handleFilter}>Advanced</a>
               </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3">
               { this.displayProjectCard() }                              
            </div>
         </div>
      )
   }
}

 export default ProjectsContainer;