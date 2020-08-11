export const fetchProjects = () => {
   return (dispatch) => {
      dispatch({ type: 'LOADING_PROJECTS' });
      console.log("Loading projects...");

      fetch("http://localhost:3000/api/v1/projects")
         .then(resp => resp.json())
         .then(projectsJSON => {
            dispatch({ type: 'FETCH_PROJECTS', projects: projectsJSON })
            console.log(projectsJSON)
         });
   }
};