import React from 'react';
// import Header from './components/Header';
// import RoomsList from './components/RoomsList';
// import RoomsSearchBar from './components/SearchBar';
import Video from './components/Video';
import VideoControl from './components/VideoControl';
import './App.css';

class App extends React.Component{
  render (){
    return (
      <div className='App'>
        <div>
          <Video/>
        </div>
        <div className='video-control-footer'>
          <VideoControl/>
       </div>
      </div>
    );
  }
}

export default App;
