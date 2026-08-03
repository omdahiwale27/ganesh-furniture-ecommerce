import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbrr from "./Navbrr";
import Home from "./pages/Home";
import Catalog from "./Catalog";
import ContactForm from "./ContactForm";
import ProductDetails from "./ProductDetails";
import Footer from "./Footer";
import Admin from "./Admin";

function App() {
  return (
    <BrowserRouter>
      <Navbrr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/address" element={<Footer />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;