export const fetchUsers = () => {
   return (dispatch) => {

      fetch("http://localhost:3000/api/v1/users")
         .then(resp => resp.json())
         .then(usersJSON => {
            dispatch({ type: 'FETCH_USERS', users: usersJSON })
            // console.log(usersJSON);
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