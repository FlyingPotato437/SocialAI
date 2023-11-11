// components/HeroPage.jsx
import React from 'react';
import Image from 'next/image';
import heroBackground from '../public/hero-background.jpg'; // Ensure you have a background image in your public folder

const HeroPage = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${heroBackground.src})` }}>
      <div className="backdrop-blur-sm backdrop-brightness-50 absolute inset-0 z-0"></div>
      <div className="z-10 p-5 text-center">
        <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
          Transform Your Social Media Strategy
        </h1>
        <p className="text-xl mb-8 drop-shadow">
          Leverage AI to create impactful content tailored for each social media platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="py-3 px-6 bg-primary-orange rounded-lg shadow-lg hover:bg-orange-600 transition duration-300">
            Start Optimizing
          </button>
          <button className="py-3 px-6 bg-transparent border-2 border-primary-orange rounded-lg shadow-lg hover:bg-primary-orange transition duration-300 text-primary-orange">
            Explore Features
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
