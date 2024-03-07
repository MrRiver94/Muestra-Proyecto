import React, { useState } from "react";
import data from "../../fakeapi/data.json"; // Importar datos desde el archivo data.json
import { Link } from "react-router-dom";
import { useCart } from "../../context/CardContext"; // Importar el contexto del carrito

const Products = () => {
    // Utilizar los datos importados del archivo data.json
    const products = data;

    // Estado para almacenar la información del producto seleccionado
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    // Contexto del carrito
    const { addToCart } = useCart();

    // Función para manejar el clic en un botón de producto
    const handleClick = (product) => {
        setSelectedProduct(product);
    };

    // Función para manejar el clic en el botón "Agregar al carro"
    const handleAddToCart = () => {
        if (selectedProduct) {
            addToCart(selectedProduct);
        }
    };

    return (
        <div>
            <h1>Products Page</h1>
            <ul>
                {products.map((product) => ( 
                    <li key={product.id}>
                        {/* Al hacer clic en el botón, se llama a handleClick y se pasa el producto */}
                        <button onClick={() => handleClick(product)}>{product.title}</button>
                    </li>
                ))}
            </ul>

            {/* Mostrar la información del producto seleccionado */}
            {selectedProduct && (
                 <div>
                    <h2>Product Details</h2>
                    <p>ID: {selectedProduct.id}</p>
                    <p>Title: {selectedProduct.title}</p>
                    <p>Price: {selectedProduct.price}</p>
                    <p>Description: {selectedProduct.description}</p>
                    <p>Category: {selectedProduct.category}</p>
                    <img src={selectedProduct.image} alt={selectedProduct.title} />
                    <p>Rating: {selectedProduct.rating.rate} (Votes: {selectedProduct.rating.count})</p>
                    <div>
                        <button onClick={handleAddToCart}>Agregar al carro</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
