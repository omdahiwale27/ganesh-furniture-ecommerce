import { useParams, Link } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { getProductById } from "./services/productService";

import chair1 from "./assets/Chair1.jpg";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    getProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error loading product:", error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const getImageUrl = () => {
    if (!product?.imageUrl) {
      return chair1;
    }

    if (product.imageUrl.startsWith("http")) {
      return product.imageUrl;
    }

    return `http://localhost:8080/files/${product.imageUrl}`;
  };

  const increaseQuantity = () => {
    setQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previous) => Math.max(1, previous - 1));
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in ${product?.name}. Quantity: ${quantity}. Please share more details.`
  );

  if (loading) {
    return (
      <div className="product-details-page">
        <div className="product-loading">
          <div className="product-loading-spinner"></div>
          <h2>Loading product...</h2>
          <p>Please wait while we fetch the product details.</p>
        </div>

        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-details-page">
        <div className="product-error">
          <div className="product-error-icon">!</div>
          <h2>Product Not Found</h2>
          <p>
            We couldn't find the product you're looking for.
          </p>

          <Link to="/catalog" className="back-catalog-btn">
            ← Back to Catalog
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="product-details-page">

      {/* Breadcrumb */}
      <div className="product-breadcrumb-wrapper">
        <div className="product-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/catalog">Catalog</Link>
          <span>/</span>
          <strong>{product.name}</strong>
        </div>
      </div>

      {/* Product Section */}
      <main className="product-details-container">

        <section className="product-details-card">

          {/* Product Image */}
          <div className="product-image-section">

            <div className="product-image-box">
              <span className="product-availability-badge">
                ✓ Available
              </span>

              <img
                src={getImageUrl()}
                alt={product.name}
                className="product-main-image"
                onError={(event) => {
                  event.currentTarget.src = chair1;
                }}
              />
            </div>

            <div className="image-note">
              <span>🛡️</span>
              Quality products for your home
            </div>
          </div>

          {/* Product Information */}
          <div className="product-info-section">

            <span className="product-category">
              {product.category || "Home"}
            </span>

            <h1>{product.name}</h1>

            {product.brand && (
              <div className="product-brand">
                Brand: <strong>{product.brand}</strong>
              </div>
            )}

            <div className="product-rating-row">
              <span className="rating-stars">★★★★★</span>
              <span className="rating-text">Quality Product</span>
            </div>

            <div className="product-price">
              ₹{Number(product.price).toLocaleString("en-IN")}
            </div>

            <div className="price-note">
              Price may vary based on configuration and availability.
            </div>

            <div className="product-divider"></div>

            <div className="description-section">
              <h3>Product Description</h3>

              <p>
                {product.description ||
                  "A quality product designed to provide comfort, functionality and value for your home."}
              </p>
            </div>

            {/* Quantity */}
            <div className="quantity-section">
              <span>Quantity</span>

              <div className="quantity-control">
                <button onClick={decreaseQuantity}>−</button>

                <span>{quantity}</span>

                <button onClick={increaseQuantity}>+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="product-actions">

              <a
                href={`https://wa.me/917057251245?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="product-whatsapp-btn"
              >
                <span>💬</span>
                Order on WhatsApp
              </a>

              <Link
                to="/contact"
                className="product-contact-btn"
              >
                Contact Us
              </Link>
            </div>

            <Link
              to="/catalog"
              className="back-to-catalog"
            >
              ← Continue Shopping
            </Link>

          </div>
        </section>

        {/* Product Benefits */}
        <section className="product-benefits">

          <div className="benefit-item">
            <div className="benefit-icon">✓</div>
            <div>
              <strong>Quality Products</strong>
              <span>Carefully selected products</span>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">₹</div>
            <div>
              <strong>Competitive Pricing</strong>
              <span>Value for your money</span>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">☎</div>
            <div>
              <strong>Customer Support</strong>
              <span>We're here to help</span>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">🏠</div>
            <div>
              <strong>Home Essentials</strong>
              <span>Furniture & electronics</span>
            </div>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default ProductDetails;