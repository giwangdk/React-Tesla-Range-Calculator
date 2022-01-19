import React from 'react';
import './Header.css'
import Logo from '../../assets/logo.svg'

const Header = () => {
    return <div className="header">
      <img src={Logo} alt="Tesla" />
  </div>;
};

export default Header;
