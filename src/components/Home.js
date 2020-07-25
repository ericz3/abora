import React from 'react';
import Header from './Header';
import RoomsList from './RoomsList';
// import RoomsSearchBar from './Search';
import ControlBar from './ControlBar';
import SimpleBar from 'simplebar-react';

import "simplebar/src/simplebar.css";

import './Home.css'

class Home extends React.Component{
    render (){
      return (
        <div className='Home'>
            <Header />
            <SimpleBar className='scroll-content'>
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
  
export default Home;

