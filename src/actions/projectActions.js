const projectsUrl = "http://localhost:3000/api/v1/projects";

export const fetchProjects = () => {
   return (dispatch) => {
      dispatch({ type: 'LOADING_PROJECTS' });
      console.log("Loading projects...");

      fetch(projectsUrl)
         .then(resp => resp.json())
         .then(projectsJSON => {
            dispatch({ type: 'FETCH_PROJECTS', projects: projectsJSON })
            console.log(projectsJSON)
         });
   }
};

// export const addProject = () => {
//    return (dispatch) => {
//       fetch(projectsUrl)
//          .then
//    }
// }