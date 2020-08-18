import React from 'react';
import  { NavLink } from 'react-router-dom';

export const NavBar = () => {
   return(
      <div>
         <NavLink to='/' exact>Home</NavLink>
         <NavLink to='/projects' exact>Browse Projects</NavLink>
         <NavLink to='/add-new-project' exact>New Project</NavLink>
      </div>
   )
}