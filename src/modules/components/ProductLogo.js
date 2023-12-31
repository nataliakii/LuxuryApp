import React from 'react';
import { ButtonBase, Grid } from '@mui/material';

export default function ProductLogo({ setIsModalOpen }) {
  const avatar = '/bbqbw.png';

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ width: '100%', marginBottom: 16, marginTop: 6 }}
    >
      <ButtonBase disableRipple onClick={() => setIsModalOpen(true)}>
        <img width="120px" alt="Logo_BBQ" src={avatar} />
      </ButtonBase>
    </Grid>
  );
}
