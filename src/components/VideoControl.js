import React from 'react';
import './VideoControl.css';
import {MdScreenShare} from 'react-icons/md'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {AiTwotoneAudio} from 'react-icons/ai'

class VideoButtons extends React.Component {
    render (){
        return (
            <div className='video-control-bar'>
                <div className='video-controls'>
                    <div className='highlights-bar'>
                        <MdScreenShare className='share-screen-icon'/>
                    </div>
                    <div className='highlights-bar'>
                        <BsFillCameraVideoFill className='video-icon'/>
                    </div>
                    <div className='highlights-bar'>
                        <AiTwotoneAudio className='audio-icon'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoButtons