import React from 'react';
import {MdScreenShare, MdVideocam, MdVideocamOff} from 'react-icons/md'
import {IoMdMicOff, IoMdMic} from 'react-icons/io'

import './MediaControls.css';

class MediaControls extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            video: true,
            mic: true,
            sharescreen: false
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

    render (){
        let video = this.state.video 
            ? <MdVideocam className='video-icon'/> 
            : <MdVideocamOff className='video-icon'/>
        let mic = this.state.mic
            ? <IoMdMic className='audio-icon'/> 
            : <IoMdMicOff className='audio-icon'/>
        let shareScreenButtonClass = this.state.sharescreen
            ? 'ss-button-selected' : 'ss-button'
        return (
            <div className='media-controls-bar'>
                <div className='media-controls' >
                    <div className='media-button' onClick={this.toggleMic}>
                        {mic}
                    </div>
                    <div className='media-button' onClick={this.toggleVideo}>
                        {video}
                    </div>
                    <div className={shareScreenButtonClass} onClick={this.toggleSharescreen}>
                        <MdScreenShare className='share-screen-icon'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaControls