const usersUrl = "http://localhost:3000/api/v1/users";

export const fetchUsers = () => {
   return (dispatch) => {
      fetch(usersUrl)
         .then(resp => resp.json())
         .then(users => {
            dispatch({ type: 'FETCH_USERS', payload: users })
         });
   };
}

export const addUser = (formData) => {
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
         debugger
   }
 };