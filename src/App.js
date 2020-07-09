import React from 'react';
import Header from './components/Header';
import RoomsList from './components/RoomsList';
import './App.css';

class App extends React.Component{
  render (){
    return (
      <div className="App">
        <Header />
        <RoomsList roomType = {RoomsList.roomTypes.team}/>
        <div style = {{height:'1px', background:'#FFFFFF'}}/>
        <RoomsList roomType = {RoomsList.roomTypes.personal}/>
      </div>
    );
  }
}

export default App;
