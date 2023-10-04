/* eslint-disable no-unused-vars */
import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GoogleMapComponent from '../components/GoogleMap';
import { useTranslation } from 'react-i18next';

// Define a styled container for the Contacts section
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

const Contacts = () => {
  const location = { lat: 40.31063, lng: 23.065669 };
  const phone = '+306998469136';
  const email = 'vluxurysuitespefkochori@gmail.com';
  const { t, i18n } = useTranslation();
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
            }}
            color="whitesmoke"
          >
            {phone}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                xs: 19,
                sm: 24,
              },
            }}
            color="whitesmoke"
          >
            {email}
          </Typography>
        </ContactInfo>
        <GoogleMapComponent location={location} />
      </ContactsBox>
    </ContactsContainer>
  );
};

export default Contacts;
