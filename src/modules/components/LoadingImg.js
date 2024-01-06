import React, { useState, useEffect } from 'react';
import { CircularProgress, LinearProgress } from '@mui/material/';
import { styled } from '@mui/system';

const AnimatedLogo = styled('img')({
  width: '100px',
  borderRadius: '50px',
  animation: '$spin 2s infinite linear',
});

function LoadingImg() {
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeg((prev) => (prev + 5) % 360);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const logo = '/apple-touch-icon.png';
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <AnimatedLogo
        style={{ transform: `rotate(${deg}deg)` }}
        src={logo}
        alt="logo"
      />
    </div>
  );
}

export default LoadingImg;
