import React from 'react';
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'


class RoomSearchBar extends React.Component {
    render (){
        return (
            <div className='search-bar'>
                <FaSearch className='search-icon'/>
                <input type='text'></input>
                
            </div>
        )
    }
}

export default RoomSearchBar