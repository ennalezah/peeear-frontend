import React from 'react';

export const Jumbotron = () => {
   return(
      <div className="jumbotron vertical-center">
         <div className="container">
            <h1 className="jumbotron-title">Two heads are better than one</h1>
            <p className="lead">Improve your coding skills by pair programming on projects you're interested in</p>   
            <br />      
            <a className="btn btn-primary btn-lg" href="/projects" role="button">Browse Projects</a>   
         </div>         
      </div>
   )
}