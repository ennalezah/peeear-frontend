import React, { Component } from 'react';
import { ProjectCard } from  '../ProjectCard';

class ProjectsContainer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         filtered_by: "View All",
         search: ""
      }
   }

   displayProjectCard = (projects) => { 
      return projects.map(project => <ProjectCard {...project} />)      
   }

   search = (projects) => {
      let searchResults;

      if (this.state.search) {
         searchResults = projects.filter(project => project.title.toLowerCase().includes(this.state.search) || project.description.toLowerCase().includes(this.state.search))    

         return this.displayProjectCard(searchResults);
      } else {
         return this.displayProjectCard(projects)
      }
      // searchResults = projects.filter(project => project.title.toLowerCase().includes(this.state.search))    
      // return this.displayProjectCard(searchResults);
   }

   filter = () => {
      let results;

      switch(this.state.filtered_by) {
         case 'Beginner':
           results = this.props.projects.filter(project => project.difficulty === 'Beginner');
           return this.search(results);

         case 'Intermediate':
            results = this.props.projects.filter(project => project.difficulty === 'Intermediate');
            return this.search(results);

         case 'Advanced':
            results = this.props.projects.filter(project => project.difficulty === 'Advanced');
            return this.search(results);

         default:
            return this.search(this.props.projects);
      }
   }

   handleFilter = (event) => {
     this.setState({
        filtered_by: event.target.innerText
     }) 
   }

   handleSearch = (event) => {
      this.setState({
         search: event.target.value
      }) 
   }

   render() {
      return(
         <div className="container">
            <h1 className="my-4">Find Your Next Project</h1>

            <div className="text-right mb-3">
               <span className="dropdown mx-3">
                  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Filter by
                  </button>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li className="dropdown-item" onClick={this.handleFilter}>Beginner</li>
                        <li className="dropdown-item" onClick={this.handleFilter}>Intermediate</li>
                        <li className="dropdown-item" onClick={this.handleFilter}>Advanced</li>
                        <li className="dropdown-item" onClick={this.handleFilter}>View All</li>
                  </div>
               </span>

               <span className="text-right">
                  <input type="text" onChange={this.handleSearch} value={this.state.search.toLowerCase()} placeholder="Search" />
               </span>               
            </div>
         
            <div className="row row-cols-1 row-cols-md-3">
               { this.filter() }
            </div>         
            
         </div>
      )
   }
}

 export default ProjectsContainer;