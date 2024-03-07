import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";

import { ThemeContext } from "../../context/ThemeContext";
import IconsList from "../IconList/IconList";
import { Link } from "react-router-dom";

function HeaderBar({ onFilterChange, showCart }) {
  
  const [textoFiltro, setTextoFiltro] = useState("");

  const handleInputChange = (event) => {
    const nuevoTexto = event.target.value;
    setTextoFiltro(nuevoTexto);
    onFilterChange(nuevoTexto);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#333",
  };

  const buttonStyles = {
    backgroundColor: theme === "dark" ? "#444" : "#f4f4f4",
    color: theme === "dark" ? "#fff" : "#333",
    border: "1px solid",
  };

  const handleClickCartIcon = () => {
    showCart(); // Cambia el estado para mostrar la sección del carrito
  };

  return (
    <>
      <div className="container" style={styles}>
        <div className="logo" style={styles}>
        <Link to="/">MiTienda</Link>
        </div>
        <div className="category">
          <ul>
            <li ><Link to="/ProfileSection">Productos</Link></li>
            <li><Link to="/banner">Banner</Link></li>
            <li><Link to="/products">Categorias</Link></li>
          </ul>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar Producto"
            value={textoFiltro}
            onChange={handleInputChange}
          />
        </div>
      
          <IconsList onclickCartIcon={handleClickCartIcon} />
          <div className="icon">
            <button style={buttonStyles} onClick={toggleTheme}>
              &#9899; {theme === "Light" ? "oscuro" : "claro"}
            </button>
          </div>
        </div>
      
    </>
  );
}

HeaderBar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  showCart: PropTypes.func.isRequired, // Se agrega la validación del prop showCart
};

export default HeaderBar;
