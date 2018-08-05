import { combineReducers } from 'redux';
import heavenly from './heavenly'
import earthly from './earthly'

const rootReducer = combineReducers({
  heavenly,
  earthly
});

export default rootReducer;