import { Student } from '../interfaces/Student';

export const GET_STUDENTS = 'GET_STUDENTS';
export const STUDENT_ACTION = 'STUDENT_ACTION';

export interface GetStudentStateType {
  students: Student[];
}

interface GetStudentsActionType {
  type: typeof GET_STUDENTS;
  payload: Student[];
}
export type StudentActionTypes = GetStudentsActionType;