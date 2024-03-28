import React, { useState, useEffect } from 'react';
import Animation from '../components/animation/animation'; // Import your Lottie animation component
import './Loading.css'; // Ensure this includes your fade-out animation

const Loading = ({ onLoaded }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Trigger the fade-out effect before the loading finishes
    const timer = setTimeout(() => setFade(true), 2000);

    // Callback to parent component to indicate loading is complete
    const fadeTimer = setTimeout(() => onLoaded(), 2250); // Adjust timing as necessary

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, [onLoaded]);

  return (
    <div className={`loading-container ${fade ? 'fade-out' : ''}`}>
      <Animation />
    </div>
  );
};

export default Loading;
