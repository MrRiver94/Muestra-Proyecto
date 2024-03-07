import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "../../context/CardContext";
import { ProductContext } from "../../context/Productcontext";

const ProductCard = ({ product, isNewProduct, onAddNewProduct }) => {
  const { addToCart } = useCart();

  const { deleteProduct, updateProduct } = useContext(ProductContext);

  const {
    id,
    title: initialTitle,
    price: initialPrice,
    description: initialDescription,
    image,
    category,
    price,
    description,
    rating,
  } = product;

  const [editedProduct, setEditedProduct] = useState({
    title: initialTitle,
    price: initialPrice,
    description: initialDescription,
  });

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleDeleteProduct = () => {
    deleteProduct(product.id);
  };

  const handleUpdateProduct = () => {
    updateProduct(id, editedProduct);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveNewProduct = () => {
    onAddNewProduct(editedProduct);
    setEditedProduct({
      title: "",
      price: "",
      description: "",
    });
  };

  return (
    <div className="card-container" key={id}>
      <div className="card-header">
        <div className="card-image">
          <img src={image} alt={initialTitle} />
        </div>
        <div className="card-header-info">
          <input
            type="text"
            name="title"
            value={editedProduct.title}
            onChange={handleChange}
          />
          <p className="card-category">{category}</p>
        </div>
      </div>
      <div className="card-description">
        <p className="card-price">${price}</p>
        <input
          type="number"
          name="price"
          value={editedProduct.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={editedProduct.description}
          onChange={handleChange}
        />
        <p className="card-description">{description}</p>
        <div className="card-rating">
          {rating && (
            <>
              <p className="card-rate">Rating: {rating.rate}</p>
              <p className="card-count">Count: {rating.count}</p>
            </>
          )}
        </div>
      </div>
      <div>
        {isNewProduct ? (
          <button onClick={handleSaveNewProduct}>Guardar nuevo producto</button>
        ) : (
          <>
            <button onClick={handleAddToCart}>Agregar al carro</button>
            <button onClick={handleDeleteProduct}>Eliminar</button>
            <button onClick={handleUpdateProduct}>Modificar</button>
          </>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  isNewProduct: PropTypes.bool, // Indica si es un nuevo producto o no
  onAddNewProduct: PropTypes.func, // Función para agregar un nuevo producto
};

export default ProductCard;
