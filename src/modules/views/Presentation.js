import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function PresentationScroller({ closeModal }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [currentSlide, setCurrentSlide] = useState(1);
  const numSlides = 10;

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const interval = setInterval(() => {
      setCurrentSlide((current) => (current === numSlides ? 1 : current + 1));
    }, 7000);

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [numSlides, closeModal]);

  const nextSlide = () => {
    setCurrentSlide((current) => (current === numSlides ? 1 : current + 1));
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
      <button
        type="button"
        onClick={nextSlide}
        onKeyDown={(e) => e.key === 'Enter' && nextSlide()}
        tabIndex={0}
        style={{
          border: 'none',
          padding: 0,
          background: 'none',
          cursor: 'pointer',
        }}
      >
        <img
          alt={currentSlide}
          src={`slides/${lang}/${currentSlide}.jpeg`}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </button>
    </div>
  );
}
