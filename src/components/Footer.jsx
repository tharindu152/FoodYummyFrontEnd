import React from 'react';
import logo from '../assets/FoodYummy.png';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='Footer'>
        <div className='brand container'>
          <img src={logo} alt='logo' />
          <p>
            We offer you a wide variety of easy-to-follow recipes for all skill
            levels, including meal ideas for special diets.
          </p>
        </div>
        <div className='about container'>
          <div className='title'>
            <h3>About Us</h3>
          </div>
          <p>
            Our platform allows users to search for recipes by name, save their
            favorite recipes, and create custom recipe collections to share with
            friends and family.
          </p>
        </div>
        <div className='contact container'>
          <div className='title'>
            <h3>Contact Us</h3>
          </div>
          <p>+941231231231</p>
          <p>foodyummy@gmail.com</p>
          <p>@foodyummy</p>
          <p>412 Street, Ground Floor, Colombo</p>
          <h3>Socials</h3>
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/tharindu-thennakoon-b1a40b94'>
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/tharindu.thennakoon.397'>
                <FaFacebookF />
              </a>
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div className='lower__footer'>
        <h2>
          Copyright &copy; 2023 <span>Food Yummy</span>
        </h2>
      </div>
    </div>
  );
}

export default Footer;
