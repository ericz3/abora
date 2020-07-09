import React from 'react';
import propTypes from 'prop-types';

const roomTypes = {
    personal: 'personal',
    team: 'team'
}

const dropDownHeaderStyle = {
    background : '#DADADA',
    height : '38px',
    color: '#454545',
    paddingLeft: '20px',
    paddingTop: '10px',
    fontWeight: '600',
    fontSize: '16px'
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

    render() {
        return (
            <div>
                <div style = {dropDownHeaderStyle}> 
                    {this.props.roomType === roomTypes.team 
                        ? 'Team Rooms': 'Personal Rooms'} 
                </div>
            </div>
        );
    }
}

RoomsList.propTypes = {
    roomType: propTypes.oneOf(Object.keys(roomTypes))
}

RoomsList.roomTypes = roomTypes;

export default RoomsList;