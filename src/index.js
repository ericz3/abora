import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
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

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
