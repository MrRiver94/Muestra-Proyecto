import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/CardContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ProductProvider } from './context/Productcontext.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ProductProvider> 
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <AuthProvider>
           <App/>
          </AuthProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </ProductProvider> 
  </React.StrictMode>,
)

