import React from 'react';
// import logo from '../placeholdLogo.png';
import './Header.css'
// import {BsGearFill} from 'react-icons/bs'
import {
    FaUserPlus, 
    // FaSearch
} from 'react-icons/fa'
// import {GoChevronDown} from 'react-icons/go'
import { Link } from 'react-router-dom';



class Header extends React.Component{
    logout = () => {
        window.api.request("logout", "");
    }

    render(){
        return (
            <div className='header'>
                <div className='team-select'>
                    {/* <img src = {logo} alt='logo' className='header-logo'></img> */}
                    <div className='header-title'> Temp Name </div>
                    {/* <GoChevronDown className='chevron-down'/> */}
                </div>
                <Link to="/login" style={{ textDecoration: 'none', color:'#454545' }}>
                    <div className='sign-out' onClick={this.logout}>
                        Sign Out
                    </div>
                </Link>
               
                
                {/* <div className='header-button'>
                    <FaSearch className="settings-icon"/>
                </div> */}
                <div className='header-button'>
                    <FaUserPlus className="header-button-icon"/>
                </div>
            </div>
        )
    }

}

export default Header;