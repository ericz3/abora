import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Login from './Login';

ReactDOM.render(
  <HashRouter>
    <Route exact path='/'><Redirect to='/home'/></Route>
    <Route path='/login' component={ Login }/>
    <Route path='/home' component={ App }/>
  </HashRouter>,
  document.getElementById('root')
);