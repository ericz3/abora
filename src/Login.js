import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {MdCheckBoxOutlineBlank, MdCheckBox} from 'react-icons/md'
import './Login.css';

// const { BrowserWindow } = window.require('electron');

const LoginButton = withStyles({
    root: {
      background: '#9FC2E3',
      borderRadius: '2px',
      border: 0,
      width: '100%',
      height: '56px',
      fontSize: '16px',
      fontWeight: 600,
      letterSpacing: '1.5px',
      color: 'white',
      '&:hover': {
          backgroundColor: '#ADD1EC'
      }
    }
})(Button);


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

    render (){
        let checkboxIcon = this.state.staySignedIn ? <MdCheckBox/>: <MdCheckBoxOutlineBlank/>;
        
        return (
            <div className='Login'>
                <div className = 'logo_header'>Abora</div>
                <input type="text" placeholder="Workspace-ID"></input>
                <div style = {{height:'30px'}}/>
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
                <div style = {{height:'42px'}}/>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                    <LoginButton variant="contained">
                            Sign In
                    </LoginButton>
                </Link>
            </div>
        )
    }
}


  
export default Login;