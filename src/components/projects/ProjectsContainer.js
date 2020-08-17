import React, { Component } from 'react';

class ProjectsContainer extends Component {
   displayProjects = () => {
      // return console.log(this.props.projectsData.projects)
      return this.props.projectsData.projects.map(project => {
         return (
            <div key={project.title}>
               <h3>{project.title}</h3>
               <p>{project.description}</p>

               {/* <p><strong>Comments</strong></p>
               <div>{project.comments}</div>
               <form onSubmit={this.handleCommentSubmit}>
                  <input type="text" name="input" value={this.state.input} onChange={this.handleCommentChange}placeholder="Type comment here..."/>
                  <input type="submit" value="Submit" />
               </form> */}
               <hr />
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