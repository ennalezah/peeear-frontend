import React from 'react';

export const NewProjectForm = (props) => {
   return(
      <div className="container">
         <form onSubmit={props.handleSubmit}>
            {/* <p>
               <select name="difficulty" value={props.difficulty} onChange={props.handleChange} required>
                  <option hidden selected value>Difficulty (select one)</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
               </select>
            </p> */}

            <div className="form-group mx-auto">
               <select className="form-control" name="difficulty" value={props.difficulty} onChange={props.handleChange} required>
                  <option hidden selected value>Difficulty (select one)</option>
               <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
               </select>
            </div>

            {/* <p>
               <input type="text" name="title" value={props.title} onChange={props.handleChange} placeholder="Title"/>
            </p> */}

            <div className="form-group mx-auto">
               <input type="text" className="form-control" name="title" value={props.title} onChange={props.handleChange} placeholder="Project title" />
            </div>

            {/* <p>
               <textarea name="description" value={props.description} onChange={props.handleChange} placeholder="Describe your project in detail. What are some features on it? What can users do with it? What problem are you trying to solve?" />
            </p> */}

            <div className="form-group mx-auto">
               <textarea className="form-control" name="description" rows="4" value={props.description} onChange={props.handleChange} placeholder="Describe your project in detail. What problem are you trying to solve with it? List some features you'd like to build out. What can users do with it? What language(s) are you using to create your project?"></textarea>
            </div>

            {/* <p>
               <select name="difficulty" value={props.difficulty} onChange={props.handleChange} >
                  <option hidden selected value>Difficulty (select one)</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
               </select>
            </p> */}

            <h5><strong>Contact info</strong></h5>
            <p className="font-italic">This is how individuals will reach out to you about your project.<br />Please fill out as accurately as possible.</p>

            {/* <p>
               <input type="text" name="first_name" value={props.first_name} onChange={props.handleChange} placeholder="First name" required/>
            </p> */}

            <div className="form-group mx-auto">
               <input type="text" className="form-control" name="first_name" value={props.first_name} onChange={props.handleChange} placeholder="First name" required />
            </div>

            {/* <p>
               <input type="text" name="last_name" value={props.last_name} onChange={props.handleChange} placeholder="Last name" required/>
            </p> */}

            <div className="form-group mx-auto">
               <input type="text" className="form-control" name="last_name" value={props.last_name} onChange={props.handleChange} placeholder="Last name" required />
            </div>

            {/* <p>
               <input type="text" name="email" value={props.email} onChange={props.handleChange} placeholder="Email" required />
            </p> */}
            
            <div className="form-group mx-auto">
               <input type="email" className="form-control" name="email" value={props.email} onChange={props.handleChange} placeholder="Email" required />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
         </form>
      </div>
   )
}