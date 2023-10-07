import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import treatsImage from '../../assets/treats.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Treatos by Toffee</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={treatsImage} alt='Dog looking at treats' />
      </div>
    </>
  );
};

export default Header;