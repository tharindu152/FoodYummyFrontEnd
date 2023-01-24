import React from 'react';
// import { TitleStyles } from './ReusableStyles';

function NewsLetter() {
  return (
    <div className='Newsletter' id='newsletter'>
      <div className='NewsContainer'>
        <div className='title'>
          <h1>
            <span>Subscribe</span> Newsletter
          </h1>
          <p>
            Subscribe for our newsletter to stay up-to-date with the latest
            recipes, cooking tips, and special deals. Never miss a delicious
            recipe again by subscribing today!
          </p>
        </div>
      </div>
      <div className='container'>
        <form>
          <a className='btn' href='mailto:chanaka152@gmail.com'>
            Email and Subscribe
          </a>
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
