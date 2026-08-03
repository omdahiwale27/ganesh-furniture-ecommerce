import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services/productService";

import bed from "../assets/bed.jpg";
import Ledtv from "../assets/Ledtv.jpg";
import chair1 from "../assets/Chair1.jpg";
import sofaset1 from "../assets/sofaset1.jpg";

import Footer from "../Footer";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh" }}>

      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(${sofaset1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div>
          <h1>Ganesh Furniture & Electronics</h1>

          <p>
            Stylish Furniture & Trusted Electronics
          </p>

          <Link to="/catalog">
            <button
              style={{
                padding: "12px 25px",
                background: "#ff7a00",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Categories */}

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Categories</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <img
            src={bed}
            width="280"
            style={{ borderRadius: "12px" }}
          />

          <img
            src={Ledtv}
            width="280"
            style={{ borderRadius: "12px" }}
          />
        </div>
      </div>

      {/* Products */}

      <div style={{ padding: "40px" }}>

        <h2 style={{ textAlign: "center" }}>
          Featured Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          {products.map((product) => (

            <div
              key={product.id}
              style={{
                background: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,.12)",
              }}
            >
              <img
                src={chair1}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <h4 style={{ color: "#ff7a00" }}>
                  ₹{product.price}
                </h4>

                <Link to="/catalog">
                  <button
                    style={{
                      padding: "10px 18px",
                      background: "#ff7a00",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    View Product
                  </button>
                </Link>

              </div>

            </div>

          ))}
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Home;