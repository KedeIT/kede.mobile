import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {
  CartIcon,
  PersonIcon,
  PoisonIcon
} from './assets/icons/iconfont';
class App extends Component {
  render() {
    return (
      <div className="App">

        <Header></Header>

        <div style={{height:"600px",margin:"50% auto"}}>
        矢量图：<i class="iconfont">&#xe62a;</i>

        <CartIcon></CartIcon>
        <br />
        <PersonIcon></PersonIcon>
        <PoisonIcon></PoisonIcon>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
