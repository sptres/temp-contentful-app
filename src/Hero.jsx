import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            officiis deleniti, laborum iste quam repellendus fuga, minus vero
            non exercitationem perspiciatis neque asperiores dolor similique
            dolore rerum architecto ullam laudantium.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
