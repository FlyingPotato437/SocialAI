// pages/index.js or pages/index.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import HeroPage from '../components/HeroPage';
import TextOptimizer from '../components/TextOptimizer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroPage />
      <TextOptimizer />
      {/* Add more components or content here as needed */}
    </div>
  );
};

export default Home;
