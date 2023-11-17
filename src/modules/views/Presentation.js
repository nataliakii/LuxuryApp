import React, { useEffect, useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'react-i18next';

const LeftButton = styled(Button)({
  position: 'absolute',
  top: '50%',
  left: 0,
  transform: 'translateY(-50%)',
  border: 'none',
  cursor: 'pointer',
});

const RightButton = styled(Button)({
  position: 'absolute',
  top: '50%',
  right: 0,
  transform: 'translateY(-50%)',
  border: 'none',
  cursor: 'pointer',
});

export default function PresentationScroller() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [currentSlide, setCurrentSlide] = useState(1);
  const numSlides = 9;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % numSlides);
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  const prevSlide = () => {
    setCurrentSlide((current) => (current === 1 ? numSlides + 1 : current - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((current) => (current === 10 ? 1 : current + 1));
  };
  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '100%',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <LeftButton onClick={prevSlide}>
        <NavigateBeforeIcon
          style={{
            color: 'white',
            fontSize: 'large',
          }}
        />
      </LeftButton>
      <img
        alt={currentSlide}
        src={`slides/${lang}/${currentSlide}.jpeg`}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <RightButton onClick={nextSlide}>
        <NavigateNextIcon
          style={{
            color: 'white',
            fontSize: 'large',
          }}
        />
      </RightButton>
    </div>
  );
}
