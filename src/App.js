import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import PageRoute from './pages/root.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Header></Header>
            <PageRoute></PageRoute>
            <Footer></Footer>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
