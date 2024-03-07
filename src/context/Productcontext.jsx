import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import {v4 as uuidv4} from "uuid";

const API_URL = "http://localhost:3000/products";

// Creamos un nuevo contexto
export const ProductContext = createContext();

// Creamos un componente proveedor que envolverá nuestra aplicación
export const ProductProvider = ({ children }) => {
  // Estado para almacenar la lista de productos
  const [products, setProducts] = useState([]);
  // Estado para almacenar los cambios temporales de producto
  const [tempProductChanges, setTempProductChanges] = useState({});
  // Estado para controlar la visibilidad del modal de agregar producto
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  // Cargar los productos desde la API al inicio
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  // Función para agregar un producto
  const addProduct = (newProduct) => {
    const newProductWithId = {...newProduct, id: uuidv4()}
    axios.post(API_URL, newProductWithId).then((response) => {
      // Si la solicitud tiene éxito, agregamos el producto a la lista local
      setProducts([...products, response.data]);
      setIsAddProductModalOpen(false); // Cerrar el modal después de agregar el producto
    });
  };

  // Función para eliminar un producto
  const deleteProduct = (productId) => {
    axios.delete(`${API_URL}/${productId}`).then(() => {
      // Si la solicitud tiene éxito, eliminamos el producto de la lista local
      setProducts(products.filter(product => product.id !== productId));
    });
  };

  // Función para modificar un producto
  const updateProduct = (productId, newData) => {
    axios.put(`${API_URL}/${productId}`, newData).then(() => {
      // Si la solicitud tiene éxito, actualizamos el producto en la lista local
      setProducts(products.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            ...newData
          };
        }
        return product;
      }));
    });
  };

  return (
    <ProductContext.Provider value={{ 
      products, 
      addProduct, 
      deleteProduct, 
      updateProduct, 
      tempProductChanges, 
      setTempProductChanges, 
      isAddProductModalOpen, 
      setIsAddProductModalOpen 
    }}>
      {children}
    </ProductContext.Provider>
  );
};
