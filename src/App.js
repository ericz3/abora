import React from 'react';
import Header from './components/Header';
import RoomsList from './components/RoomsList';
import RoomsSearchBar from './components/SearchBar';
import MediaControls from './components/MediaControls';
import SimpleBar from 'simplebar-react';
import "simplebar/src/simplebar.css";

import './App.css';

class App extends React.Component{
  render (){
    return (
      <div className='App'>
        <div className='left-panel'>
          <div className='header-bar'>
            <Header />
          </div>
          <SimpleBar className='scroll-content-left'>
              <RoomsList roomType={RoomsList.roomTypes.team}/>
              <div className='line-horizontal-white'/>
              <RoomsList roomType={RoomsList.roomTypes.personal}/>
          </SimpleBar>
          <div className='rooms-search-footer'>
            <RoomsSearchBar />
          </div>
        </div>
        <div className='right-panel'>
          <SimpleBar className='scroll-content-right'>

          </SimpleBar>
          <div className='media-control-footer'>
            <MediaControls />
          </div>
        </div>
      </div>
    );
  }
}

export default App;