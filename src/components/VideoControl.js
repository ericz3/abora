import React from 'react';
import './VideoControl.css';
import {MdScreenShare} from 'react-icons/md'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {AiTwotoneAudio} from 'react-icons/ai'

class VideoButtons extends React.Component {
    render (){
        return (
            <div className='video-control-bar'>
                <MdScreenShare className='share-screen-icon'/>
                <BsFillCameraVideoFill className='video-icon'/>
                {/* <AiTwotoneAudio className='audio-icon'/> */}
            </div>
        )
    }
}

export default VideoButtons