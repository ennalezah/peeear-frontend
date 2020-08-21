const usersReducer = (state = [], action) => {
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

      // case "ADD_PROJECT":
      //    let existingUser = state.users.filter(
      //       user => user.email === action.project.email
      //    );

      //    if (existingUser.length > 0) {
      //       return state;
      //    } else {
      //       return {
      //          ...state,
      //          users: state.users.concat({ 
      //             first_name: action.payload.first_name,
      //             last_name: action.payload.last_name,
      //             email: action.payload.email 
      //          })
      //       }
      //    }

      default:
         return state;
   }
}

export default usersReducer;