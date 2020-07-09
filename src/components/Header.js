import React from 'react';
import logo from '../placeholdLogo.png';

class Header extends React.Component{
    render(){
        const headerLogoStyle = {
            float: 'left',
            marginLeft: '14px',
            marginTop: '8px',
            width: '39px',
            height: '39px',
            borderRadius: '25%'
        }
        
        const headerTitleStyle = {
            fontSize: '20px',
            fontWeight: '600',
            color: '#454545',
            paddingTop: '17px',
            marginLeft: '64px',
            letterSpacing: '1.2px'
        }

        return (
            <header style = {{width: '100%', height: '54px', background: '#FFFFFF',}}>
                <img src = {logo} alt = 'logo' style={headerLogoStyle}></img>
                <div style = {headerTitleStyle}>Temp Name</div>    
            </header>
        )
    }

}

export default Header;