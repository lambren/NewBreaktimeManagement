import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {currentBreaktimeState} from './../recoil/atoms'
import {useRecoilState} from 'recoil'
import useStyle from './../Styles'

export default function SetTime() {
  const classes = useStyle();
  const [currentBreaktime, setCurrentBreaktime] = useRecoilState(currentBreaktimeState);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNoSet = () => {
      setAnchorEl(null);
  }

  const handleClose = (minutes) => {
    setCurrentBreaktime(minutes);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={handleClick}
        className={classes.bigText}>
        {currentBreaktime} Minutes
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseNoSet}
      >
        <MenuItem onClick={() => handleClose(15)}>15 Minutes</MenuItem>
        <MenuItem onClick={() => handleClose(30)}>30 Minutes</MenuItem>
        <MenuItem onClick={() => handleClose(45)}>45 Minutes</MenuItem>
      </Menu>
    </div>
  );
}
