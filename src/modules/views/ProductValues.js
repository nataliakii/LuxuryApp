import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/icons/comfort.png"
                alt="comfort"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Exceptional Comfort
              </Typography>
              <Typography variant="h5" fontSize={16}>
                {
                  'At S Princess Suite, we are dedicated to providing an exceptional level of comfort to our guests. '
                }

                {
                  'We believe that a comfortable stay is the foundation of a memorable experience.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/icons/service.png"
                alt="personilised service"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Personalized Service
              </Typography>
              <Typography variant="h5" fontSize={16}>
                {
                  ' Our commitment to personalized service sets us apart. We understand that each guest is unique, and we strive to cater to your individual needs and preferences.  '
                }

                {'We are here to make your stay truly special.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/icons/location.png"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Prime Location
              </Typography>
              <Typography variant="h5" fontSize={16} >
                {'S Princess Suite is perfectly positioned just 20 meters from the sparkling Aegean Sea in the charming town of Nea Kallikratia, Chalkidiki. We understand that proximity to the sea is a top priority for many travelers. Enjoy direct and convenient access to pristine beaches, breathtaking sunsets, and water activities right at your doorstep. Our prime waterfront location sets the stage for an unforgettable coastal getaway. '}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;