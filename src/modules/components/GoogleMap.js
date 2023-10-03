import React from 'react';
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import Button from '@mui/material/Button';
import DirectionsIcon from '@mui/icons-material/Directions';

const GoogleMapComponent = ({ location }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '300px',
  };

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  const icon = {
    url: 'icons/crown.png', 
    scaledSize: new window.google.maps.Size(40, 40),
  };

  const directionsService = new window.google.maps.DirectionsService();
  const directionsRenderer = new window.google.maps.DirectionsRenderer();

  const directionsOptions = {
    origin: center,
    destination: 'N. Katsirma 7, Nea Kallikratia 63080 Greece',
    travelMode: 'DRIVING', 
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <Marker position={center} icon={icon} />
        <DirectionsService
          options={directionsOptions}
          callback={(result, status) => {
            if (status === 'OK') {
              directionsRenderer.setDirections(result);
            }
          }}
        />
        <DirectionsRenderer
          directions={directionsRenderer.directions}
        />

        <div
          style={{
            position: 'absolute',
            top: '3%',
            left: '5%',
            zIndex: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{p:2}}
            color="secondary" 
            startIcon={<DirectionsIcon />}
            href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </Button>
        </div>
      </GoogleMap>
    </div>
  );
};

export default GoogleMapComponent;
