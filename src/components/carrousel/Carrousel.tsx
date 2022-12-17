import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import getAllTecnicSkills from '../../service/imgs/getAllImagesOnArray';
import CardComponent from '../Card/Card';
import './Carrousel.css';

const CarouselComponent = () => {
  const images = getAllTecnicSkills();
  return (
    <section id="habilidades/1.1" className="fatherTechniqueSkills">
      <h4>Habilidades Técnicas</h4>
      <div className="containerImgs">
        {images.map((img) => (
          <CardComponent key={img.name} {...img} />
        ))}
      </div>
    </section>
  );
};

export default CarouselComponent;
