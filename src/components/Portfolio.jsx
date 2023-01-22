import React from 'react';
import background from '../assets/portfolio.jpg';

function Portfolio() {
  return (
    <div className='PortSection' id='portfolio'>
      <div className='background'>
        <img src={background} alt='background' />
      </div>
      <div className='content'>
        <h1>Enjoy your stay!</h1>
        <h2>
          Thank you for staying with our recipe website, where we offer a wide
          variety of delicious and easy-to-follow recipes for all occasions.
          Whether you're a beginner cook or a seasoned pro, you'll find
          something to inspire your next meal.
        </h2>
      </div>
    </div>
  );
}

export default Portfolio;
