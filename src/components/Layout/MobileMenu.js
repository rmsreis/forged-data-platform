import React, { useState } from 'react';
import { 
  IconButton, 
  Menu, 
  MenuItem, 
  Box 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MobileMenu = ({ navItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'mobile-button',
        }}
      >
        {navItems.map((item) => (
          <MenuItem 
            key={item.name} 
            onClick={handleClose}
            component={RouterLink}
            to={item.path}
          >
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

MobileMenu.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MobileMenu;
