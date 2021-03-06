import React from 'react';
import { Link } from 'react-router-dom';
import {MdCheckBoxOutlineBlank, MdCheckBox} from 'react-icons/md'
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            staySignedIn : false
        };
    }

    toggleCheckBox = () => {
        this.setState(state => ({staySignedIn : !state.staySignedIn}));
    };

    login = () => {
        window.api.request("login", "");
    }

    render (){
        let checkboxIcon = this.state.staySignedIn ? <MdCheckBox/>: <MdCheckBoxOutlineBlank/>;
        
        return (
            <div className='Login'>
                <div className = 'logo_header'>Abora</div>
                <input type="text" placeholder="Email"></input>
                <div style = {{height:'16px'}}/>
                <input type="password" placeholder="Password"></input>
                <div style = {{height:'16px'}}/>
                <div className='bottom-text'>
                    <span style={{float:'left', cursor: 'pointer'}} onClick={this.toggleCheckBox}>
                        {checkboxIcon} Stay Signed In
                    </span>
                    <span style={{float:'right', cursor: 'pointer'}}>
                        Forgot Password
                    </span>
                </div>
                <div style = {{height:'46px'}}/>
                <Link to="/home" style={{ textDecoration: 'none' }} onClick={this.login}>
                    <div className="login-button">
                        SIGN IN
                    </div>
                </Link>
            </div>
        )
    }
}


  
export default Login;