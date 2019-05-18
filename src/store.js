import { createStore, combineReducers } from 'redux';
import authReducer from './ducks/auth_reducer';

export default createStore(
  combineReducers({ authReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
