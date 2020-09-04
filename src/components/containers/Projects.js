import React, { Component } from 'react';
import { ProjectCard } from  '../ProjectCard';

class ProjectsContainer extends Component {
   constructor() {
      super();

      this.state = {
         filtered_by: "View All"
      }
   }

   displayProjectCard = () => {
      let results;

      switch(this.state.filtered_by) {
         case 'Beginner':
           results = this.props.projects.filter(project => project.difficulty === 'Beginner');
           return results.map(project => <ProjectCard {...project} />);

         case 'Intermediate':
            results = this.props.projects.filter(project => project.difficulty === 'Intermediate');
            return results.map(project => <ProjectCard {...project} />); 

         case 'Advanced':
            results = this.props.projects.filter(project => project.difficulty === 'Advanced');
            return results.map(project => <ProjectCard {...project} />); 

         default:
           return this.props.projects.map(project => <ProjectCard {...project} /> )
       }
   }

   handleFilter = (event) => {
     this.setState({
        filtered_by: event.target.innerText
     }) 
   }

   render() {
      return(
         <div className="container">
            <h1 className="my-4">Find Your Next Project</h1>
            
            <div class="dropdown text-right mb-3">
               <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filter by
               </button>

               <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" onClick={this.handleFilter}>Beginner</a>
                  <a class="dropdown-item" onClick={this.handleFilter}>Intermediate</a>
                  <a class="dropdown-item" onClick={this.handleFilter}>Advanced</a>
                  <a class="dropdown-item" onClick={this.handleFilter}>View All</a>
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