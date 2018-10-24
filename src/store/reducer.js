import { combineReducers } from 'redux';
import { reducer as duwuReducer } from '../pages/duwu/store';

export default combineReducers({
    duwu: duwuReducer
});