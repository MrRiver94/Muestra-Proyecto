import React from "react";
import PropTypes from "prop-types";
import HeaderBar from "../HeaderNavbar/HeaderNavBar";


function Header({ onFilterChange, showCart }) {
  const handleInputChange = (nuevoFiltro) => {
    onFilterChange(nuevoFiltro);
  };

  return (
    <header>
      <div className="header-container">
        <HeaderBar onFilterChange={handleInputChange} showCart={showCart} />
      </div>
    </header>
  );
}

// Validaciones de propiedades para asegurar que onFilterChange sea una función
Header.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  showCart: PropTypes.func.isRequired, // Asegura que showCart sea una función requerida
};

export default Header;
