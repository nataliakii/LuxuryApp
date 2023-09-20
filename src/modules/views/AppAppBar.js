import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language'; // Import an icon for the language menu

const rightLink = {
  fontSize: {
    xs: 13,
    sm: 19,
  },
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null); // State for the anchor element of the menu

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{
              fontSize: {
                xs: 18,
                sm: 24,
              },
            }}
          >
            S. LUXURY PRINCESS SUITE
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {/* Add a language dropdown */}
            <IconButton
              color="inherit"
              onClick={handleClick}
            >
              <LanguageIcon />
            </IconButton>
            {/* Language menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>English</MenuItem>
              <MenuItem onClick={handleClose}>Serbian</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
