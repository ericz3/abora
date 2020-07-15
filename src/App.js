import React from 'react';
import React from 'react';
import Header from './components/Header';
import RoomsList from './components/RoomsList';
import RoomsSearchBar from './components/SearchBar';
import SimpleBar from 'simplebar-react';
import Video from './components/Video';
import VideoControl from './components/VideoControl';

import "simplebar/src/simplebar.css";
import './App.css';

class App extends React.Component{
  render (){
    return (
      <div className='App'>
        <div className='header-bar'>
          <Header />
        </div>
        <SimpleBar className='scroll-content'>
            <RoomsList roomType={RoomsList.roomTypes.team}/>
            <div className='line-horizontal-white'/>
            <RoomsList roomType={RoomsList.roomTypes.personal}/>
        </SimpleBar>
        <div className='rooms-search-footer'>
          <RoomsSearchBar />
        </div>
      </div>
    );
  }
}

export default App;