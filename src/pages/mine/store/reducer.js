import { fromJS } from 'immutable';
import { TOGGLE_COLOR, STYLE } from './actionTypes';

const defaultState = fromJS({
    currentColor: STYLE.colorBlue
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_COLOR: {
            let currentColor = state.get("currentColor");
            if (currentColor === STYLE.colorBlue) {
                return state.set("currentColor", STYLE.colorRed);
            } else {
                return state.set("currentColor", STYLE.colorBlue);
            }
        }
        default:
            return state;
    }
}