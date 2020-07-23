import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import {BsGearFill} from 'react-icons/bs'
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';
import './SettingsMenu.css'

const SettingsButton = withStyles(() =>({
    root : {
      color: '#454545',
      border: 0,
      width: '10px',
      height: '10px',
      hover: {
          backgroundColor: '#ffffff'
      },
    },
}))(IconButton);

function SettingsMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        window.api.request("logout", "");
    }

    return (
        <div className="settings">
            <SettingsButton aria-controls="settings-menu" aria-haspopup="true" onClick={handleClick}>
                <BsGearFill className='settings-icon' />
            </SettingsButton>
            <Menu
                id="settings-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Preferences</MenuItem>
                <MenuItem onClick={handleClose}>Invite</MenuItem>
                <Link to="/login" style={{ textDecoration: 'none', color:'#454545' }}>
                    <MenuItem onClick={logout}>
                        Sign Out
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default SettingsMenu;