import React, { useState } from 'react';
import { Grid, Box, Button, Link, Container, Typography } from '@mui/material';

import ProductLogo from '../components/ProductLogo';
import Presentation from './Presentation';

function AppFooter() {
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
    <Typography
      component="footer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'secondary.light',
      }}
    >
      <Container
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ProductLogo setIsModalOpen={setIsModalOpen} />
        {isModalOpen && (
          <PModal
            open={isModalOpen}
            onClose={closeModal}
            closeModal={closeModal}
          />
        )}
        <Grid item>
          <Copyright />
        </Grid>
      </Container>
    </Typography>
  );
}

export default AppFooter;

function PModal({ open, onClose, closeModal }) {
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
    alignItems: 'center',
    textAlign: 'end',
  };

  return (
    <Box style={modalStyles}>
      <Box style={contentStyles}>
        <Presentation closeModal={closeModal} />
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </Box>
    </Box>
  );
}

function Copyright() {
  return (
    <>
      {new Date().getFullYear()} All rights reserved.
      <br />
      <p>
        Powered by{' '}
        <Link
          color="secondary.main"
          sx={{ lineHeight: '1rem' }}
          href="https://www.linkedin.com/in/natalia-kirejeva/"
        >
          {' '}
          <span>{'© NataliaKi '}</span>
        </Link>
      </p>
    </>
  );
}
