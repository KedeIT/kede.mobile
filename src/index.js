import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Wrapper } from './style';
const container = (

    <Wrapper>
        <App />
    </Wrapper>
)
ReactDOM.render(container, document.getElementById('root'));

