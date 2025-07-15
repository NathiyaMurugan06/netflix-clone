// src/components/TrendingSection.jsx
import React from 'react';
import { trending } from '../data/movies';
import MovieCard from './MovieCard';
import './TrendingSection.css';

const TrendingSection = () => {
  return (
    <section className="trending-section">
      <h2 className="trending-heading">🔥 Trending Now</h2>
      <div className="trending-container">
        {trending.map((movie, index) => (
          <MovieCard key={index} title={movie.title} img={movie.img} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
