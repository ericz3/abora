import React from 'react';
import Header from './components/Header';
import RoomsList from './components/RoomsList';
import RoomsSearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component{
  render (){
    console.log(window.location.href); 
    return (
      <div className='App'>
        <Header />
        <div className='scroll-content'>
          <RoomsList roomType={RoomsList.roomTypes.team}/>
          <div className='line-horizontal-white'/>
          <RoomsList roomType={RoomsList.roomTypes.personal}/>
        </div>
        <div className='line-horizontal-gray'/> 
        <div className='rooms-search-footer'>
          <RoomsSearchBar/>
        </div>
      </div>
    );
  }
}

export default App;
