import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
   users: usersReducer,
   projects: projectsReducer
})

export default rootReducer;