import React from 'react';
import  { Link } from 'react-router-dom';

export const NavBar = () => {
   return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand" href="/">PEEEAR</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
               <Link to="/" exact class="nav-link active">Home <span class="sr-only">(current)</span></Link>
               <Link to='/projects' exact class="nav-link">Browse Projects</Link>
               <Link to='/new-project' exact class="nav-link">Post New Project</Link>
            </div>
         </div>
      </nav>
   )
}