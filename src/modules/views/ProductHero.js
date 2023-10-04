/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Button from '../components/Button';
import Box from '@mui/material/Box';
import Typography from '../components/Typography';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Contacts from './Contacts'; 
import ProductHeroLayout from './ProductHeroLayout';
import { useTranslation } from "react-i18next";
const backgroundImage =
  '/b2.jpg';

export default function ProductHero ()
{
  const { t, i18n } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', 
        backgroundPosition: 'center',
      }}
    >
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="s luxury princess suite"
      />
      <Typography color="primary.dark" align="center" variant="h4" marked="center">
        { t( "productHero.slogan1" ) }
      </Typography>
      <Typography
        color="secondary.dark"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
      { t( "productHero.slogan2" ) }
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        onClick={openModal} 
        sx={{ minWidth: 200 }}
      >
        {t('productHero.button')}
      </Button>

      {isModalOpen && (
      <ContactsModal open={isModalOpen} onClose={closeModal} />
      )}
    </ProductHeroLayout>
  );
}

const ContactsModal = ({ open, onClose }) => {
  if (!open) return null;

  const modalStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9999,
  };

  const contentStyles = {
    backgroundColor: '#fff',
    padding: '0px',
    maxWidth: '100%',
    maxHeight: '100%',
    overflowY: 'auto',
  };

  return (
    <Box style={modalStyles} onClick={onClose}>
      <Box style={contentStyles}>
        <Contacts />
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </Box>
    </Box>
  );
};
