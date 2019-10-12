// place.js

import { LOGIN_STATE } from './types';

export const loginAction = logstate => {
  return {
    type: LOGIN_STATE,
    payload: logstate
  }
}