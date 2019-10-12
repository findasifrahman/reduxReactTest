import { RED_TEME_COLOR,GREEN_TEME_COLOR } from '../actions/types';


const initialState = {
    redThemeColorState : '#ff0000',
    greenThemeColorState: '#00ff00'
}

export default ThemeColorReducer = (state = initialState, action) => {
    console.log(action.payload)
    console.log("payload.....")
    switch(action.type){
        case RED_TEME_COLOR:
            return {
                ...state,
                redThemeColorState: action.payload
            }
        case GREEN_TEME_COLOR:
            return{
                ...state,
                greenThemeColorState: action.payload
            }
        default:
            return state
    }
}