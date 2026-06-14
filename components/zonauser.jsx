"use client";

export default function ModalUser() {
  return (
    <div
      className="modal fade"
      id="ModalZonaUsuario"
      tabIndex={-1}
      aria-labelledby="ModalZonaUsuarioLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="ModalZonaUsuarioLabel">
              Bienvenido a la zona VIP
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="input-group flex-nowrap mb-3">
              <span className="input-group-text" id="addon-wrapping">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Usuario o correo"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div className="input-group flex-nowrap mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="contrasena"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              inicia sesion
            </button>
            <button type="button" className="btn btn-secondary">
              Registrate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
