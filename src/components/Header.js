import React from 'react';
import logo from '../placeholdLogo.png';
import './Header.css'

class Header extends React.Component{
    render(){
        return (
            <div className='header-bar'>
                <img src = {logo} alt='logo' className='logo'></img>
                <div className='title'>Temp Name</div>    
            </div>
        )
    }

}

export default Header;