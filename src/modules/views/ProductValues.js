import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { useTranslation } from "react-i18next";

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const values = {
"en": {
    1: "Exceptional Comfort",
    2:"At S Princess Suite, we are dedicated to providing an exceptional level of comfort to our guests. We believe that a comfortable stay is the foundation of a memorable experience.",
    3: "Personalized Service", 4: "Our commitment to personalized service sets us apart. We understand that each guest is unique, and we strive to cater to your individual needs and preferences. We are here to make your stay truly special.",
    5:"PRIME LOCATION", 6:"S Princess Suite is ideally situated just 20 meters from the Aegean Sea in Nea Kallikratia, Chalkidiki. Our prime waterfront location offers direct access to pristine beaches, stunning sunsets, and various water activities, ensuring an unforgettable coastal getaway"
  },
  "el": {
      1: "Εξαιρετική Άνεση",
      2: "Στο S Princess Suite, αφιερώνουμε μερικά μόνο για να προσφέρουμε ένα εξαιρετικό επίπεδο άνεσης στους επισκέπτες μας. Πιστεύουμε ότι η άνετη διαμονή είναι η βάση μιας αξέχαστης εμπειρίας.",
      3: "Εξατομικευμένη Εξυπηρέτηση",
      4: "Η δέσμευσή μας στην εξατομικευμένη εξυπηρέτηση μας κάνει να ξεχωρίζουμε. Κατανοούμε ότι κάθε επισκέπτης είναι μοναδικός, και προσπαθούμε να ικανοποιήσουμε τις ατομικές σας ανάγκες και προτιμήσεις. Είμαστε εδώ για να κάνουμε τη διαμονή σας πραγματικά ξεχωριστή.",
      5: "ΕΠΙΛΕΓΜΕΝΗ ΤΟΠΟΘΕΣΙΑ",
      6: "Το S Princess Suite είναι ιδανικά τοποθετημένο μόλις 20 μέτρα από τον Αιγαίο Πέλαγος στη Νέα Καλλικράτεια, Χαλκιδική. Η προνομιακή τοποθεσία μας στην παραλία προσφέρει άμεση πρόσβαση σε παρθένες παραλίες, εκπληκτικά ηλιοβασιλέματα και διάφορες δραστηριότητες στο νερό, εξασφαλίζοντας μια αξέχαστη ακτογραμμή απόδραση."
  }
}

function ProductValues ()
{
  const { i18n } = useTranslation();
  const lang = i18n.language
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
              {values[lang]['1']}
              </Typography>
              <Typography variant="h5" fontSize={16}>
              {values[lang]['2']}
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
              {values[lang]['3']}
              </Typography>
              <Typography variant="h5" fontSize={16}>
              {values[lang]['4']}
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
              {values[lang]['5']}
              </Typography>
              <Typography variant="h5" fontSize={16} >
              {values[lang]['6']}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;