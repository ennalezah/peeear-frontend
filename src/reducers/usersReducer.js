function usersReducer(state = { users: [], requesting: false }, action) {
   switch (action.type) {
      case 'GET_USERS_REQUEST':
         return {
            ...state,
            users: [...state.users],
            requesting: true 
         }

      case 'ADD_USER':
         return {
            ...state,
            users: [...state.users],
            requesting: false
         }
         
      default:
         return state;
   }
}

export default usersReducer;