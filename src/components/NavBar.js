import React from 'react';
import  { Link } from 'react-router-dom';

export const NavBar = () => {
   return(
      // <div>
      //    <Link to='/' exact>Home</NavLink>

      //    <Link to='/projects' exact>Browse Projects</NavLink>

      //    <Link to='/add-new-project' exact>New Project</NavLink>
      // </div>


      <nav>
         <ul>
            <li>
               <Link to='/' exact>Home</Link>
            </li>

            <li>
               <Link to='/projects' exact>Browse Projects</Link>
            </li>
            
            <li>
               <Link to='/add-new-project' exact>New Project</Link>
            </li>
         </ul>
      </nav>
   )
}