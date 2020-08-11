function projectsReducer(state = [], action) {
   switch (action.type) {
      case 'LOADING_PROJECTS':
         return [...state, action.projects]

      case 'FETCH_PROJECTS':
         return [...state, action.projects]

      default:
         return state;
   }
}

export default projectsReducer;