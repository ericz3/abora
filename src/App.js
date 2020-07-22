import React from 'react';
import Header from './components/Header';
import RoomsList from './components/RoomsList';
import RoomsSearchBar from './components/SearchBar';
import MediaControls from './components/MediaControls';
import SimpleBar from 'simplebar-react';
// import {AiOutlineDoubleRight, AiOutlineDoubleLeft} from 'react-icons/ai'
import "simplebar/src/simplebar.css";

import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // showRight : false,
      // rightWidth: 180,
    }
  }

  // toggleRight = () => {
  //   this.setState(state => ({showRight : !state.showRight}));
  // }

  render (){
    // let showRightButtonIcon = this.state.showRight ? <AiOutlineDoubleLeft/> : <AiOutlineDoubleRight/>

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
          {/* <div className="toggle-right-panel" onClick={this.toggleRight}>
            {showRightButtonIcon}
          </div> */}
        </div>
        <div className='right-panel'>
          <SimpleBar className='room-content-scroll'>
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