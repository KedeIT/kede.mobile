import { combineReducers } from 'redux-immutable';
import { reducer as duwuReducer } from '../pages/duwu/store';
import { reducer as indexReducer } from '../pages/index/store';

export default combineReducers({
    duwu: duwuReducer,
    index: indexReducer
});