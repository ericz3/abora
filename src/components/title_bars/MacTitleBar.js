import React from 'react';
const { remote } = window.require("electron")

class MacTitleBar extends React.Component{
    constructor(props){
        super(props);
        this.handDoubleClick = this.handDoubleClick.bind(this);
    }

    handDoubleClick() {
        let win = remote.BrowserWindow.getFocusedWindow();
        win.isMaximized() ?  win.unmaximize() : win.maximize();
    }
    
    render(){
        const TitleBarStyle = {
            '-webkit-user-select': 'none',
            background: '#4B6672', 
            height: '22px', 
            '-webkit-app-region': 'drag',
        }

        return (
            <div style = {TitleBarStyle} onDoubleClick = {this.handDoubleClick}> 
            </div>
        )
    }
    
    
}

export default MacTitleBar;