import React from 'react';
import { Link } from 'react-router-dom';
import {FaChevronCircleLeft} from 'react-icons/fa'
import './auth.css';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    register = () => {
        
    };

    render (){        
        return (
            <div className='Register'>
                <Link to="/login">
                    <FaChevronCircleLeft className="back-button"/>
                </Link>
                <input type="text" placeholder="Full Name"></input>
                <div style = {{height:'16px'}}/>
                <input type="text" placeholder="Email"></input>
                <div style = {{height:'16px'}}/>
                <input type="password" placeholder="Password"></input>
                <div style = {{height:'21px'}}/>
                <Link to="/home" style={{ textDecoration: 'none' }} onClick={this.login}>
                    <div className="login-button">
                        REGISTER
                    </div>
                </Link>
            </div>
        )
    }
}


  
export default Register;