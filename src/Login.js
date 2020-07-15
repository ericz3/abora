import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const { BrowserWindow } = window.require('electron');

class Login extends React.Component{
    render(){
        return (
            <div className='Login'>
                <Link 
                    style = {{height: '40px', width: '40px', backgroundColor: '#454545'}} 
                    to="/home">
                        Login
                </Link>
            </div>
        )
    }
}

export default Login;