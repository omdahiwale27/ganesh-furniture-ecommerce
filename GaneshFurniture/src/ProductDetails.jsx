import { useParams, Link } from "react-router-dom";
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

function ProductDetails() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Wooden Bed",
      price: "₹18,000",
      image: bed,
      category: "Furniture",
      description: "Strong and stylish wooden bed for your bedroom with durable build quality.",
    },
    {
      id: 2,
      name: "Sofa Set",
      price: "₹25,000",
      image: sofaset1,
      category: "Furniture",
      description: "Comfortable sofa set with elegant design for your living room.",
    },
    {
      id: 3,
      name: "Wooden Chair",
      price: "₹3,000",
      image: chair1,
      category: "Furniture",
      description: "Premium wooden chair with strong support and attractive finish.",
    },
    {
      id: 4,
      name: "LED TV",
      price: "₹15,000",
      image: Ledtv,
      category: "Electronics",
      description: "High quality LED TV with clear display and modern design.",
    },
    {
      id: 5,
      name: "Samsung Smart TV",
      price: "₹28,000",
      image: samsung,
      category: "Electronics",
      description: "Smart TV with vibrant display and advanced entertainment features.",
    },
    {
      id: 6,
      name: "Ceiling Fan",
      price: "₹2,500",
      image: Fan,
      category: "Electronics",
      description: "Energy efficient ceiling fan with smooth performance.",
    },
     {
      id: 7,
      name: "Computer Table",
      price: "₹2,500",
      image: ComputerTable,
      category: "Furniture",
      description: "size: 4 * 2 with keyboard and drawer",
    },
    {id: 8, name: "CornerSofa", price: "₹15,000", image: CornerSofa, category: "Furniture" , 
      description: "Plywood Corner Arrangement Sofaset",
    },

        {id: 9, name: "DinningTable", price: "₹8,500", image: DinningTable, category: "Furniture" , 
          description: "5 * 6 inch Dinning Table with 6 chairs",
        },

        {id: 10, name: "IronAlmari", price: "₹1,800", image: IronAlmari, category: "Furniture" , 
          description:"3 * 6 Iron Strong Almari",
        },

        {id: 11, name: "SteelAlmari", price: "₹2,500", image: SteelAlmari, category: "Furniture" , 
          description:"3 * 6 Steel attractive Strong Almari",
        },

  ];

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <Link to="/catalog">Back to Catalog</Link>
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
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          />
        </div>

        <div style={{ flex: "1 1 420px" }}>
          <p style={{ color: "#777", marginBottom: "8px" }}>{product.category}</p>
          <h1 style={{ marginBottom: "12px" }}>{product.name}</h1>
          <h3 style={{ color: "#ff7a00", marginBottom: "18px" }}>{product.price}</h3>

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