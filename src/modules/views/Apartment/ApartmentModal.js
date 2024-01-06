// Assuming you are using fetch to load the JSON file
import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next';
import InitialData from '../../../InitialData';
import ApartmentCard from './ApartmentCard';

const fetchApartmentDataById = (apartmentId) => {
  const apartment = InitialData.find((apt) => apt.id === apartmentId);
  return apartment || null;
};

function ApartmentModal({ apartmentId, onClose }) {
  const [apartment, setApartment] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchedApartment = fetchApartmentDataById(apartmentId);
    setApartment(fetchedApartment);
  }, [apartmentId]);

  return (
    <div>
      <Dialog open={!!apartment} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle>{apartment ? apartment.longName : ''}</DialogTitle>
        <DialogContent>
          <ApartmentCard apartment={apartment} t={t} i18n={i18n} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            {t('apModal.close')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ApartmentModal;
