import React from 'react';
import hero from '../assets/hero.jpg';
import heroDesign from '../assets/HeroDesign.png';

function Hero() {
  return (
    <div className='Section' id='home'>
      <div className='background'>
        <img src={hero} />
      </div>
      <div className='content'>
        <div className='sale'>
          <img src={heroDesign} />
          <h1>Discover Create Update Cook</h1>
        </div>
        <div className='info'>
          <h2>Hey Foodie</h2>
          <em>
            We offer you a wide variety of easy-to-follow recipes for all skill
            levels, including meal ideas for special diets.
          </em>
          <ul>
            <li>
              <a href='#search'>SEARCH NOW</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
