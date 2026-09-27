import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../services/productService";

import bed from "../assets/bed.jpg";
import Ledtv from "../assets/Ledtv.jpg";
import chair1 from "../assets/Chair1.jpg";
import sofaset1 from "../assets/sofaset1.jpg";
import DinningTable from "../assets/DinningTable.jpg";
import Walldrop from "../assets/Walldrop.jpg";
import Fan from "../assets/Fan.png";
import sams from "../assets/sams.jpg";

import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error("Product loading error:", err));
  }, []);

  const categories = [
    {
      name: "Sofas",
      image: sofaset1,
      search: "sofa",
    },
    {
      name: "Beds",
      image: bed,
      search: "bed",
    },
    {
      name: "Dining",
      image: DinningTable,
      search: "dining",
    },
    {
      name: "Wardrobes",
      image: Walldrop,
      search: "wardrobe",
    },
    {
      name: "Televisions",
      image: Ledtv,
      search: "tv",
    },
    {
      name: "Appliances",
      image: Fan,
      search: "fan",
    },
    {
      name: "Electronics",
      image: sams,
      search: "electronics",
    },
  ];

  const featuredProducts = products.slice(0, 6);

  return (
    <main className="home-page">

      {/* ================= HERO ================= */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${sofaset1})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-tag">GANESH FURNITURE & ELECTRONICS</span>

          <h1>
            Make Your Home
            <span> Beautiful & Comfortable.</span>
          </h1>

          <p>
            Discover stylish furniture and trusted electronics
            designed for modern homes.
          </p>

          <div className="hero-buttons">
            <Link to="/catalog" className="primary-btn">
              Explore Products <span>→</span>
            </Link>

            <Link to="/contact" className="secondary-btn">
              Contact Us
            </Link>
          </div>

          <div className="hero-trust">
            <div>
              <strong>Quality</strong>
              <small>Products</small>
            </div>

            <div>
              <strong>Trusted</strong>
              <small>Service</small>
            </div>

            <div>
              <strong>Local</strong>
              <small>Support</small>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="trust-bar">
        <div className="trust-item">
          <div className="trust-icon">🚚</div>
          <div>
            <strong>Reliable Delivery</strong>
            <span>Safe & convenient delivery</span>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon">✓</div>
          <div>
            <strong>Quality Products</strong>
            <span>Furniture & electronics</span>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon">☎</div>
          <div>
            <strong>Customer Support</strong>
            <span>We're here to help</span>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-icon">★</div>
          <div>
            <strong>Trusted Service</strong>
            <span>Customer-focused experience</span>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="section-container">

        <div className="section-heading">
          <div>
            <span className="section-label">EXPLORE OUR COLLECTION</span>
            <h2>Shop By Category</h2>
            <p>Find everything you need for your home in one place.</p>
          </div>

          <Link to="/catalog" className="view-all">
            View All <span>→</span>
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
  to={`/catalog?search=${category.search}`}
  className="category-card"
  key={category.name}
>
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>

              <div className="category-info">
                <h3>{category.name}</h3>
                <span>Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS ================= */}
      <section className="section-container products-section">

        <div className="section-heading">
          <div>
            <span className="section-label">OUR COLLECTION</span>
            <h2>Featured Products</h2>
            <p>Quality products selected for your home.</p>
          </div>

          <Link to="/catalog" className="view-all">
            View All <span>→</span>
          </Link>
        </div>

        {featuredProducts.length > 0 ? (
          <div className="product-grid">

            {featuredProducts.map((product) => (

              <article className="product-card" key={product.id}>

                <div className="product-image-wrapper">

                  <img
                    src={
                     product.imageUrl
  ? `http://localhost:8080/files/${product.imageUrl}`
  : chair1
                    }
                    alt={product.name}
                    className="product-image"
                    onError={(e) => {
                      e.currentTarget.src = chair1;
                    }}
                  />

                  <span className="product-badge">
                    Featured
                  </span>
                </div>

                <div className="product-content">

                  <span className="product-category">
                    Ganesh Furniture & Electronics
                  </span>

                  <h3>{product.name}</h3>

                  <p>
                    {product.description
                      ? product.description.length > 70
                        ? `${product.description.substring(0, 70)}...`
                        : product.description
                      : "Quality product for your home."}
                  </p>

                  <div className="product-bottom">

                    <div className="product-price">
                      ₹{Number(product.price).toLocaleString("en-IN")}
                    </div>

                    <Link
                      to={`/product/${product.id}`}
                      className="product-button"
                    >
                      View Details
                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>
        ) : (
          <div className="empty-products">
            <h3>Products coming soon</h3>
            <p>We're adding new products to our collection.</p>
          </div>
        )}

      </section>

      {/* ================= PROMOTION ================= */}
      <section className="promotion-section">

        <div
          className="promotion-card promotion-dark"
          style={{ backgroundImage: `url(${Ledtv})` }}
        >
          <div className="promotion-overlay"></div>

          <div className="promotion-content">
            <span>SMART ELECTRONICS</span>

            <h2>
              Upgrade Your
              <br />
              Entertainment
            </h2>

            <p>
              Discover televisions and electronics for
              your modern lifestyle.
            </p>

            <Link to="/catalog" className="promotion-btn">
              Shop Electronics →
            </Link>
          </div>
        </div>

        <div
          className="promotion-card"
          style={{ backgroundImage: `url(${sofaset1})` }}
        >
          <div className="promotion-overlay light"></div>

          <div className="promotion-content dark-text">
            <span>MODERN FURNITURE</span>

            <h2>
              Create a Home
              <br />
              You Love
            </h2>

            <p>
              Stylish furniture made for comfortable
              everyday living.
            </p>

            <Link to="/catalog" className="promotion-btn">
              Shop Furniture →
            </Link>
          </div>
        </div>

      </section>

      {/* ================= WHY US ================= */}
      <section className="why-section">

        <div className="section-heading centered">
          <div>
            <span className="section-label">WHY GANESH?</span>
            <h2>Made For Better Living</h2>
            <p>
              We combine quality products with a simple,
              customer-first shopping experience.
            </p>
          </div>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">01</div>
            <h3>Quality First</h3>
            <p>
              Carefully selected furniture and electronics
              for everyday use.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">02</div>
            <h3>Wide Collection</h3>
            <p>
              Explore furniture, electronics and home
              essentials under one roof.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">03</div>
            <h3>Customer Support</h3>
            <p>
              Get assistance whenever you need help
              choosing the right product.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">04</div>
            <h3>Local Trust</h3>
            <p>
              A customer-focused store built around
              long-term relationships.
            </p>
          </div>

        </div>

      </section>

      {/* ================= STORE CTA ================= */}
      <section className="store-cta">

        <div>
          <span className="section-label">VISIT GANESH FURNITURE</span>

          <h2>
            Let's Make Your
            <br />
            Space Better.
          </h2>

          <p>
            Looking for furniture or electronics?
            Explore our collection or get in touch with us.
          </p>

          <div className="cta-buttons">

            <Link to="/catalog" className="primary-btn">
              Browse Products →
            </Link>

            <Link to="/contact" className="outline-btn">
              Contact Store
            </Link>

          </div>
        </div>

        <div className="store-details">

          <div>
            <span>📍</span>
            <div>
              <strong>Visit Our Store</strong>
              <p>Dhamangaon Road, Kada Ashti, Beed</p>
            </div>
          </div>

          <div>
            <span>📞</span>
            <div>
              <strong>Call Us</strong>
              <p>7057251245</p>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;