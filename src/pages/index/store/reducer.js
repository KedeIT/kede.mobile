import { fromJS } from 'immutable';
import { GET_INDEX_TEMPLATE } from './actionTypes'
const defaultState = fromJS({
    content: "页面加载中，请稍后..."
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_INDEX_TEMPLATE:
            {
                return state.set("content", action.data);
            }
        default:
            return state;
    }
}