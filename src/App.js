import React from 'react';
import Login from './components/auth/Login';
import Home from './components/Home';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Register from './components/auth/Register';
import ForgotPass from './components/auth/ForgotPass';

import './App.css';

class App extends React.Component{
  render (){
    return (
      <HashRouter>
        <div>
          <Route exact path='/'><Redirect to='/login'/></Route>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/forgot' component={ForgotPass}/>
          <Route path='/home' component={Home}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;