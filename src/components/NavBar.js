import React from 'react';
import  { Link } from 'react-router-dom';
import logo from '../images/logo.png';

export const NavBar = () => {
   return(
      <nav className="navbar navbar-expand-lg navbar-light">
         <a className="navbar-brand" href="/">
            <img src={logo} width="20" margin="10" className="d-inline-block align-top" alt="" loading="lazy" /> PEEEAR
         </a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
               <Link to="/" exact className="nav-link active">Home <span className="sr-only">(current)</span></Link>
               <Link to='/projects' exact className="nav-link">Browse Projects</Link>
               <Link to='/new-project' exact className="nav-link">Post New Project</Link>
            </div>
         </div>
      </nav>
   )
}