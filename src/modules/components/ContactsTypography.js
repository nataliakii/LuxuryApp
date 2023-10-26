import React from 'react';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOn from '@mui/icons-material/LocationOn';

function ContactsTypography({ variant, text, icon, onClick, color }) {
  const iconStyles = {
    fontSize: {
      xs: 19,
      sm: 24,
    },
    p: 1,
    cursor: 'pointer',
    border: '1px solid transparent',
    '&:hover': {
      border: '1px solid',
      borderColor: 'secondary.light',
      padding: '1px',
    },
  };

  return (
    <Typography
      variant={variant}
      sx={iconStyles}
      color={color}
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </Typography>
  );
}

export default ContactsTypography;
