import {LOGIN_FORM_VAL} from './types';

export const loginformval = formobj => {
    return{
        type: LOGIN_FORM_VAL,
        payload: formobj
    }
}