import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "./Footer";

import { getAllProducts } from "./services/productService";

import "./Catalog.css";

function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchKeyword = searchParams.get("search") || "";

  useEffect(() => {
    setLoading(true);

    getAllProducts()
      .then((data) => {
        console.log("Catalog Products:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  /* =========================
     FILTER PRODUCTS
  ========================= */

  const filteredProducts = products
    .filter((product) => {

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const keyword = searchKeyword.toLowerCase().trim();

      const matchesSearch =
        keyword === "" ||
        product.name?.toLowerCase().includes(keyword) ||
        product.description?.toLowerCase().includes(keyword) ||
        product.category?.toLowerCase().includes(keyword) ||
        product.brand?.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {

      if (sortOption === "low-high") {
        return Number(a.price) - Number(b.price);
      }

      if (sortOption === "high-low") {
        return Number(b.price) - Number(a.price);
      }

      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    });

  /* =========================
     CLEAR FILTERS
  ========================= */

  const clearFilters = () => {
    setSelectedCategory("All");
    setSortOption("default");

    setSearchParams({});
  };

  /* =========================
     IMAGE URL
  ========================= */

  const getImageUrl = (product) => {

    if (!product.imageUrl) {
      return "https://via.placeholder.com/600x500?text=No+Image";
    }

    if (product.imageUrl.startsWith("http")) {
      return product.imageUrl;
    }

    return `http://localhost:8080/files/${product.imageUrl}`;
  };

  return (
    <div className="catalog-page">

      {/* =========================
          PAGE HERO
      ========================= */}

      <section className="catalog-hero">

        <div className="catalog-hero-content">

          <span className="catalog-eyebrow">
            GANESH FURNITURE & ELECTRONICS
          </span>

          <h1>Explore Our Collection</h1>

          <p>
            Discover furniture, electronics and home essentials
            designed for modern living.
          </p>

          <div className="catalog-breadcrumb">
            <Link to="/">Home</Link>
            <span> / </span>
            <strong>Catalog</strong>
          </div>

        </div>

      </section>


      {/* =========================
          CATALOG CONTENT
      ========================= */}

      <main className="catalog-container">

        {/* HEADER */}

        <div className="catalog-heading">

          <div>

            <span className="section-label">
              OUR PRODUCTS
            </span>

            <h2>
              Shop Our Collection
            </h2>

            <p>
              Find the right products for your home.
            </p>

          </div>

          <div className="product-count">
            {filteredProducts.length} Products
          </div>

        </div>


        {/* SEARCH RESULT */}

        {searchKeyword && (

          <div className="search-result-banner">

            <div>

              <span>Search results for</span>

              <strong>
                "{searchKeyword}"
              </strong>

            </div>

            <button onClick={clearFilters}>
              Clear Search
            </button>

          </div>

        )}


        {/* =========================
            FILTER BAR
        ========================= */}

        <div className="catalog-filter-bar">

          <div className="category-filters">

            <span className="filter-title">
              Category
            </span>

            <button
              className={
                selectedCategory === "All"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>

            <button
              className={
                selectedCategory === "Furniture"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setSelectedCategory("Furniture")}
            >
              Furniture
            </button>

            <button
              className={
                selectedCategory === "Electronics"
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setSelectedCategory("Electronics")}
            >
              Electronics
            </button>

          </div>


          <div className="sort-area">

            <label htmlFor="sort">
              Sort by
            </label>

            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >

              <option value="default">
                Featured
              </option>

              <option value="low-high">
                Price: Low to High
              </option>

              <option value="high-low">
                Price: High to Low
              </option>

              <option value="name">
                Name: A-Z
              </option>

            </select>

          </div>

        </div>


        {/* =========================
            PRODUCTS
        ========================= */}

        {loading ? (

          <div className="catalog-loading">

            <div className="loading-spinner"></div>

            <p>Loading products...</p>

          </div>

        ) : filteredProducts.length > 0 ? (

          <div className="catalog-product-grid">

            {filteredProducts.map((product) => (

              <article
                className="catalog-product-card"
                key={product.id}
              >

                {/* IMAGE */}

                <div className="catalog-image-container">

                  <img
                    src={getImageUrl(product)}
                    alt={product.name}
                    className="catalog-product-image"
                    onError={(e) => {

                      e.currentTarget.src =
                        "https://via.placeholder.com/600x500?text=No+Image";

                    }}
                  />

                  <span className="catalog-product-badge">
                    Available
                  </span>

                </div>


                {/* CONTENT */}

                <div className="catalog-product-content">

                  <span className="catalog-product-category">
                    {product.category || "Home"}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                  {product.brand && (
                    <span className="catalog-product-brand">
                      {product.brand}
                    </span>
                  )}

                  <p className="catalog-product-description">

                    {product.description
                      ? product.description.length > 90
                        ? `${product.description.substring(
                            0,
                            90
                          )}...`
                        : product.description
                      : "Quality product for your home."}

                  </p>


                  {/* PRICE */}

                  <div className="catalog-product-price">

                    ₹
                    {Number(product.price).toLocaleString(
                      "en-IN"
                    )}

                  </div>


                  {/* ACTIONS */}

                  <div className="catalog-product-actions">

                    <Link
                      to={`/product/${product.id}`}
                      className="details-btn"
                    >
                      View Details
                      <span>→</span>
                    </Link>

                    <a
                      href={`https://wa.me/917057251245?text=${encodeURIComponent(
                        `Hello, I want to know more about ${product.name}`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="whatsapp-btn"
                    >
                      WhatsApp
                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* =========================
             NO RESULTS
          ========================= */

          <div className="catalog-empty">

            <div className="empty-icon">
              🔎
            </div>

            <h2>
              No products found
            </h2>

            <p>
              We couldn't find products matching your
              current search or filters.
            </p>

            <button
              className="clear-filter-btn"
              onClick={clearFilters}
            >
              View All Products
            </button>

          </div>

        )}

      </main>


      {/* FOOTER */}

      <Footer />

    </div>
  );
}

export default Catalog;