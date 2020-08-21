import React from 'react';

export const NewProjectForm = (props) => {
   return(
      <form onSubmit={props.handleSubmit}>
         <p>
            <select name="difficulty" value={props.difficulty} onChange={props.handleChange} >
               <option hidden selected value>Difficulty (select one)</option>
               <option value="Beginner">Beginner</option>
               <option value="Intermediate">Intermediate</option>
               <option value="Advanced">Advanced</option>
            </select>
         </p>

         <p>
            <input type="text" name="title" value={props.title} onChange={props.handleChange} placeholder="Title"/>
         </p>

         <p>
            <textarea name="description" value={props.description} onChange={props.handleChange} placeholder="Describe your project in detail. What are some features on it? What can users do with it? What problem are you trying to solve?" />
         </p>

         {/* <p>
            <select name="difficulty" value={props.difficulty} onChange={props.handleChange} >
               <option hidden selected value>Difficulty (select one)</option>
               <option value="Beginner">Beginner</option>
               <option value="Intermediate">Intermediate</option>
               <option value="Advanced">Advanced</option>
            </select>
         </p> */}

         <h3>Your contact info</h3>

         <p>
            <input type="text" name="first_name" value={props.first_name} onChange={props.handleChange} placeholder="First name"/>
         </p>

         <p>
            <input type="text" name="last_name" value={props.last_name} onChange={props.handleChange} placeholder="Last name"/>
         </p>

         <p>
            <input type="text" name="email" value={props.email} onChange={props.handleChange} placeholder="Email" />
         </p>

         <input type="submit" value="Submit"/>
      </form>
   )
}