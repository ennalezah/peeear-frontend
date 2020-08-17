import React from 'react';

export const ProjectCard = (props) => {
   return(
      <div key={props.id}>
         <h3>{props.title}<br />({props.difficulty})</h3>
         <p>{props.description}</p>
      </div>
   )
}