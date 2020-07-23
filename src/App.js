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
        <SimpleBar className='scroll-content-left'>
            <RoomsList roomType={RoomsList.roomTypes.team}/>
            <div className='line-horizontal-white'/>
            <RoomsList roomType={RoomsList.roomTypes.personal}/>
        </SimpleBar>
        <div className="video-region">

        </div>
        <div className="control-bar-footer">
          <ControlBar/>
        </div>
      </div>
    );
  }
}

export default App;