import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTranslation } from 'react-i18next';
import Typography from '../components/Typography';

function ProductSmokingHero() {
  const { t } = useTranslation();
  return (
    <Container
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 9,
      }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
        component="a"
        href="http://vluxurysuites.gr/"
        target="_blank"
        rel="perfochory v luxury suite"
      >
        <Typography
          variant="h4"
          component="span"
          sx={{ alignItems: 'center', justifyContent: 'center' }}
        >
          {t('smoking.text1')}
        </Typography>
      </Button>
      <Typography
        variant="h5"
        component="a"
        target="_blank"
        href="http://vluxurysuites.gr/"
        sx={{
          my: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {t('smoking.text2')}
      </Typography>
      <Box
        component="img"
        src="/icons/productBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default ProductSmokingHero;
