function usersReducer(state = { users: [], requesting: false }, action) {
   switch (action.type) {
      case 'LOADING_USERS':
         return {
            ...state,
            users: [...state.users],
            requesting: true 
         }

      case 'ADD_USERS':
         return {
            ...state,
            users: action.users,
            requesting: false
         }

      default:
         return state;
   }
}

export default usersReducer;