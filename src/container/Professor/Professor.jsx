import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Professor.css';

const Professor = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.pleaseWait} alt="professor_image" />
    </div>
    <div className="app__wrapper_info">
      {/*<SubHeading title="Chef's word" />*/}
      <h1 className="headtext__cormorant">Sato Seisho</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          {/*<img src={images.quote} alt="quote_image" />*/}
          <p className="p__opensans">準備中 しばらくお待ちください</p>
        </div>
        {/*<p className="p__opensans">//</p>*/}
      </div>

      <div className="app__chef-sign">
        <p>Professor</p>
        {/*<p className="p__opensans">//</p>*/}
        {/*<img src={images.sign} alt="sign_image" />*/}
      </div>
    </div>
  </div>
);

export default Professor;