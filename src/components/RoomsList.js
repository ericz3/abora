import React from 'react';
import propTypes from 'prop-types';
import {FaPlus} from 'react-icons/fa'
import {FaCaretDown, FaCaretRight} from 'react-icons/fa'
import './RoomsList.css'
import IconButton from '@material-ui/core/Button';

const roomTypes = {
    personal: 'personal',
    team: 'team'
}

class RoomsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: true
        };
    }

    toggleShow = () => {
        this.setState(state => ({show : !state.show}));
    };

    createRoom = () => {
        this.setState(state => ({show : !state.show}));
    }

    render() {
        let caret = this.state.show 
                    ? <FaCaretDown className='float-left'/> 
                    : <FaCaretRight className='float-left'/>
        let dropDownTitle = (this.props.roomType === roomTypes.team) 
                    ? 'Team Rooms'
                    : 'Personal Rooms'
        return (
            <div className='unselectable'>
                <div className='drop-down' onClick={this.toggleShow}>
                    {caret}
                    <div className='drop-down-title'> 
                        {dropDownTitle}
                    </div>
                    {this.props.roomType === roomTypes.team && 
                        <div className='create-room-button' onClick={this.createRoom}>
                           <FaPlus/>
                        </div>
                    }
                </div>
                {/* replace with list*/}
                {this.state.show && <div style = {{height : '40px', background : '#FFFFFF'}}></div>}
            </div>
        );
    }
}

RoomsList.propTypes = {
    roomType: propTypes.oneOf(Object.keys(roomTypes))
}

RoomsList.roomTypes = roomTypes;

export default RoomsList;