import {combineReducers} from 'redux';
import countReducer from './countReducer';
import nameReducer from './nameReducer';
import useReducer from './usersReducer';

const rootReducer = combineReducers({
  count: countReducer,
  user: useReducer,
  name: nameReducer,
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
