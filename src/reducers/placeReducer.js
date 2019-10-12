// placeReducer.js

import { LOGIN_STATE } from '../actions/types';

const initialState = {
  loginState: "false"
};

const placeReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_STATE:
        console.log("insude reducers")
        console.log(action)
      return {
        ...state,
        login: action.payload
      };
    default:
      return state;
  }
}

export default placeReducer;