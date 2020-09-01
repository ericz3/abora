import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import VideoPage from './VideoPage';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './Login';

const mainElement = document.getElementById('root');
if(mainElement){
  ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path='/'><Redirect to='/login'/></Route>
        <Route path='/login'><Login /></Route>
        <Route path='/home'><App /></Route>
      </div>
    </BrowserRouter>,
    mainElement
  );
}

const vidElement = document.getElementById('vid');
if(vidElement){
  ReactDOM.render(
    <VideoPage />,
    vidElement
  );
}
