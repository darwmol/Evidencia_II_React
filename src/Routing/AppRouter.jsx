import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandPage from "../pages/LandPages/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Carrito from "../pages/Carrito/Carrito";
import { Layout } from "../components/Layout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="" element={<Layout />}>
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="carrito" element={<Carrito />} />
        </Route>

        
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
