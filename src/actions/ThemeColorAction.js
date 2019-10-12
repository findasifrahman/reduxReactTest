import { RED_TEME_COLOR, GREEN_TEME_COLOR} from './types'

export const redThemeColorAction = colorname => {
    return {
        type: RED_TEME_COLOR,
        payload: colorname
    }
}
export const greenThemeColorAction = colorname => {
    return {
        type: GREEN_TEME_COLOR,
        payload: colorname
    }
}