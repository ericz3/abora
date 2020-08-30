import React from 'react';
import './Room.css';
import teamroom1 from '../Team_Room_1.jpg';
import {BsFillLockFill, BsFillUnlockFill} from 'react-icons/bs';

class Room extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lock: true
        };
    }

    launchVideoWindow = () => {
        window.api.request("video", "");
    }

    lockRoom = () => {
        this.setState(state => ({lock : !state.lock}));
    };

    render(){
        let lockstatus = this.state.lock 
                    ? <BsFillUnlockFill/> 
                    : <BsFillLockFill/>

        return (
            <div className='room-block'>
                <div onClick={this.launchVideoWindow}>
                    <img src = {teamroom1} alt='teamroom1' className='room-logo'></img>
                    <div className='room-title'> General Room </div>
                </div>
                <div className='lock-room-button' onClick={this.lockRoom} >
                    {lockstatus}
                </div>
            </div>
        )
    }

}

export default Room;