import React from 'react';
import  { NavLink } from 'react-router-dom';

export const NavBar = () => {
   return(
      <div>
         <NavLink to='/' exact>Home</NavLink>
         <NavLink to='/how-it-works' exact>How It Works</NavLink>
         <NavLink to='/add-new-project' exact>New  Project</NavLink>
      </div>
   )
}