import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrendingSection from './components/TrendingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <TrendingSection />
      <Footer />
    </div>
  );
}

export default App;
