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
    // background : '#FFFFFFFF',
    float: 'right',
    borderRadius: '20%',
    width: '24px',
    height: '24px',
    padding: '4px',
    marginTop: '-4px',
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
        console.log(this.state.show)
    };

    createRoom = () => {
        this.setState(state => ({show : !state.show}));
        console.log('add')
    }

    render() {
        return (
            <div>
                <div style = {dropDownStyle} onClick = {this.toggleShow}>
                    {this.state.show ? <FaCaretDown style = {{float: 'left'}}/> : <FaCaretRight style = {{float: 'left'}}/>}
                    <div style = {{float: 'left', marginLeft: '14px'}}> 
                        {this.props.roomType === roomTypes.team 
                            ? 'Team Rooms': 'Personal Rooms'}
                    </div>
                    {this.props.roomType === roomTypes.team ? 
                        <div 
                            style = {createRoomButtonStyle} 
                            onClick = {this.createRoom}>
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