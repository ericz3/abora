import React from 'react';
import logo from '../placeholdLogo.png';
import './Header.css'
import {BsGearFill} from 'react-icons/bs'
import {FaUserPlus, FaSearch} from 'react-icons/fa'
import {GoChevronDown} from 'react-icons/go'

class Header extends React.Component{
    render(){
        return (
            <div className='header'>
                <div className='team-select'>
                    <img src = {logo} alt='logo' className='header-logo'></img>
                    <div className='header-title'> Temp Name </div>
                    <GoChevronDown className='chevron-down'/>
                </div>
                <div className='header-button'>
                    <BsGearFill className="settings-icon"/>
                </div>
                <div className='header-button'>
                    <FaSearch className="settings-icon"/>
                </div>
                <div className='header-button'>
                    <FaUserPlus className="settings-icon"/>
                </div>
            </div>
        )
    }

}

export default Header;