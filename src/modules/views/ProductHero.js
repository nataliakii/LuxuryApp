import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { useTranslation } from "react-i18next";
const backgroundImage =
  '/b2.jpg';

export default function ProductHero ()
{
  const { t, i18n } = useTranslation();
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
        component="a"
        sx={{ minWidth: 200 }}
      >
      { t( "productHero.button" ) }
      </Button>
      {/*<Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
      
              Here
      </Typography>*/}
    </ProductHeroLayout>
  );
}
