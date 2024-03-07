import React from "react";
import { useParams } from "react-router-dom";
import "../ProductSection/ProductSection.css"

const ProductDetails = () => {

    const {productId} = useParams()
    return (
        <div>
            <h2>Detalles del Producto - {productId}</h2>
        </div>
    );
};

export default ProductDetails;