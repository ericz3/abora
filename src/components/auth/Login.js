import React from 'react';
import { Link } from 'react-router-dom';
import {MdCheckBoxOutlineBlank, MdCheckBox} from 'react-icons/md'
import './auth.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            staySignedIn : false,
            email: "",
            password: ""
        };
    }

    updateInput = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
        // document.getElementById(event.target.id).classList.remove("is-danger");
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
                <div className='small-text' >
                    <Link
                        to="/register"
                        style={{position: 'absolute', 
                            top: '8px', 
                            right: '24px', 
                            cursor: 'pointer',
                            color: 'inherit',
                            textDecoration: 'none'}}>
                        Register
                    </Link>
                </div>
                <div className = 'logo_header'>Abora</div>
                <div style={{position: 'relative'}}>
                    <input 
                        type="text" 
                        id="email"
                        value={this.state.email}
                        onChange={this.updateInput}
                        required
                    />
                    <span class="floating-label">Email</span>
                </div>
                <div style = {{height:'16px'}}/>
                <div style={{position: 'relative'}}>
                    <input 
                        type="password" 
                        id="password"
                        value={this.state.password}
                        onChange={this.updateInput}
                        required
                    />
                    <span class="floating-label">Password</span>
                </div>
                <div style = {{height:'16px'}}/>
                <div className='small-text'>
                    <span style={{float:'left', cursor: 'pointer', paddingRight: '5px'}} onClick={this.toggleCheckBox}>
                        {checkboxIcon}
                    </span>
                    <span style={{float:'left', cursor: 'pointer'}} onClick={this.toggleCheckBox}>
                         Stay Signed In
                    </span>
                    <Link 
                        to="/forgot" 
                        style={{
                            float:'right', 
                            cursor: 'pointer', 
                            color: 'inherit', 
                            textDecoration: 'none'}}>
                        Forgot Password
                    </Link>
                </div>
                <div style = {{height:'46px'}}/>
                <Link to="/home" style={{ textDecoration: 'none' }} onClick={this.login}>
                    <div className="main-button">
                        SIGN IN
                    </div>
                </Link>
                <div style = {{height:'10px'}}/>
            </div>
        )
    }
}


  
export default Login;