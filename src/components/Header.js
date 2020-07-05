import React from 'react';

function Header(){
    return (
        <header style = {headerStyle}>
            Team Name Placeholder
        </header>
    )
}

const headerStyle = {
    fontSize: '22px',
    fontWeight: '400',
    lineHeight: 2.5,
    paddingLeft: '10px',
    paddingRight: '10px',
    background: '#5B818D',
    color: '#FFFFFF'
}

export default Header;