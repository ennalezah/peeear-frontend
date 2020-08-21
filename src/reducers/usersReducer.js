const usersReducer = (state = [], action) => {
   switch (action.type) {
      // case 'FETCH_USERS':
      //    return action.payload

      // adds user from the new project form
      case "ADD_PROJECT":
         let existingUser = state.filter(
            user => user.email === action.payload.email
         );

         if (existingUser.length > 0) {
            return state;
         } else {
            return [...state, {
               first_name: action.payload.first_name,
               last_name: action.payload.last_name,
               email: action.payload.email   
            }]
         }

      default:
         return state;
   }
}

export default usersReducer;