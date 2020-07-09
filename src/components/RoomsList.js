import React from 'react';
import propTypes from 'prop-types';
import {FaPlus} from 'react-icons/fa'
import {FaCaretDown, FaCaretRight} from 'react-icons/fa'

const roomTypes = {
    personal: 'personal',
    team: 'team'
}

const dropDownStyle = {
    background : '#DADADA',
    height : '40px',
    color: '#454545',
    fontWeight: '600', 
    fontSize: '15px',
    paddingTop: '12px',
    paddingLeft: '19px',
    paddingRight: '14px'
}

const createRoomButtonStyle = {
    float: 'right',
    borderRadius: '20%',
    width: '25px',
    height: '25px',
    padding: '5px',
    marginTop: '-5px'
}

class RoomsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: true,
            buttonHover : false
        };
    }

    toggleShow = () => {
        this.setState(state => ({show : !state.show}));
    };

    createRoom = () => {
        this.setState(state => ({show : !state.show}));
    }

    toggleButtonHover = () => {
        this.setState(state => ({buttonHover : !state.buttonHover}));
    };

    render() {
        return (
            <div>
                <div style = {dropDownStyle} onClick = {this.toggleShow}>
                    {this.state.show ? <FaCaretDown style = {{float: 'left'}}/> : 
                        <FaCaretRight style = {{float: 'left'}}/>}
                    <div style = {{float: 'left', marginLeft: '14px'}}> 
                        {this.props.roomType === roomTypes.team 
                            ? 'Team Rooms': 'Personal Rooms'}
                    </div>
                    {this.props.roomType === roomTypes.team ? 
                        <div 
                            background = {this.buttonHover ? '#FF0000':'#DADADA'}
                            style = {createRoomButtonStyle} 
                            onClick = {this.createRoom}
                            onMouseEnter = {this.toggleButtonHover}
                            onMouseLeave = {this.toggleButtonHover}>
                            <FaPlus/>
                        </div> : ''
                    }
                </div>
                {/* replace with list*/}
                {this.state.show ? <div style = {{height : '40px', background : '#FFFFFF'}}></div> : ''}
            </div>
        );
    }
}

RoomsList.propTypes = {
    roomType: propTypes.oneOf(Object.keys(roomTypes))
}

RoomsList.roomTypes = roomTypes;

export default RoomsList;