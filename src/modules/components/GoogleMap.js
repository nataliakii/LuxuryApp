import React, { useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};


const GoogleMapComponent = ({location}) => {
  const [map, setMap] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB0xtT-PgDUe0Q3-PFFMnBxCLjXoTWUY5Q",
  });

  const onLoad = (map) => {
    setMap(map);
  };

  if (loadError) {
    return <div>Error loading Google Maps API: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={17}
      onLoad={onLoad}
    >
      {map && (
        <Marker
          position={location}
          icon={{
            url: "/icons/crown.png",
            scaledSize: new window.google.maps.Size(40, 40),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(20, 40),
          }}
        />
      )}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
