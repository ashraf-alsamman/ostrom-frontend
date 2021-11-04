import { getStudentsAction , StudentAction} from '../actions/StudentActions';
import { Dispatch } from 'redux';
import { StudentActionTypes} from '../types/StudentTypes';

import Config from '../../config/config.json';


export const getStudents = () => {
  return function (dispatch: Dispatch<StudentActionTypes>) {
    fetch(Config.api, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        dispatch(getStudentsAction(data));
        return data;
      });
  };
};



export const AddStudent = (data:any) => {
   
    return function (dispatch: Dispatch<StudentActionTypes>) {
       fetch(Config.api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
            dispatch(StudentAction(data));
            return data;
        });
    };
  };

export const EditeStudent = (data:any) => {
   
    return function (dispatch: Dispatch<StudentActionTypes>) {
      const _URL = Config.api+data.id;
      fetch(_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
            dispatch(StudentAction(data));
            return data;
        });
    };
  };





export const deleteStudent = (id:number) => {
    return function (dispatch: Dispatch<StudentActionTypes>) {
      const _URL = Config.api+id;
      fetch(_URL, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          dispatch(StudentAction(data));
          return data;
        });
    };
  };