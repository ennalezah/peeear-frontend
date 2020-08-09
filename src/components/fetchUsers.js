function fetchUsers() {
   const usersUrl = 'http://localhost:3000/api/v1/users'
   return (dispatch) => {
      dispatch({ type: 'GET_USERS_REQUEST' });

      fetch(usersUrl)
         .then(resp => resp.json())
         .then(users => dispatch({ type: 'ADD_USERS', users }));
   };
}

export default fetchUsers;