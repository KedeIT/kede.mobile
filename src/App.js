import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {
  CartIcon,
  PersonIcon,
  PoisonIcon
} from './assets/icons/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './pages/index';
import Duwu from './pages/duwu';
import Cart from './pages/cart';
import Mine from './pages/mine';
import Detail from './pages/detail';
class App extends Component {
  render() {
    return (

      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Header></Header>
            <Route path="/" exact
              component={Index}
            // render={()=>{ return <div style={{height:"600px",margin:"50% auto"}}>react-router-dom</div>}}
            ></Route>
            <Route path="/duwu" exact component={Duwu}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/mine" exact component={Mine}></Route>
            <Route path="/:seocode([a-zA-Z]+\d+).html" exact component={Detail}></Route>
            {/* <div style={{height:"600px",margin:"50% auto"}}>
        矢量图：<i class="iconfont">&#xe62a;</i>

        <CartIcon></CartIcon>
        <br />
        <PersonIcon></PersonIcon>
        <PoisonIcon></PoisonIcon>
        </div> */}
            <Footer></Footer>
          </Fragment>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
