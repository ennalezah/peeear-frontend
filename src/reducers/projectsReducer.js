function projectsReducer(state = { projects: [], projectsLoading: false }, action) {
   switch (action.type) {
      case 'LOADING_PROJECTS':
         return {
            ...state,
            projects: [...state.projects],
            projectsLoading: true 
         }

      case 'FETCH_PROJECTS':
         return {
            ...state,
            projects: action.projects,
            projectsLoading: false
         }

      default:
         return state;
   }
}

export default projectsReducer;