// src/components/MovieCard.jsx
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, img }) => {
  return (
    <div className="movie-card">
      <img src={img} alt={title} />
      <p className="movie-title">{title}</p>
    </div>
  );
};

export default MovieCard;
