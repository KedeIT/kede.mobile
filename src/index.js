import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Wrapper } from './style';
import { Provider } from 'react-redux';
import store from './store';
const container = (
    <Provider store={store}>
        <Wrapper>
            <App />
        </Wrapper>
    </Provider>
)
ReactDOM.render(container, document.getElementById('root'));

