/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import { styled, keyframes } from '@mui/system';
import Toolbar from '../components/Toolbar';
import AppBar from '../components/AppBar';

const TransparentAppBar = styled(AppBar)(({ theme, scrolled }) => {
  const getHeight = () => (scrolled ? '44px' : '70px');

  const getBackgroundColor = () => (scrolled ? 'transparent' : 'primary.dark');

  const getFontSize = () => (scrolled ? '0.8rem' : '1.2rem');

  return {
    transition: theme.transitions.create(['height', 'background-color'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
    willChange: 'height, background-color',
    height: getHeight(),
    backgroundColor: getBackgroundColor(),
    boxShadow: scrolled ? theme.shadows[2] : 'none',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    fontSize: getFontSize(),
  };
});

function AppAppBar({ setLanguage, language }) {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 80);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const { i18n } = useTranslation();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event);
    i18n.changeLanguage(event);
    handleClose();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <TransparentAppBar scrolled={scrolled}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            mt: scrolled ? -1 : 0,
            color: scrolled ? 'secondary.main' : 'white',
          }}
        >
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{
              fontSize: {
                xs: scrolled ? 15 : 18,
                sm: scrolled ? 17 : 24,
              },
            }}
          >
            S. LUXURY PRINCESS SUITE
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              onClick={handleClick}
              sx={{ mt: scrolled ? -1 : 0, color: 'inherit' }}
            >
              <LanguageIcon fontSize="small" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleLanguageChange('en')}>
                English
              </MenuItem>
              <MenuItem onClick={() => handleLanguageChange('el')}>
                Ελληνικά
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </TransparentAppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
