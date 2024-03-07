import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Componentes/Header/Header';
import Layout from './Componentes/Layout/Layout';
import ProductSection from './Componentes/ProductSection/ProductSection';
import Products from './Componentes/ProductSection/Products';
import ProductDetails from './Componentes/ProductSection/ProductDetails';
import CartSection from './CardSection/CardSection';
import Login from './Componentes/Login/LoginForm';
import NotFound from './Componentes/NotFound/NotFound';
import ProtectedRoute from './Componentes/Login/ProtectedRoute';
import Entrada from './Componentes/Entrada/Entrada';
import Banner from './Componentes/Banner/Banner';
import AddProductButton from './Componentes/AddProduct/addProduct';

function App() {
  const [filtro, setFiltro] = useState('');
  const [, setShowCartSection] = useState(false);

  const handleshowCart = () => {
    setShowCartSection(true);
  };

  const handleShowProduts = () => {
    setShowCartSection(false);
  };

  return (
    <>
      <BrowserRouter>
        <Header
          onFilterChange={setFiltro}
          showCart={handleshowCart}
          showProducts={handleShowProduts}
        />

        <Layout>
          {/* Añade el componente AddProductButton dentro del Layout */}
          <AddProductButton onClick={() => console.log('Añadir producto')} />

          <Routes>
            <Route path="/" element={<Entrada />} />
            <Route path="ProfileSection" element={<ProductSection filtro={filtro} />} />
            <Route path="carrito" element={<ProtectedRoute><CartSection filtro={filtro} /></ProtectedRoute>} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="perfil" element={<Login />} />
            <Route path="banner" element={<Banner />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App;
