import { combineReducers } from 'redux';
import { getStudentReducer } from './StudentReducer';

const rootReducer = combineReducers({
  students: getStudentReducer
});

export default rootReducer;