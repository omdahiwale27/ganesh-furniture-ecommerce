export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <p className="mb-2">
        © {new Date().getFullYear()} Ganesh Furniture & Electronics. All rights reserved.
      </p>
      <p className="mb-3">📍 Dhamangaon Road, Kada Ashti, Beed | 📞 7057251245</p>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
        <iframe
          title="Ganesh Furniture Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404.49037172953985!2d75.08040272329094!3d18.895981412633528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4ac691d95948b%3A0xcb9e8c4bd0a82b9f!2sGanesh%20Furniture%20And%20Electronics!5e0!3m2!1sen!2sin!4v1754662396526!5m2!1sen!2sin"
          width="320"
          height="250"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}