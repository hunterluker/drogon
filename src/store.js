import { createStore, combineReducers } from 'redux';
import authReducer from './ducks/auth_reducer';
import searchReducer from './ducks/search_reducer';

export default createStore(
  combineReducers({ authReducer, searchReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
