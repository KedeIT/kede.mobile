import { TOGGLE_COLOR } from './actionTypes';

const getToggleColorAction = () => ({
    type: TOGGLE_COLOR
});

export const toggleColor = () => {
    return (dispatch) => {
        let action = getToggleColorAction();
        dispatch(action);
    }
}