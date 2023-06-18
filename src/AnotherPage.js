// AnotherPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './AnotherPage.css';

const AnotherPage = ({ cardsData }) => {
  const { id } = useParams();
  const card = cardsData.find(card => card.id === parseInt(id));

  if (!card) {
    return <p>Card not found.</p>;
  }

  return (
    <div>
      <h2>{card.name}</h2>
      <p>{card.title}</p>
      <img src={card.avatar} alt={`Avatar of ${card.name}`} />
    </div>
  );
};

export default AnotherPage;
