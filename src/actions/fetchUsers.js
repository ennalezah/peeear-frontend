export const fetchUsers = () => {
   const usersUrl = 'http://localhost:3001/api/v1/users';

   return (dispatch) => {
      dispatch({ type: 'LOADING_USERS' });

      fetch(usersUrl)
         .then(resp => resp.json())
         .then(users => {
             dispatch({ type: 'ADD_USERS', users })
             console.log(users);
            }
         );
   };
}