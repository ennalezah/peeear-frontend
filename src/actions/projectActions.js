const projectsUrl = "http://localhost:3000/api/v1/projects";

export const fetchProjects = () => {
   return (dispatch) => {
      fetch(projectsUrl)
         .then(resp => resp.json())
         .then(projectsJSON => {
            dispatch({ type: 'FETCH_PROJECTS', payload: projectsJSON })
            // console.log(projectsJSON)
            // debugger
         });
   }
};

export const addProject = (formData) => {
   return (dispatch) => {
      fetch(projectsUrl, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
      })
         .then(resp => resp.json())
         .then(newProjectData => {
            dispatch({ type: 'ADD_PROJECT', payload: newProjectData.projects })
         })
   }
}