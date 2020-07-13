import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {BsGearFill} from 'react-icons/bs'
import Fade from '@material-ui/core/Fade';

function SettingsMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <BsGearFill className='settings-icon' />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Preferences</MenuItem>
                <MenuItem onClick={handleClose}>Invite</MenuItem>
                <MenuItem onClick={handleClose}>Sign out</MenuItem>
            </Menu>
        </div>
    )
}

export default SettingsMenu;