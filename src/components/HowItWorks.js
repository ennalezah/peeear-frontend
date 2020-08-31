import React from 'react';
import project from '../images/project.png';
import teamwork from '../images/teamwork.png';
import repeat from '../images/repeat.png';

export const HowItWorks = () => {
   return(
      <div id="how-it-works">
         <div className="container py-4">
            <h6 className="text-uppercase">How It Works</h6>
            <br />
            <div className="row align-items-center">               
               <div className="col">
                  <img className="icons mb-4" src={project} alt="lightbulb" width="110" />
                  <h5>Find a project</h5>
                  <p>Browse all projects and find one that you like and will challenge you.</p>
               </div>

               <div className="col">
                  <img className="icons mb-4" src={teamwork} alt="hands" width="110" />
                  <h5>Work as a Pair</h5>
                  <p>Contact the project's poster to let them know you're interested in pairing up.</p>
               </div>

               <div className="col">
                  <img className="icons mb-4" src={repeat} alt="repeat arrow" width="110" />
                  <h5>Repeat</h5>
                  <p>Complete the project with your partner, then return to step 1. </p>
               </div>
            </div>
         </div>
      </div>
   )
}

