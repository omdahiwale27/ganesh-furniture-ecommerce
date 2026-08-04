import { useParams, Link } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { getProductById } from "./services/productService";

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

function ProductDetails() {
  const { id } = useParams();

  

  const [product, setProduct] = useState(null);

  

  
useEffect(() => {
    getProductById(id)
        .then((data) => {
            setProduct(data);
        })
        .catch((error) => {
            console.error(error);
        });
}, [id]);

 if (product === null) { 
   return (
    <div style={{ padding: "50px", textAlign: "center" }}>
        <h2>Loading...</h2>
    </div>
);
    
  }

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "50px 20px",
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1 1 420px" }}>
         <img
    src={
        product.imageUrl
            ? `http://localhost:8080/uploads/${product.imageUrl}`
            : chair1
    }
    alt={product.name}
    style={{
        width: "100%",
        maxWidth: "500px",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    }}
    onError={(e) => {
        e.target.src = chair1;
    }}
/>
        </div>

        <div style={{ flex: "1 1 420px" }}>
          <p style={{ color: "#777", marginBottom: "8px" }}>{product.category}</p>
          <h1 style={{ marginBottom: "12px" }}>{product.name}</h1>
          <h3 style={{ color: "#ff7a00", marginBottom: "18px" }}>₹{product.price}</h3>

          <p style={{ color: "#444", lineHeight: "1.7", marginBottom: "24px" }}>
            {product.description}
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/917057251245?text=Hello, I am interested in ${product.name}`}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  padding: "12px 20px",
                  border: "none",
                  background: "#25D366",
                  color: "white",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Order on WhatsApp
              </button>
            </a>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <button
                style={{
                  padding: "12px 20px",
                  border: "none",
                  background: "#ff7a00",
                  color: "white",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Contact Us
              </button>
            </Link>

            <Link to="/catalog" style={{ textDecoration: "none" }}>
              <button
                style={{
                  padding: "12px 20px",
                  border: "1px solid #ccc",
                  background: "white",
                  color: "#333",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Back to Catalog
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;