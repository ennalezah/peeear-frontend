import React from 'react';

export const ProjectCard = (props) => {
   return(
      <div key={props.id}>
         <h3>{props.title}</h3>
         <p><strong>Difficulty:</strong> {props.difficulty}</p>
         
         <p>{props.description}</p>
         
         ~ ~ ~         
         
         <p><strong>Interested in pairing?</strong></p>
   <button><a href={`mailto:${props.email}?subject=Re: Your PEEEAR project - ${props.title}&body=Hi ${props.first_name}! I'm interested in pairing up for this project. Please send more info my way. Thanks!"`}>Contact {props.first_name}</a></button>
         {/* <p>{props.first_name} {props.last_name}</p>
         <p>{props.email}</p> */}

         <hr />
      </div>
   )
}