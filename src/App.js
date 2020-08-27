import React from 'react';
import Header from './components/Header';
import RoomsList from './components/RoomsList';
import RoomsSearchBar from './components/Search';
import ControlBar from './components/ControlBar';
import SimpleBar from 'simplebar-react';
import "simplebar/src/simplebar.css";

import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  render (){
    return (
      <div className='App'>
        <Header />
        <SimpleBar className='scroll-content'>
            <RoomsList roomType={RoomsList.roomTypes.team}/>
            <div className='line-horizontal-white'/>
            <RoomsList roomType={RoomsList.roomTypes.personal}/>
        </SimpleBar>
        <div className="video-region">
          <VideoControls/>
        </div>
        <div className="control-bar-footer">
          <ControlBar/>
        </div>

        <script>window.$ = window.jQuery = require('jquery');</script>
        <script src="./components/renderer.js"></script>
        <script src="./components/video.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

      </div>
    );
  }
}

export default App;