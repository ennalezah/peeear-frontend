const projectsUrl = "http://localhost:3000/api/v1/projects";

export const fetchProjects = () => {
   return (dispatch) => {
      dispatch({ type: 'LOADING_PROJECTS' });
      console.log("Loading projects...");

      fetch(projectsUrl)
         .then(resp => resp.json())
         .then(projectsJSON => {
            dispatch({ type: 'FETCH_PROJECTS', projects: projectsJSON })
            // console.log(projectsJSON)
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
            dispatch({ type: 'ADD_PROJECT', payload: newProjectData })
            console.log(newProjectData)
         })
   }
}