import React from 'react';
import logo from '../placeholdLogo.png';

function Header(){
    return (
        <header style = {{width: '100%', height: '50px', background: '#5B818D',}}>
            <div style = {headerLogoStyle}> 
                <img src = {logo} alt = 'logo' style={logoImageStyle}></img>
            </div>
            <div style = {headerTitleStyle}>Team Name Placeholder</div>    
        </header>
    )
}

const headerLogoStyle = {
    paddingLeft: '10px',
    paddingTop: '6px',
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
    color: '#FFFFFF',
    paddingTop: '12px',
    marginLeft: '58px'
}

export default Header;