export default function Fotos() {
  return (
    <div className="container">
      <div
        className="card shadow"
        style={{ width: "80%", height: "auto", margin: "10% auto auto auto" }}
      >
        <div
          id="carouselAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/pic1.png"
                className="d-block w-100 rounded"
                alt="Vista desde el restaurante"
              />
              <div className="carousel-caption d-none d-md-block">
                <a href="#" className="text-decoration-none text-reset">
                  <h4>Restaurante buena vista</h4>
                </a>
                <p>
                  Reserva ahora y disfruta de una experiencia culinaria única
                  con vistas
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/pic2.png"
                className="d-block w-100 rounded"
                alt="Vista desde la habitación"
              />
              <div className="carousel-caption d-none d-md-block">
                <a href="#" className="text-decoration-none text-reset">
                  <h4>Habitación matrimonial</h4>
                </a>
                <p>
                  Disfruta de una estancia inolvidable con la mejor vista a la
                  ciudad.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/pic3.png"
                className="d-block w-100 rounded"
                alt="Vista desde el jardín"
              />
              <div className="carousel-caption d-none d-md-block">
                <a href="#" className="text-decoration-none text-reset">
                  <h4>Piscina infinita</h4>
                </a>
                <p>
                  Sumérgete en nuestra piscina infinita y vuela entre el cielo y
                  el mar.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/pic4.png"
                className="d-block w-100 rounded"
                alt="Vista desde la piscina"
              />
              <div className="carousel-caption d-none d-md-block">
                <a href="#" className="text-decoration-none text-reset">
                  <h4>El primer hotel de su tipo en el valle de Aburrá</h4>
                </a>
                <p>
                  Donde la innovación y el confort se fusionan para brindarte
                  una estancia inolvidable.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
