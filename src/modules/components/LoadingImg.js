import React, { useState, useEffect } from 'react';
import { CircularProgress, LinearProgress } from '@mui/material/';
import { styled, keyframes } from '@mui/system';

const pulsate = keyframes`
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const AnimatedLogo = styled('img')({
  width: '100px',
  borderRadius: '50px',
  animation: `${pulsate} 1s infinite alternate`,
});

function LoadingImg() {
  //   const [deg, setDeg] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setDeg((prev) => (prev + 5) % 360);
  //     }, 10);

  //     return () => clearInterval(interval);
  //   }, []);

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
      <AnimatedLogo style={{ transform: `scale(0.5)` }} src={logo} alt="logo" />
    </div>
  );
}

export default LoadingImg;
