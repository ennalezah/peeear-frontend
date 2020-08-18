import React from 'react';
import { HowItWorks } from './HowItWorks';

export const Home = () => {
   return(
      <>
         <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1>PEEEAR</h1> 
            <h3>Improve your coding skills by pair programming on projects you're interested in</h3>   
         </header>
         <HowItWorks />
      </>
   )
   
}