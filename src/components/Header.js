import React from 'react';
import logo from '../placeholdLogo.png';
import './Header.css'
import SettingsMenu from './SettingsMenu'

class Header extends React.Component{
    render(){
        return (
            <div className='header'>
                <img src = {logo} alt='logo' className='logo'></img>
                <div className='title'>Temp Name</div>
                <div className="settings">
                    <SettingsMenu/>
                </div>
            </div>
        )
    }

}

export default Header;