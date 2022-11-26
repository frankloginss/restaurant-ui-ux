import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Warm and friendly atmosphere for each type of group, from families to corporate groups. .</p>
        </div>
        <p className="p__opensans"> Every trip to Garnish is intriguing, a team of friendly and hospitable staff takes care of the guests, concentrating on making sure that guests enjoy their time and experience the unique gastronomic adventure in the style of "Garnish".  </p>
      </div>

      <div className="app__chef-sign">
        <p>Francis O.</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.signature} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
