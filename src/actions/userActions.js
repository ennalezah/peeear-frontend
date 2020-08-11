export const fetchUsers = () => {
   return (dispatch) => {
      // dispatch({ type: 'LOADING_USERS' });
      // console.log("Loading users...")

      fetch("http://localhost:3000/api/v1/users")
         .then(resp => resp.json())
         .then(usersJSON => {
            dispatch({ type: 'FETCH_USERS', users: usersJSON })
            console.log(usersJSON);
         });
   };
}