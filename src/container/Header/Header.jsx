import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { IconContext } from 'react-icons'
import { SiDocker } from "react-icons/si";
import { SiKaggle } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiBinance } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { SiEthereum } from "react-icons/si";
import { SiJulia } from "react-icons/si";
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/*<SubHeading title="Chase the new flavour" />*/}
      <h1 className="app__header-h1"> Machine learning Fintech Web</h1>
      <p className="p__opensans" style={{ margin: '2rem 0', color: 'black' }}></p>
      <button type="button" className="custom__button">Explore</button>
    </div>

    <div className="app__wrapper_img">
      {/*<img src={images.sigmoid} alt="header_img" />*/}
    </div>

    <IconContext.Provider value={{ color: '#ccc', size: '75px'}}>
      <h1 className="text-6xl p-10">
        docker<SiDocker />
        kaggle<SiKaggle />
        github<SiGithub />
        python<SiPython />
        binance<SiBinance />
        aws<SiAmazonaws />
        tensorflow<SiTensorflow />
        javascript<SiJavascript />
        visualstudio<SiVisualstudio />
        linux<SiLinux />
        ethereum<SiEthereum />
        julia<SiJulia />
      </h1>
    </IconContext.Provider>
  </div>
);

export default Header;