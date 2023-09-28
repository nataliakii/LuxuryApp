/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Typography from '../components/Typography';
import ApartmentModal from './ApartmentModal';
import {
    ButtonBase,
    Box,
    Container
} from '@mui/material';
import InitialData from "../../InitialData";
import { useTranslation } from "react-i18next";

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
} ) );

const widths = ['40%', '20%', '40%', '38%', '38%', '24%', '40%', '20%', '40%'];

const mapApartmentsToImages = (apartments) => {
    return apartments.map((apartment, index) => ({
      url: apartment.photos[0], 
      title: apartment.name, 
      width: widths[index],
      id: apartment.id, 
    }));
  };



export default function ProductCategories ()
{
    const [ selectedApartmentId, setSelectedApartmentId ] = useState( null );
  const images = mapApartmentsToImages( InitialData );
  const { t, i18n } = useTranslation();

    const openApartmentModal = (apartmentId) => {
      setSelectedApartmentId(apartmentId);
    };
  
    const closeApartmentModal = () => {
      setSelectedApartmentId(null);
    };
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
      {t("productCategories.text")}
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            } }
            onClick={() => openApartmentModal(image.id)} 
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
                <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
          </Box>
          {selectedApartmentId && (
        <ApartmentModal
          apartmentId={selectedApartmentId}
          onClose={closeApartmentModal}
        />
      )}
    </Container>
  );
}