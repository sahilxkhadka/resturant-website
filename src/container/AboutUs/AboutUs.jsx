import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id = "about">
    <div className="app__aboutus-overlay flex__center">
      <img src= {images.aboutuscover} alt="sk letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src= {images.spoon} alt="about spoon" className='spoon_img' />
        <p className="p__opensans">We are a service based HORECA business facilitating you with pleasing ambience and great hospitality. We also take proper care of health and sanity within our services.</p>
        <button className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src= {images.spoon} alt="about spoon" className='spoon_img'/>
        <p className="p__opensans">Started back in 2010, we were located in a small space with very minimum number of accomodation capacity and limited resources. Since then we never looked back.</p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
