import React, { Fragment } from 'react';
import { Route } from 'react-router-dom'
import Index from './index';
import Duwu from './duwu';
import Cart from './cart';
import Mine from './mine';
import Detail from './detail';

export default () => {
    return (
        <Fragment>
            <Route path="/" exact component={Index}></Route>
            <Route path="/duwu" exact component={Duwu}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/mine" exact component={Mine}></Route>
            <Route path="/:seocode([a-zA-Z]+\d+).html" exact component={Detail}></Route>
        </Fragment>
    )
}