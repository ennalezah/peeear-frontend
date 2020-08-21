const projectsReducer = (state = [], action) => {
   switch (action.type) {

      case 'FETCH_PROJECTS':
         return [...state, action.payload]

      case 'ADD_PROJECT':
         return [...state, action.payload]

      default:
         return state;
   }
}

export default projectsReducer;