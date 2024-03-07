import React, { useContext, useState, useRef, useEffect } from "react";
import { ProductContext } from "../../context/Productcontext";

import ProductCard from "../../Componentes/ProductCard/Card"; // Importar el componente ProductCard

const AddProductButton = () => {
  const { addProduct } = useContext(ProductContext);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: Math.floor(Math.random() * 1000),
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: { rate: 0, count: 0 }
  });
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }
    // Agregar el evento para cerrar la modal al hacer clic fuera de ella
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProduct = () => {
    // Agregar el nuevo producto al estado y enviarlo al ProductSection
    addProduct(newProduct);
    setNewProduct({
      id: Math.floor(Math.random() * 1000),
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: { rate: 0, count: 0 }
    });
    setIsModalOpen(false); // Cerrar la modal después de agregar el producto
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: name === 'price' ? parseFloat(value) : value // Convertir el precio a un número
    }));
  };

  return (
    <div>
      <button onClick={handleOpenModal} style={styles.addButton}>Añadir Producto</button>
      {isModalOpen && (
        <div style={styles.modalBackground}>
          <div ref={modalRef} style={styles.modalContent}>
            <ProductCard
              product={newProduct}
              onChange={handleChange}
              onSave={handleSaveProduct}
              onCancel={handleCloseModal}
            />
            <button onClick={handleSaveProduct} style={styles.saveButton}>Guardar</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  addButton: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: "1000",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  modalBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  saveButton: {
    marginTop: "10px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};

export default AddProductButton;
