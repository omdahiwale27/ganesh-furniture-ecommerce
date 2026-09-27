import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      {/* ================= CTA ================= */}
      <section className="footer-cta">

        <div>
          <span className="footer-eyebrow">
            NEED HELP CHOOSING?
          </span>

          <h2>
            Let's find the right product
            <br />
            for your home.
          </h2>

          <p>
            Have a question about furniture or electronics?
            Our team is here to help.
          </p>
        </div>

        <Link to="/contact" className="footer-cta-btn">
          Contact Us →
        </Link>

      </section>


      {/* ================= MAIN FOOTER ================= */}
      <div className="footer-main">

        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">

            <Link to="/" className="footer-logo">

              <div className="footer-logo-mark">
                G
              </div>

              <div>
                <strong>GANESH</strong>
                <span>Furniture & Electronics</span>
              </div>

            </Link>

            <p>
              Your trusted destination for quality furniture,
              electronics and home essentials.
            </p>

            <p className="footer-location">
              📍 Pune, Maharashtra
            </p>

            <div className="social-links">

              <a href="#" aria-label="Facebook">
                f
              </a>

              <a href="#" aria-label="Instagram">
                ◎
              </a>

              <a href="#" aria-label="YouTube">
                ▶
              </a>

              <a href="#" aria-label="WhatsApp">
                ☎
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>

            <Link to="/catalog">Catalog</Link>

            <Link to="/contact">Contact</Link>

            <Link to="/address">Store Location</Link>

            <Link to="/admin">Admin Login</Link>

          </div>


          {/* CATEGORIES */}
          <div className="footer-column">

            <h3>Categories</h3>

            <Link to="/catalog">Furniture</Link>

            <Link to="/catalog">Sofas</Link>

            <Link to="/catalog">Beds</Link>

            <Link to="/catalog">Dining</Link>

            <Link to="/catalog">Electronics</Link>

            <Link to="/catalog">Home Appliances</Link>

          </div>


          {/* CUSTOMER SUPPORT */}
          <div className="footer-column">

            <h3>Customer Support</h3>

            <Link to="/contact">Contact Us</Link>

            <Link to="/contact">Help & Support</Link>

            <a href="#">Shipping Information</a>

            <a href="#">Return Policy</a>

            <a href="#">Privacy Policy</a>

            <a href="#">Terms & Conditions</a>

          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact">

            <h3>Get In Touch</h3>

            <div className="footer-contact-item">

              <span>📞</span>

              <div>
                <small>Call Us</small>
                <a href="tel:7057251245">
                  7057251245
                </a>
              </div>

            </div>


            <div className="footer-contact-item">

              <span>✉</span>

              <div>
                <small>Email</small>

                <a href="mailto:support@ganeshfurniture.com">
                  support@ganeshfurniture.com
                </a>

              </div>

            </div>


            <div className="footer-contact-item">

              <span>📍</span>

              <div>
                <small>Store</small>

                <p>
                  Pune, Maharashtra
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">

        <div>
          © {new Date().getFullYear()} Ganesh Furniture &
          Electronics. All rights reserved.
        </div>

        <div>
          Built with React & Spring Boot
        </div>

      </div>

    </footer>
  );
}

export default Footer;