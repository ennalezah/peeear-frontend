import React from 'react';

export const Jumbotron = () => {
   return(
      <div className="jumbotron vertical-center">
         <div className="container">
            <h1 className="jumbotron-title">Two heads are better than one</h1>
            <p className="lead"><strong>Improve your coding skills by pair programming on projects you're interested in</strong></p>   
            <br />      
            <a className="btn btn-warning btn-lg" href="/projects" role="button">Browse Projects</a>   
         </div>         
      </div>
   )
}