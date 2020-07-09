import React from 'react';
import logo from '../placeholdLogo.png';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const headerLogoStyle = {
            paddingLeft: '10px',
            paddingTop: '8px',
            float: 'left'
        }
        
        const logoImageStyle = {
            width: '38px',
            height: '38px',
            borderRadius: '15%'
        }
        
        const headerTitleStyle = {
            fontSize: '22px',
            fontWeight: '400',
            color: '#454545',
            paddingTop: '14px',
            marginLeft: '58px'
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