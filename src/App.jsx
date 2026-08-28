import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import Cart from "./components/Cart";

function App() {
  return (
    <div className="min-h-screen bg-[#080808]">

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/productos"
          element={<Products />}
        />

        <Route
          path="/productos/:id"
          element={<ProductDetail />}
        />

        <Route
          path="/carrito"
          element={<Cart />}
        />

        <Route path="/checkout" element={<Checkout />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;