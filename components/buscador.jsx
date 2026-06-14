export default function Buscador() {
  return (
    <div className="container" style={{ marginTop: "2%" }}>
      <nav
        className="navbar bg-body-tertiary"
        style={{ width: "70%", margin: "auto" }}
      >
        <div className="container-fluid d-flex justify-content-center">
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-success"
              data-bs-toggle="modal"
              data-bs-target="#ModalCalendario"
              type="button"
            >
              Reserva aqui tu habitacion!
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
