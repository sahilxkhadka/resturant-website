import React from 'react';

import './Newsletter.css';
import { SubHeading } from '..';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title  = "NewsLetter" />
      <h1 className="headtext__cormorant">Subscribe to our NewsLetter</h1>
      <p className="p__opensans">Never miss any updates</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type = "email" placeholder='Enter your email address' />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
