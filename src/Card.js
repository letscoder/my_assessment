// Card.js
import React from 'react';
import './Card.css';

const Card = ({ id, name, avatar, title }) => {
  return (
    <div className="card">
      <img src={avatar} alt={`Avatar of ${name}`} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{id}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
