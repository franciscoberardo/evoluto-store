import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import Envios from "./pages/Envios";
import Cambios from "./pages/Cambios";
import FAQ from "./pages/FAQ";
import Contacto from "./pages/Contacto";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import MediosDePago from "./pages/MediosDePago";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import Cart from "./components/Cart";

function App() {
  return (
    <div className="min-h-screen bg-[#080808]">
<ScrollToTop />
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

        <Route path="/envios" element={<Envios />} />

<Route path="/cambios" element={<Cambios />} />

<Route path="/faq" element={<FAQ />} />

<Route path="/contacto" element={<Contacto />} />

<Route path="/terminos" element={<Terminos />} />

<Route path="/privacidad" element={<Privacidad />} />

<Route path="/medios-de-pago" element={<MediosDePago />} />

        <Route path="/checkout" element={<Checkout />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;