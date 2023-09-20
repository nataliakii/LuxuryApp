import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  '/b2.jpg';

export default function ProductHero() {
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
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Unleash Your Inner Royalty
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
Suiting All Tastes and Preferences
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        sx={{ minWidth: 200 }}
      >
        Some Info 
      </Button>
      {/*<Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
      
              Here
      </Typography>*/}
    </ProductHeroLayout>
  );
}
