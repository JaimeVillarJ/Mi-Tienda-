import "../styles/footer.css";

export const Footer = () => {
  return (
    <div> 
        <footer className="super-footer">
            <div className="footer-content">
                <div className="footer-section">
                <h3>Supermercado Mi Tienda Personal</h3>
                <p>Siempre frescos, siempre cerca de ti.</p>
                </div>

                <div className="footer-section">
                <h4>Enlaces rápidos</h4>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Catálogo</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                </div>

                <div className="footer-section">
                <h4>Contacto</h4>
                <p>📍 Av. Principal 123, Madrid</p>
                <p>📞 +34 900 123 456</p>
                <p>✉️ contacto@supermitienda.com</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Supermercado Mi Tienda Personal | Todos los derechos reservados</p>
            </div>
        </footer>
    </div>
  )
}
