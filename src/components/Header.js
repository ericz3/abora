import React from 'react';
import logo from '../placeholdLogo.png';
import './Header.css'
import {BsGearFill} from 'react-icons/bs'
import IconButton from '@material-ui/core/IconButton';

class Header extends React.Component{
    render(){
        return (
            <div className='header-bar'>
                <img src = {logo} alt='logo' className='logo'></img>
                <div className='title'>Temp Name</div>
                <div className="settings-button">
                    <IconButton>
                        <BsGearFill className='settings-icon' />
                    </IconButton>
                </div>
            </div>
        )
    }

}

export default Header;