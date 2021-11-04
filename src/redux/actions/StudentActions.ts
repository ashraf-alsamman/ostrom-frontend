import {STUDENT_ACTION, GET_STUDENTS, StudentActionTypes } from '../types/StudentTypes';
import { Student } from '../interfaces/Student';

export const getStudentsAction = (students: Student[]): StudentActionTypes => {
  return {
    type: GET_STUDENTS,
    payload: students
  };
};

export const StudentAction = (students: Student[]): any => {
    return {
      type: STUDENT_ACTION,
      payload: students
    };
};