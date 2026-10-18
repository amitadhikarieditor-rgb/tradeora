import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import HomePage from './landing_page/home/Home';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/Support.jsx';
import Signup from './landing_page/Signup/Signup.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Pricing from './landing_page/pricing/PricingPage.jsx';
import Footer from './landing_page/footer';
import Navbar from './landing_page/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
              <Navbar />
  <Routes>
      <Route path="/" element={<HomePage />} ></Route>
      <Route path="/signup" element={<Signup />} ></Route>
      <Route path="/about" element={<AboutPage />} ></Route>
      <Route path="/products" element={<ProductPage />} ></Route>
      <Route path="/support" element={<SupportPage />} ></Route>
      <Route path="/pricing" element={<Pricing />} ></Route>
    

  </Routes>
  <Footer />
  

  </BrowserRouter>

 
);
