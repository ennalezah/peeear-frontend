function projectsReducer(state = { projects: [], loading: false }, action) {
   switch (action.type) {
      case 'LOADING_PROJECTS':
         return {
            ...state,
            projects: [...state.projects],
            loading: true 
         }

      case 'FETCH_PROJECTS':
         return {
            ...state,
            projects: action.projects,
            loading: false
         }

      default:
         return state;
   }
}

export default projectsReducer;