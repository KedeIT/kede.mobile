import { createStore,applyMiddleware } from 'redux';//引入 applyMiddleware
import reducer from './reducer';
import thunk from 'redux-thunk';

//创建store的时候，将中间件thunk作为参数传入
const store = createStore(reducer,applyMiddleware(thunk))

export default store;