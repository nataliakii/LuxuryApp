/* eslint-disable no-unused-vars */
import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import GoogleMapComponent from '../components/GoogleMap';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactsContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(4),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
}));

const ContactsBox = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
  backgroundColor: theme.palette.primary.dark,
  width: '100%',
  height: '100%',
  overflowY: 'auto',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
}));

function Contacts() {
  const location = { lat: 40.31063, lng: 23.065669 };
  const phone = '+306998469136';
  const email = 'vluxurysuitespefkochori@gmail.com';
  const { t } = useTranslation();
  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <ContactsContainer component="section">
      <ContactsBox>
        <Typography
          variant="h3"
          marked="center"
          align="center"
          component="h3"
          color="whitesmoke"
          mb={5}
        >
          {t('contacts.contacts')}
        </Typography>
        <ContactInfo>
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                xs: 19,
                sm: 24,
              },
              p: 1,
              //alignItems: 'center',
              cursor: 'pointer',
              border: '1px solid transparent',
              '&:hover': {
                border: '1px solid',
                borderColor: 'secondary.light',
                padding: '4px',
              },
            }}
            color="whitesmoke"
            onClick={handlePhoneClick}
          >
            <PhoneIcon sx={{ mr: '6px', mb: '-3px' }} />
            {phone}
          </Typography>
          <Typography
            variant="h5"
            sx={{
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
                padding: '4px',
              },
            }}
            color="whitesmoke"
            onClick={handleEmailClick}
          >
            <EmailIcon sx={{ mr: '6px', mb: '-3px' }} />
            {email}
          </Typography>
        </ContactInfo>
        <GoogleMapComponent location={location} />
      </ContactsBox>
    </ContactsContainer>
  );
}

export default Contacts;
