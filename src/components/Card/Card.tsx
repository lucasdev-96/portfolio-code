import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';

type Card = {
  name: string;
  src: string;
  skill: number;
};

const CardComponent: React.FC<Card> = ({ name, src, skill }) => {
  return (
    <div className="CardFather">
      <img src={src} alt={name} style={{ width: '200px' }} />
      <p>{name}</p>
    </div>
  );
};

export default CardComponent;
