export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0,
         margin: 0,
         width: "100%",
         display: "block",
         justifyContent: "center"
      }}>

      {/* MENÚ */}
      <nav style={{
        backgroundColor: "#1e3a8a",
        padding: "15px",
        display: "flex",
        justifyContent: "flex end",
        gap: "40px"
      }}>
        <a href="#inicio" style={{ color: "white", textDecoration: "none" }}>Inicio</a>
        <a href="#ebooks" style={{ color: "white", textDecoration: "none" }}>E-books</a>
        <a href="#clases" style={{ color: "white", textDecoration: "none" }}>Clases Online</a>
        <a href="#contacto" style={{ color: "white", textDecoration: "none" }}>Contacto</a>
      </nav>

      {/* INICIO */}
      <section id="inicio" style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "40px", color: "#1e3a8a" }}>Bienvenido a DIgitalBookSH</h1>
        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "20px auto" }}>
          Aprende desde casa con nuestros e-books y clases online diseñadas para toda la familia.
        </p>
        <img src="/familia.jpg" alt="Familia aprendiendo" style={{ width: "300px", borderRadius: "10px" }} />
      </section>

      {/* EBOOKS */}
      <section id="ebooks" style={{ backgroundColor: "#f3f4f6", padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", color: "#111827" }}>Nuestros E-books</h2>
        <img src="/tablet.jpg" alt="Ebook" style={{ width: "250px", margin: "20px 0", borderRadius: "8px" }} />
        <p style={{ maxWidth: "600px", margin: "auto" }}>
          Descubre guías prácticas para mejorar tus ingresos, educación y desarrollo personal.
        </p>
        <br />
        <a 
          href="https://pay.hotmart.com/Y104608917D?bid=1772132707401"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Comprar E-book
          </button>
        </a>
      </section>

      {/* CLASES */}
      <section id="clases" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", color: "#111827" }}>Clases Online</h2>
        <img src="/leyendo.jpg" alt="Clases online" style={{ width: "250px", margin: "20px 0", borderRadius: "8px" }} />
        <p style={{ maxWidth: "600px", margin: "auto" }}>
          Formación virtual en vivo y grabada para niños, jóvenes y adultos.
        </p>
        <br />
        <button style={{
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Inscribirme Ahora
        </button>
      </section>

      {/* CONTACTO */}
     <section id="contacto" style={{
       backgroundColor: "#0f172a",
       color: "white",
       padding: "60px 20px",
       textAlign: "center"
       }}>

       <h2 style={{ fontSize: "28px", marginBottom: "25px" }}>
       Contáctanos
       </h2>

       <p>
       📧 Email: 
       <a 
       href="mailto:contacto@digitalhd.com"
       style={{ color: "#facc15", textDecoration: "none", marginLeft: "5px" }}
       >
       contacto@digitalhd.com
       </a>
       </p>

       <p>
        📸 Instagram: 
        <a 
         href="https://instagram.com/digitalhd"
        target="_blank"
        style={{ color: "#facc15", textDecoration: "none", marginLeft: "5px" }}
       >
        @digitalhd
       </a>
       </p>

        <p>
        💬 WhatsApp: 
       <a 
        href="https://wa.me/573001234567"
        target="_blank"
        style={{ color: "#facc15", textDecoration: "none", marginLeft: "5px" }}
        >
       Escríbenos aquí
       </a>
       </p>

       <div style={{ marginTop: "30px", fontSize: "14px", opacity: 0.6 }}>
       © 2026 @DigitalbookSH - Todos los derechos reservados
       </div>

       </section>

    </div>
  );
}