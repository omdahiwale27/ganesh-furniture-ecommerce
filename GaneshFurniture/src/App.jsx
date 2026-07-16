import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import bed from "./assets/bed.jpg";
import sofaset1 from "./assets/sofaset1.jpg";
import chair1 from "./assets/Chair1.jpg";
import Ledtv from "./assets/Ledtv.jpg";
import samsung from "./assets/sams.jpg";
import Fan from "./assets/Fan.png";
import ProductDetails from "./ProductDetails";
import ComputerTable from "./assets/ComputerTable.jpg";
import CornerSofa from "./assets/CornerSofa.jpg";
import DinningTable from "./assets/DinningTable.jpg";
import IronAlmari from "./assets/IronAlmari.jpg";
import SteelAlmari from "./assets/SteelAlmari.jpg";

import Navbrr from "./Navbrr";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Catalog from "./Catalog";

function Home() {
  const productCard = {
    width: "250px",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    background: "#fff",
    transition: "0.3s",
  };

  const productImg = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  };

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0px)";
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#fafafa" }}>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${sofaset1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "480px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            padding: "40px 25px",
            borderRadius: "16px",
            background: "rgba(0,0,0,0.35)",
          }}
        >
          <h1 style={{ fontSize: "42px", fontWeight: "700", marginBottom: "14px" }}>
            Ganesh Furniture & Electronics
          </h1>

          <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "25px" }}>
            Stylish furniture and trusted electronics for your home, office, and everyday needs.
          </p>

          <div style={{ display: "grid",gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
            <Link to="/catalog">
              <button
                style={{
                  background: "#ff7a00",
                  border: "none",
                  padding: "12px 28px",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Shop Now
              </button>
            </Link>

            <Link to="/contact">
              <button
                style={{
                  background: "white",
                  border: "2px solid #ff7a00",
                  padding: "12px 28px",
                  borderRadius: "8px",
                  color: "#ff7a00",
                  fontSize: "16px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "30px", fontWeight: "700" }}>Our Categories</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/catalog" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ width: "300px" }}>
              <img
                src={bed}
                style={{ width: "100%", borderRadius: "12px", boxShadow: "0 6px 18px rgba(0,0,0,0.12)" }}
                alt="Furniture"
              />
              <h3 style={{ marginTop: "12px" }}>Furniture</h3>
            </div>
          </Link>

          <Link to="/catalog" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ width: "300px" }}>
              <img
                src={Ledtv}
                style={{ width: "100%", borderRadius: "12px", boxShadow: "0 6px 18px rgba(0,0,0,0.12)" }}
                alt="Electronics"
              />
              <h3 style={{ marginTop: "12px" }}>Electronics</h3>
            </div>
          </Link>
        </div>
      </div>

      <div style={{ padding: "40px 20px 70px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontWeight: "700" }}>
          Featured Products
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          {[
            { id: 1, image: bed, name: "Wooden Bed", desc: "Strong durable wooden bed" },
            { id: 2, image: sofaset1, name: "Sofa Set", desc: "Comfortable living room sofa" },
            { id: 3, image: chair1, name: "Wooden Chair", desc: "Elegant wooden chair" },
            { id: 4, image: Ledtv, name: "LED TV", desc: "Smart TV for entertainment" },
            { id: 5, image: samsung, name: "Samsung Smart TV", desc: "High quality display" },
            { id: 6, image: Fan, name: "Ceiling Fan", desc: "Energy efficient fan" },
            {id: 7, name: "Computer Table", price: "₹2,500", image: ComputerTable, category: "Furniture"},
            {id: 8, name: "CornerSofa", price: "₹15,000", image: CornerSofa, category: "Furniture"},
            {id: 9, name: "DinningTable", price: "₹8,500", image: DinningTable, category: "Furniture"},
            {id: 10, name: "IronAlmari", price: "₹1,800", image: IronAlmari, category: "Furniture"},
            {id: 11, name: "SteelAlmari", price: "₹2,500", image: SteelAlmari, category: "Furniture"},

          ].map((item) => (
            <div
              key={item.id}
              style={productCard}
              onMouseOver={hoverIn}
              onMouseOut={hoverOut}
            >
              <img src={item.image} style={productImg} alt={item.name} />
              <div style={{ padding: "15px" }}>
                <h4>{item.name}</h4>
                <p style={{ color: "#777" }}>{item.desc}</p>
                <Link to="/catalog" style={{ textDecoration: "none" }}>
                  <button
                    style={{
                      marginTop: "8px",
                      padding: "10px 16px",
                      border: "none",
                      background: "#ff7a00",
                      color: "white",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    View More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://wa.me/917057251245"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          background: "#25D366",
          color: "white",
          padding: "14px 18px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        WhatsApp
        <a
  href="tel:7057251245"
  style={{
    position: "fixed",
    bottom: "90px",
    right: "25px",
    background: "#007bff",
    color: "white",
    padding: "14px 18px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  Call
</a>
      </a>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbrr />
      <Routes>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/address" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;