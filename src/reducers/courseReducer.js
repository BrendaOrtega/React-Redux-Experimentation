/**
 * Created by BlisS on 20/03/17.
 */
import * as types from '../actions/actionTypes';
import initalState from './initialState';


export default function courseReducer(state = initalState.courses, action){
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      // state.push(action.course);
      // return state;
      // return [...state,
      //   Object.assign({}, action.course)];
          return action.courses;

    case types.SAVE_NEW_COURSE:
      return [
        ...state,
        Object.assign({}, action.course)
        ];

    case types.UPDATE_NEW_COURSE:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}

