import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import getAllTecnicSkills from '../../service/imgs/getAllImagesOnArray';
import CardComponent from '../Card/Card';
import './Carrousel.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  const images = getAllTecnicSkills();
  return (
    <>
      <div className="carrouselColor">
        <div className="textSkill navColor">Habilidades Técnicas</div>
        <section id="habilidades/1.1">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            keyBoardControl={true}
            customTransition="transition 0.5 cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            transitionDuration={100}
            containerClass="react-multi-carousel-list"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass="custom-dot-list-style"
            focusOnSelect={false}
            itemClass="carousel-item-padding-40-px">
            {images.map((img, index) => (
              <CardComponent {...img} key={index} />
            ))}
          </Carousel>
        </section>
      </div>
      ;
    </>
  );
};

export default CarouselComponent;
