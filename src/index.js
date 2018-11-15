import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GlobalStyle, Wrapper } from './style';
import { Provider } from 'react-redux';
import store from './store';
const container = (
    <Provider store={store}>
        <Fragment>
            <GlobalStyle></GlobalStyle>
            <Wrapper>
                <App />
            </Wrapper>
        </Fragment>
    </Provider>
)
ReactDOM.render(container, document.getElementById('root'));

