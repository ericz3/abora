import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './Login';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/'><Redirect to='/login'/></Route>
      <Route path='/login'><Login /></Route>
      <Route path='/home'><App /></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);