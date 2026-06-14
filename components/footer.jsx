export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start mt-5 border-top">
      <div className="container p-4">
        <div className="row mt-4">
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-4">Nuestro Hotel</h5>
            <p className="text-muted">Hotelazo en Medellin</p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
            <h5 className="text-uppercase fw-bold mb-4">Explora</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Habitaciones
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-secondary text-decoration-none">
                  Restaurante
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-4">Contacto</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">Medellín, Por las Palmas</li>
              <li className="mb-2">info@hotel.com</li>
              <li className="mb-2">+57 300 123 4567</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3 border-top"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
      >
        <small className="text-muted"> © 2026 Hotelazo </small>
      </div>
    </footer>
  );
}
