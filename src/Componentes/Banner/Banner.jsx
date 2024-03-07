import React from 'react';
import './Banner.css';

const Banner = ({ name }) => {
  return (
    <div className="banner-container">
      <p>¡Hola {name}! Tenemos un descuento de hasta un 20% en tu primera compra.</p>
    </div>
  );
};

export default Banner;
