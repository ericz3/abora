import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import {FaChevronCircleLeft} from 'react-icons/fa';
import { CognitoUserPool, CognitoUserAttribute, CognitoUser} from 'amazon-cognito-identity-js';
import config from '../../config.json'
import './auth.css';

Modal.setAppElement('body')

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
            err: "",
            passwordRulesModalIsOpen: false
        };

        this.UserPool = new CognitoUserPool(config['cognito'])
    }

    togglePasswordRulesModal = event => {
        this.setState({
            modalIsOpen : !this.state.modalIsOpen
        });
    }

    updateInput = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    register = async event => {
        console.log(this.state)
        event.preventDefault();
        var attributeList = [];
        var dataName = {Name: 'name', Value: this.state.email}
        var attributeName = new CognitoUserAttribute(dataName)
        attributeList.push(attributeName);
        this.UserPool.signUp(this.state.email, this.state.password, attributeList, null, (err, data) => {
            console.error(err);
            this.setState({err: ""});

            if(err){
                // var err_msg = "* ";
                // err_msg = err_msg.concat(err.message)
                // this.setState({err_msg : err_msg});
                console.log(err)
                this.setState({err : err.message});
            }
        })
    };

    render (){       
        return (
            <div className='Register'>
                <Link to="/login" className="back-button">
                    <FaChevronCircleLeft className="button-icon"/>
                </Link>
                <div 
                    className="password_rules_button" 
                    onClick={this.togglePasswordRulesModal}
                >
                    Password Rules
                </div>
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.togglePasswordRulesModal}
                    shouldCloseOnOverlayClick={true}
                    className="password_rules_modal"
                    overlayClassName="password_rules_overlay"
                >
                </Modal>
                <form onSubmit={this.register}>
                    <div style={{position: "relative"}}>
                        <input 
                            type="text" 
                            id="name"
                            // placeholder="Full Name"
                            value={this.state.name}
                            onChange={this.updateInput}
                            required
                        />
                        <span class="floating-label">Name</span>
                    </div>
                    <div style = {{height:'10px'}}/>
                    <div style={{position: "relative"}}>
                        <input 
                            type="text" 
                            id="email"
                            // placeholder="Email"
                            value={this.state.email}
                            onChange={this.updateInput}
                            required
                        />
                        <span class="floating-label">Email</span>
                    </div>
                    <div style = {{height:'10px'}}/>
                    <div style={{position: "relative"}}>
                        <input 
                            type="password" 
                            id="password"
                            // placeholder="Password"
                            value={this.state.password}
                            onChange={this.updateInput}
                            required
                        />
                        <span class="floating-label">Password</span>
                    </div>
                    <div style = {{height:'10px'}}/>
                    <div style={{position: "relative"}}>
                        <input 
                            type="password" 
                            id="confirmpassword"
                            // placeholder="Confirm Password"
                            value={this.state.confirmpassword}
                            onChange={this.updateInput}
                            required
                        />
                        <span class="floating-label">Confirm Password</span>
                    </div>
                    <div style = {{height:'18px'}}/>
                    <Link to="/home" style={{ textDecoration: 'none' }} onClick={this.register}>
                        <div className="main-button">
                            REGISTER
                        </div>
                    </Link>
                    <div style = {{height:'12px'}}/>
                    <div className='err_msg'>
                        {/* {this.state.err_msg == "" : ""} */}
                        {this.state.err}
                    </div>
                </form>
            </div>
        )
    }
}


  
export default Register;