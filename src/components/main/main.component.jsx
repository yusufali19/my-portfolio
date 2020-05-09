import React from 'react';

import Logo from '../../img/developer.svg';
import './main.styles.scss';

const Main = () => {
  return (
    <main>
      <div className="intro-container">
        <h3>Hey, I'm</h3>
        <div className="name">
          <h1>Yusuf</h1>
          <h2>Ali</h2>
        </div>
        <h4>A Front End Dev</h4>
      </div>
      <div className="image-container">
        <img alt="dev" src={Logo} />
      </div>
    </main>
  );
};

export default Main;
