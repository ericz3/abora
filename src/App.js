import React from 'react';
import Header from './components/Header';
import RoomsList from './components/RoomsList';
import RoomsSearchBar from './components/SearchBar';
// import PerfectScrollbar from 'react-perfect-scrollbar'
import './App.css';

class App extends React.Component{
  render (){
    return (
      <div className='App'>
        <div className='scroll-content'>
          {/* <PerfectScrollbar component='div'> */}
            <RoomsList roomType={RoomsList.roomTypes.team}/>
            <div className='line-horizontal-white'/>
            <RoomsList roomType={RoomsList.roomTypes.personal}/>
          {/* </PerfectScrollbar> */}
        </div>
        <div className='header-bar'>
          <Header />
        </div>
        <div className='rooms-search-footer'>
          <RoomsSearchBar />
        </div>
      </div>
    );
  }
}

export default App;
