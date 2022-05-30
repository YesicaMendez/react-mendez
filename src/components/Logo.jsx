import React from 'react';
import LogoImagen from '../assets/img/logo.png';

function Logo() {
  return (
    <img src={LogoImagen} alt="logo" style={{width: 50 + 'px'}}/>
  )
}

export default Logo;