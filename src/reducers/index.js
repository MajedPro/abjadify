import { combineReducers } from 'redux';
import heavenly from './heavenly'
import earthly from './earthly'
import general from './general'

const rootReducer = combineReducers({
  heavenly,
  earthly,
  general
});

export default rootReducer;