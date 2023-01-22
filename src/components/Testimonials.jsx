import React, { useState } from 'react';
import pabilis from '../assets/pabilis.jpg';
import anoma from '../assets/anoma.jpg';
import ramsey from '../assets/ramsey.jpg';
import Carousel from 'react-bootstrap/Carousel';

// import { imageZoomEffect, TitleStyles } from './ReusableStyles';

function Testimonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='Testimonials' id='testimonials'>
      <div className='container'>
        <div className='title'>
          <h1>
            <span>Our</span> top clients
          </h1>
        </div>
        <div className='testimonials'>
          <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
            <Carousel.Item>
              <div className='testimonial'>
                <div className='image'>
                  <img src={pabilis} alt='' />
                </div>
                <p>
                  "I've been using this recipe website for months and I'm
                  constantly impressed with the variety of recipes available.
                  The instructions are clear and easy to follow, and the end
                  results are always delicious."
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='testimonial'>
                <div className='image'>
                  <img src={anoma} alt='' />
                </div>
                <p>
                  "I'm a busy mom and this recipe website has been a lifesaver
                  for me. The meals are quick and easy to make, but still taste
                  amazing. I highly recommend it to anyone looking for meal
                  ideas."
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='testimonial'>
                <div className='image'>
                  <img src={ramsey} alt='' />
                </div>
                <p>
                  "I'm not a great cook, but this recipe website makes it easy
                  for me to impress my friends and family with delicious meals.
                  I'm so glad I found this site!"
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
