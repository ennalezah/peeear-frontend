const usersReducer = (state = { users: [], usersLoading: false }, action) => {
   switch (action.type) {
      case 'LOADING_USERS':
         return {
            ...state,
            users: [...state.users],
            usersLoading: true 
         }

      case 'FETCH_USERS':
         return {
            ...state,
            users: action.users,
            usersLoading: false
         }

      default:
         return state;
   }
}

export default usersReducer;