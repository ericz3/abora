import React from 'react';

function MacTitleBar(){
    return (
        <div style = {TitleBarStyle}> 
        </div>
    )
}

const TitleBarStyle = {
    '-webkit-user-select': 'none',
    background: '#4B6672', 
    height: '22px', 
    '-webkit-app-region': 'drag'
}



export default MacTitleBar;