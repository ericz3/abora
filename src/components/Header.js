import React from 'react';
import logo from '../placeholdLogo.png';

function Header(){
    return (
        <header style = {{width: '100%', height: '54px', background: '#FFFFFF',}}>
            <div style = {headerLogoStyle}> 
                <img src = {logo} alt = 'logo' style={logoImageStyle}></img>
            </div>
            <div style = {headerTitleStyle}>Temp Name</div>    
        </header>
    )
}

const headerLogoStyle = {
    paddingLeft: '10px',
    paddingTop: '8px',
    float: 'left'
}

const logoImageStyle = {
    width: '36px',
    height: '36px',
    borderRadius: '15%'
}

const headerTitleStyle = {
    fontSize: '22px',
    fontWeight: '400',
    color: '#454545',
    paddingTop: '14px',
    marginLeft: '58px'
}

export default Header;