/**
 * Created by BlisS on 20/03/17.
 */
import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
