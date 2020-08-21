import React from 'react';

export const ProjectCard = (props) => {
   return(
      <div key={props.id}>
         <h3>{props.title}</h3>
         
         <p>{props.description}</p>

         <p><strong>Difficulty:</strong> {props.difficulty}</p>
         
         ~ ~ ~         
         
         <p><strong>Interested in pairing?</strong></p>
         <button><a href="mailto: {props.email}">Contact {props.first_name}</a></button>
         {/* <p>{props.first_name} {props.last_name}</p>
         <p>{props.email}</p> */}

         <hr />
      </div>
   )
}