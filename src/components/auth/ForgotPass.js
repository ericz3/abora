import React from 'react';
import { Link } from 'react-router-dom';
import {FaChevronCircleLeft} from 'react-icons/fa'
import './auth.css';
import { ForgotPassword } from 'aws-amplify-react';
import { MdSend } from 'react-icons/md'

class ForgotPass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: ""
        };
    }

    updateInput = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    send_forgot_pass_email = () => {
        
    };

    render (){        
        return (
            <div className='Forgot-Pass'>
                <Link to="/login" className="back-button">
                    <FaChevronCircleLeft className="button-icon"/>
                </Link>
                <div className="small-text">
                    Enter the email for your account. You will recieve instructions to reset your password.
                </div>
                <div style = {{height:'12px'}}/>
                <div style = {{position: 'relative'}}>
                    <input 
                        type="email" 
                        id="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.updateInput}
                    />
                    <div className="send-button" onClick={this.send_forgot_pass_email}>
                        <div >
                            <MdSend className="button-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


  
export default ForgotPass;