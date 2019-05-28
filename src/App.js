import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './page/home';
import Detail from './page/detail';
import store from './store';
import Login from './page/login';
import Write from './page/write';
import Logging from './page/logging';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>

      <GlobalStyle />
      <IconfontStyle />
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={ Home } />
        <Route exact path='/detail' component={ Detail } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/write' component={ Write } />
        <Route exact path='/logging' component={ Logging } />
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
