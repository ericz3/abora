import React from 'react';
import {
    MdScreenShare, 
    MdMic, 
    MdMicOff, 
    MdVideocam, 
    MdVideocamOff, 
    MdChatBubble
} from 'react-icons/md'
import {
    RiRecordCircleLine, 
    RiFullscreenLine,
    RiFullscreenExitLine
} from 'react-icons/ri';
import './ControlBar.css';

class ControlBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            video: true,
            mic: true,
            sharescreen: false,
            record: false,
            fullscreen: false
        };
    }

    toggleVideo = () => {
        this.setState(state => ({video : !state.video}));
    };

    toggleMic = () => {
        this.setState(state => ({mic : !state.mic}));
    };

    toggleSharescreen = () => {
        this.setState(state => ({sharescreen : !state.sharescreen}));
    };

    toggleRecord = () => {
        this.setState(state => ({record : !state.record}));
    };

    toggleFullscreen = () => {
        this.setState(state => ({fullscreen : !state.fullscreen}));
    };

    render (){
        let mic = this.state.mic
            ? <MdMic className='icon'/> 
            : <MdMicOff className='icon-red'/>;
        let video = this.state.video 
            ? <MdVideocam className='icon'/>
            : <MdVideocamOff className='icon-red'/>;
        let screenshare = this.state.sharescreen
            ?  <MdScreenShare className='icon-green'/>
            :  <MdScreenShare className='icon'/>;
        let record = this.state.record
            ?  <RiRecordCircleLine className='icon-green'/>
            :  <RiRecordCircleLine className='icon'/>;
        let fullscreenIcon = this.state.fullscreen
            ? <RiFullscreenExitLine className='icon'/>
            : <RiFullscreenLine className='icon'/>;
        return (
            <div className='control-bar'>
                <div>
                    <div className='media-button' onClick={this.toggleMic}>
                        {mic}
                    </div>
                    <div className='media-button' onClick={this.toggleVideo}>
                        {video}
                    </div>
                    <div className='media-button' onClick={this.toggleSharescreen}>
                        {screenshare}
                    </div>
                </div>
                <div className='leave-button'>
                    Leave
                </div>
                <div>
                    <div className='right-button' onClick={this.toggleFullscreen}>
                        {fullscreenIcon}
                    </div>
                    <div className='right-button' onClick={this.toggleRecord}>
                        {record}
                    </div>
                    <div className='right-button'>
                        <MdChatBubble className='icon'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ControlBar