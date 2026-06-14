"use client";

export default function ModalGestion() {
  return (
    <div
      className="modal fade"
      id="ModalZonGestionarReserva"
      tabIndex={-1}
      aria-labelledby="ModalZonGestionarReservaLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="ModalZonGestionarReservaLabel">
              Gestiona tus reservas
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                #
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Numero de reserva"
                aria-label="NumeroReserva"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Nombre"
                aria-label="Nombre"
                className="form-control"
              />
              <input
                type="text"
                placeholder="Apellido"
                aria-label="Apellido"
                className="form-control"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
