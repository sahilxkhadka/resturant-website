import React from 'react';

import './Chef.css';
import { SubHeading } from '../../components';
import {images} from "../../constants"

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src = {images.chef} alt = "chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading  title= "Chef's Word" />
      <h1 className="headtext__cormorant">What we Belive In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src= {images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere earum recusandae labore quisquam, errorblanditiis fugit amet dicta repud</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis magnam rem necessitatibus a at dolores?</p>
      </div>
      <div className="app__chef-sign">
        <p>Sahil Khadka</p>
        <p className="p__opensans">Chef and Fuunder</p>
        <img src= {images.sign} alt="signature" />
      </div>
    </div>

  </div>
);

export default Chef;
