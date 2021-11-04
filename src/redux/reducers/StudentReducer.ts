import {
    GET_STUDENTS,
    GetStudentStateType,
    StudentActionTypes
  } from '../types/StudentTypes';
  
  const initialState: GetStudentStateType = {
    students: []
  };
  
  export const getStudentReducer = (
    state = initialState,
    action: StudentActionTypes
  ): GetStudentStateType => {
    switch (action.type) {
      case GET_STUDENTS:
        return {
          ...state,
          students: action.payload
        };
      default:
        return state;
    }
  };