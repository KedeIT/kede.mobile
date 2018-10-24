import { combineReducers } from 'redux-immutable';
import { reducer as duwuReducer } from '../pages/duwu/store';

export default combineReducers({
    duwu: duwuReducer
});