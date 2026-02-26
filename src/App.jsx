export default function App() {
  return (
     <div style={{
  fontFamily: "Arial, sans-serif",
  margin: 0,
  width: "100%",
  minHeight: "100vh"
}}>

      {/* NAVBAR */}
      <nav style={{
        backgroundColor: "#0f172a",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ color: "white", margin: 0 }}>Digital HD</h2>

        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#inicio" style={linkStyle}>Inicio</a>
          <a href="#ebooks" style={linkStyle}>E-books</a>
          <a href="#clases" style={linkStyle}>Clases Online</a>
          <a href="#contacto" style={linkStyle}>Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" style={{
         width: "100%",
  background: "linear-gradient(to right, #1e3a8a, #2563eb)",
  color: "white",
  padding: "120px 20px",
  textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Aprende desde casa con calidad profesional
        </h1>

        <p style={{
          fontSize: "20px",
          maxWidth: "700px",
          margin: "0 auto 40px auto"
        }}>
          E-books y clases online diseñadas para transformar tu aprendizaje
          y el de tu familia.
        </p>

        <button style={{
          backgroundColor: "#facc15",
          color: "#000",
          padding: "15px 35px",
          fontSize: "18px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold"
        }}>
          Comprar Ahora
        </button>
      </section>

      {/* EBOOKS */}
      <section id="ebooks" style={{
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "40px", color: "#111827" }}>
          Nuestros E-books
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}>
          <div style={cardStyle}>
            <img src="/tablet.jpg" alt="Ebook" style={imageStyle} />
            <h3>E-book Premium</h3>
            <p>Contenido práctico y fácil de aplicar.</p>
          </div>

          <div style={cardStyle}>
            <img src="/leyendo.jpg" alt="Clases" style={imageStyle} />
            <h3>Clases Online</h3>
            <p>Aprende paso a paso desde cualquier lugar.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: "#0f172a",
        color: "white",
        textAlign: "center",
        padding: "30px"
      }}>
        © 2026 Digital HD - Todos los derechos reservados
      </footer>

    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px"
};

const cardStyle = {
  backgroundColor: "white",
  padding: "25px",
  borderRadius: "12px",
  width: "280px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
};

const imageStyle = {
  width: "100%",
  borderRadius: "10px",
  marginBottom: "15px"
};