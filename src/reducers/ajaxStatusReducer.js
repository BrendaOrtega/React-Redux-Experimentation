/**
 * Created by BlisS on 26/03/17.
 */

import * as types from '../actions/actionTypes';
import initialState from './initialState';


function actionTypeEndsInSuccess(type){
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action){
  // console.log(actionTypeEndsInSuccess(action.type));
  if (action.type == types.BEGIN_AJAX_CALL){
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR
    || actionTypeEndsInSuccess(action.type)){

    return state - 1;
  }

  return state;
}
