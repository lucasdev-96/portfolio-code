import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';
import { AiFillStar } from 'react-icons/ai';

type Card = {
  id: number;
  name: string;
  src: string;
  skill: number;
};

const CardComponent: React.FC<Card> = ({ name, src, skill, id }) => {
  const starQuantity = Array(skill);
  const starQuantityResult = starQuantity.fill('value').map((x, index) => index);
  return (
    <div className="CardFather">
      <div>
        <img className="imgs" src={src} alt={name} />
      </div>
      <p>{name}</p>
      <div>
        {starQuantityResult.map((s) => (
          <AiFillStar key={s} />
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
