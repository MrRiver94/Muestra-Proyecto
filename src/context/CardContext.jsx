import React, { createContext, useContext, useState } from 'react';

// Creamos un contexto para manejar el estado global del carro
const CartContext = createContext();

// Componente que proporciona el contexto y maneja el estado del carro
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para añadir un producto al carro
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Función para calcular el precio total del carro
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del carro
export const useCart = () => useContext(CartContext);
