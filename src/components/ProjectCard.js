import React from 'react';

export const ProjectCard = (props) => {
   return(
      <div className="col mb-3">
         <div key={props.id} className="card bg-light border-light h-100 text-left">
            <div class="card-header">
               {props.difficulty}
            </div>
            <div className="card-body">
               <h5 className="card-title">{props.title}</h5>
               
               <p className="card-text">{props.description}</p>
                  
               <div className="card-footer">
                  <a className="btn btn-warning btn-lg btn-block" href={`mailto:${props.email}?subject=Re: Your PEEEAR project - ${props.title}&body=Hi ${props.first_name}! I'm interested in pairing up for this project. Please send more info my way. Thanks!"`}>Contact {props.first_name}</a>
               </div>            
            </div>
         </div>     
      </div>
                     
   )
}