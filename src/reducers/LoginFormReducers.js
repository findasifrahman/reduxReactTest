import { LOGIN_FORM_VAL } from '../actions/types';


const initialState = {
    email: "test2@gmail.com",
    password: "test123",
}

export default LoginFormReducer = (state = initialState, action) => {
    console.log(action.payload)
    console.log("payload form.....")
    switch(action.type){
        case LOGIN_FORM_VAL:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
        default:
            return state
    }
}