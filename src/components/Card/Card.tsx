import React from 'react';
import Card from 'react-bootstrap/Card';
import './Card.css';
import { AiFillStar } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

type Card = {
  id?: number;
  name?: string;
  src?: string;
  skill?: number;
  value?: boolean;
  index: number;
};

const CardComponent: React.FC<Card> = ({ name, src, skill, value }) => {
  const starQuantity = Array(skill);
  const starQuantityResult = starQuantity.fill('value').map((x, index) => index);
  const { t } = useTranslation();
  return (
    <div className="CardFather">
      {!value ? (
        <div>
          <img className="imgs" src={src} alt={name} />
        </div>
      ) : null}
      <p>{!value ? name : null}</p>
      {value ? (
        <p style={{ textAlign: 'center' }}>
          {t('carrousel.info.certificates')} {name}
        </p>
      ) : null}
      {value ? (
        <a className="linkDownload" href={src} download target="_blank" rel="noreferrer">
          Download
        </a>
      ) : null}
      {!value ? (
        <div>
          {starQuantityResult.map((s) => (
            <AiFillStar key={s} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CardComponent;
