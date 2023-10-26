/* eslint-disable no-unused-vars */
import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Button, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOn from '@mui/icons-material/LocationOn';
import DirectionsIcon from '@mui/icons-material/Directions';

import GoogleMapComponent from '../components/GoogleMap';
import ContactsTypography from '../components/ContactsTypography';

const ContactsContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(4),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
}));

const ContactsBox = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
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
  padding: theme.spacing(1),
}));

function Contacts() {
  const location = { lat: 40.31063, lng: 23.065669 };
  const phone = '+306998469136';
  const email = 'vluxurysuitespefkochori@gmail.com';
  const address = 'Katsirma 7, Nea Kallikratia 630 80, Chalhidiki, Greece';
  const { t } = useTranslation();
  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };
  const getDirectionsURL = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;

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
          mb={1}
          mt={3}
        >
          {t('contacts.contacts')}
        </Typography>
        <ContactInfo>
          <ContactsTypography
            variant="h5"
            text={phone}
            icon={<PhoneIcon sx={{ mr: '6px', mb: '-3px' }} />}
            onClick={handlePhoneClick}
            color="whitesmoke"
          />
          <ContactsTypography
            variant="h5"
            text={email}
            icon={<EmailIcon sx={{ mr: '6px', mb: '-3px' }} />}
            onClick={handleEmailClick}
            color="whitesmoke"
          />
          <ContactsTypography
            variant="h5"
            text={address}
            icon={<LocationOn sx={{ mr: '6px', mb: '-3px' }} />}
            onClick={() =>
              window.open(getDirectionsURL, '_blank', 'noopener noreferrer')
            }
            color="whitesmoke"
          />
        </ContactInfo>
        <Button
          variant="contained"
          sx={{ p: 2, width: '100%', marginTop: 2 }}
          color="secondary"
          startIcon={<DirectionsIcon />}
          href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </Button>
        {/* <GoogleMapComponent location={location} /> */}
      </ContactsBox>
    </ContactsContainer>
  );
}

export default Contacts;
