import React, { useContext } from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/Card";
import { ProductContext } from "../../context/Productcontext"; // Importamos el contexto

import "../ProductSection/ProductSection.css";

function ProductSection({ filtro }) {
  // Obtenemos los productos del contexto
  const { products } = useContext(ProductContext);

  // Filtramos los productos según el filtro
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="product-section">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} /> // Añadir key prop
      ))}
    </div>
  );
}

ProductSection.propTypes = {
  filtro: PropTypes.string.isRequired,
};

export default ProductSection;
