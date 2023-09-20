import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';


function Copyright() {
  return (
    <React.Fragment>
      {'© NataliaKi '} 
      <Link color="secondary.dark" href="https://lambent-bubblegum-7bc6b5.netlify.app">
        S.Luxury Princess Suite 
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

//const iconStyle = {
//  width: 48,
//  height: 48,
//  display: 'flex',
//  justifyContent: 'center',
//  alignItems: 'center',
//  backgroundColor: 'warning.main',
//  mr: 1,
//  '&:hover': {
//    bgcolor: 'warning.dark',
//  },
//};


function AppFooter() {
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
    <Container sx={{ my: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Grid item>
                <Copyright />
            </Grid>
      </Container>
    </Typography>
  );
}

export default AppFooter