import React from "react";
import { useCart } from "../context/CardContext";
import "./CardSection.css";

const CartSection = () => {
    const { cartItems, clearCart } = useCart();

    const groupedCartItems = cartItems.reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = { ...item, count: 1 };
        } else {
            acc[item.id].count++;
        }
        return acc;
    }, {});

    const uniqueCartItems = Object.values(groupedCartItems);

    const totalPrice = uniqueCartItems.reduce(
        (acc, item) => acc + item.price * item.count, 0
    );

    const handleCheckout = () => {
        // Aquí puedes añadir la lógica para procesar el pago o cualquier acción relacionada con la compra
        alert("Gracias por tu compra!");
    };

    const handleClearCart = () => {
        clearCart(); // Limpia el carrito eliminando todos los elementos
    };

    return (
        <div className="cart-container">
            <h2>Tu Carrito de la Compra</h2>
            {uniqueCartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                        <img src={item.image} alt={item.title} />
                        <p className="item-count">{item.count}</p>
                    </div>
                    <div className="cart-item-details">
                        <p>{item.title}</p>
                        <p>Precio por unidad: ${item.price.toFixed(2)}</p>
                        <p>Precio total: ${(item.price * item.count).toFixed(2)}</p>
                    </div>
                </div>
            ))}
            <div className="total-price">
                <p>Total a pagar: ${totalPrice.toFixed(2)}</p>
            </div>
            <div className="cart-buttons">
                <button className="buy-button" onClick={handleCheckout}>Comprar</button>
                <button className="clear-button" onClick={handleClearCart}>Limpiar Carro</button>
            </div>
        </div>
    );
};

export default CartSection;
