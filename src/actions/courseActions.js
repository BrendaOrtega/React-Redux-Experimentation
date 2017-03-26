/**
 * Created by BlisS on 20/03/17.
 */
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';



export function loadCoursesSuccess(courses){
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course){
  return { type: types.SAVE_NEW_COURSE, course };
}

export function updateCourseSuccess(course){
  return { type: types.UPDATE_NEW_COURSE, course };
}


export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      }).catch(error =>{
        throw(error);
      });
  };
}

export function saveCourse(course){
  return function (dispatch, getState){
    return courseApi.saveCourse(course)
      .then(savedCourse =>{
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    })
      .catch(error => {
        throw(error);
      });
  };
}

