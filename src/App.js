// App.js
import React from 'react';
import ParallaxImageSlider from './Components/ImageSlider';
import './App.css';

const App = () => {
  const imageUrl = 'https://placekitten.com/1200/800'; // Replace with your image URL

  return (
    <div className="App">
      <ParallaxImageSlider image={imageUrl} parallaxIntensity={0.2} transitionSpeed={800} />
    </div>
  );
};

export default App;
