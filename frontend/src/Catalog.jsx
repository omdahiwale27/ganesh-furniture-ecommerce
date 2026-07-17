import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import bed from "./assets/bed.jpg";
import sofaset1 from "./assets/sofaset1.jpg";
import chair1 from "./assets/Chair1.jpg";
import Ledtv from "./assets/Ledtv.jpg";
import samsung from "./assets/sams.jpg";
import Fan from "./assets/Fan.png";
import ComputerTable from "./assets/ComputerTable.jpg";
import CornerSofa from "./assets/CornerSofa.jpg";
import DinningTable from "./assets/DinningTable.jpg";
import IronAlmari from "./assets/IronAlmari.jpg";
import SteelAlmari from "./assets/SteelAlmari.jpg";

function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "Wooden Bed", price: "₹12,000", image: bed, category: "Furniture" },
    { id: 2, name: "Sofa Set", price: "₹10,000", image: sofaset1, category: "Furniture" },
    { id: 3, name: "Wooden Chair", price: "₹3,000", image: chair1, category: "Furniture" },
    { id: 4, name: "LED TV", price: "₹10,000", image: Ledtv, category: "Electronics" },
    { id: 5, name: "Samsung Smart TV", price: "₹20,000", image: samsung, category: "Electronics" },
    { id: 6, name: "Ceiling Fan", price: "₹1,500", image: Fan, category: "Electronics" },
    { id: 7, name: "Computer Table", price: "₹2,500", image: ComputerTable, category: "Furniture" },
    {id: 8, name: "CornerSofa", price: "₹15,000", image: CornerSofa, category: "Furniture"},
    {id: 9, name: "DinningTable", price: "₹8,500", image: DinningTable, category: "Furniture"},
    {id: 10, name: "IronAlmari", price: "₹1,800", image: IronAlmari, category: "Furniture"},
    {id: 11, name: "SteelAlmari", price: "₹2,500", image: SteelAlmari, category: "Furniture"},
    
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const cardStyle = {
    width: "270px",
    borderRadius: "14px",
    background: "#fff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "0.3s",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "190px",
    objectFit: "cover",
  };

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
  };

  const filterButtonStyle = (active) => ({
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    background: active ? "#ff7a00" : "#ececec",
    color: active ? "white" : "#333",
    cursor: "pointer",
    fontWeight: "600",
  });

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh" }}>
      <div style={{ padding: "60px 20px 30px", fontFamily: "Arial" }}>
        <h1 style={{ textAlign: "center", marginBottom: "10px", fontWeight: "700" }}>
          Our Product Catalog
        </h1>

        <p style={{ textAlign: "center", color: "#666", marginBottom: "30px" }}>
          Browse our collection of furniture and electronics
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "35px",
          }}
        >
          <button style={filterButtonStyle(selectedCategory === "All")} onClick={() => setSelectedCategory("All")}>
            All
          </button>
          <button
            style={filterButtonStyle(selectedCategory === "Furniture")}
            onClick={() => setSelectedCategory("Furniture")}
          >
            Furniture
          </button>
          <button
            style={filterButtonStyle(selectedCategory === "Electronics")}
            onClick={() => setSelectedCategory("Electronics")}
          >
            Electronics
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={cardStyle}
              onMouseOver={hoverIn}
              onMouseOut={hoverOut}
            >
              <img src={product.image} alt={product.name} style={imageStyle} />

              <div style={{ padding: "15px" }}>
                <h3 style={{ margin: "5px 0" }}>{product.name}</h3>
                <p style={{ color: "#777", marginBottom: "8px" }}>{product.category}</p>
                <p style={{ color: "#ff7a00", fontWeight: "bold", fontSize: "18px" }}>
                  {product.price}
                </p>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" }}>
                  <a
                    href={`https://wa.me/917057251245?text=Hello, I am interested in ${product.name}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      style={{
                        padding: "10px 15px",
                        border: "none",
                        background: "#25D366",
                        color: "white",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      WhatsApp
                    </button>
                  </a>

                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" }}>
  <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
    <button
      style={{
        padding: "10px 15px",
        border: "none",
        background: "#ff7a00",
        color: "white",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
      }}
    >
      View Details
    </button>
  </Link>

  <a
    href={`https://wa.me/917057251245?text=Hello, I want to buy ${product.name}`}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none" }}
  >
    <button
      style={{
        padding: "10px 15px",
        border: "none",
        background: "#25D366",
        color: "white",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
      }}
    >
      WhatsApp
    </button>
  </a>
</div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Catalog;