import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contect from "./pages/contact/Contact";
import Policy from "./pages/policy/Policy";
import Resister from "./pages/auth/Resister";
import Login from "./pages/auth/Login";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import { ProductProvider } from "./context/productContext";
import ProductDetails from "./pages/ProductDetails";
import Card from "./pages/Card";

const App = () => {
  return (
    <>
      <ProductProvider>
        <Router>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contect" element={<Contect />} />
            <Route path="/policy" element={<Policy />}></Route>
            <Route path="/signup" element={<Resister />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/product/:slug" element={<ProductDetails />}></Route>
            <Route path="/cart" element={<Card />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </Router>
      </ProductProvider>
    </>
  );
};

export default App;
