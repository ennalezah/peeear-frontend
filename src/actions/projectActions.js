const projectsUrl = "http://localhost:3000/api/v1/projects";

export const fetchProjects = () => {
   return (dispatch) => {
      fetch(projectsUrl)
         .then(resp => resp.json())
         .then(projects => {
            dispatch({ type: 'FETCH_PROJECTS', payload: projects })
            // console.log(projects)
            // debugger
         });
   }
};

export const addProject = (formData) => {
   // console.log('b')
   return (dispatch) => {
      // console.log('c')
      fetch(projectsUrl, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
      })
         .then(resp => resp.json())
         .then(newProject => {
            // console.log('d')
            dispatch({ type: 'ADD_PROJECT', payload: newProject })
         })
      // console.log('e')
   }
   // console.log('f')
}