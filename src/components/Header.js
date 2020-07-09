import React from 'react';
import logo from '../placeholdLogo.png';

class Header extends React.Component{
    render(){
        const headerLogoStyle = {
            paddingLeft: '14px',
            paddingTop: '8px',
            float: 'left'
        }
        
        const logoImageStyle = {
            width: '38px',
            height: '38px',
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
                <div style = {headerLogoStyle}> 
                    <img src = {logo} alt = 'logo' style={logoImageStyle}></img>
                </div>
                <div style = {headerTitleStyle}>Temp Name</div>    
            </header>
        )
    }

}

export default Header;