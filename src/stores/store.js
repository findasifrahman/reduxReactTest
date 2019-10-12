// store.js

// store.js

import { createStore, combineReducers } from 'redux';
import placeReducer from '../reducers/placeReducer';
import ThemeColorReducer from '../reducers/ThemeColorReducers'
import LoginFormReducer from '../reducers/LoginFormReducers';
const rootReducer = combineReducers({
  loginState: placeReducer,
  ThemeColorState: ThemeColorReducer,
  LoginFormState: LoginFormReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;