import Footer from "./Footer";

export default function ContactForm() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div
          className="mx-auto p-4 shadow"
          style={{ maxWidth: "700px", borderRadius: "14px", background: "#fff" }}
        >
          <h2 className="text-center text-dark mb-4">Contact Us</h2>

          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile</label>
              <input type="tel" className="form-control" placeholder="Your Mobile Number" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
            </div>

            <div className="d-flex gap-2 flex-wrap">
              <button type="submit" className="btn btn-success">
                Send Message
              </button>

              <a
                href="https://wa.me/917057251245"
                target="_blank"
                rel="noreferrer"
                className="btn btn-warning"
              >
                WhatsApp Now
              </a>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}