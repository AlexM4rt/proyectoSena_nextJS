"use client";

import { useEffect } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export default function Calendario() {
  useEffect(() => {
    const instance = flatpickr("#calendario-hotel", {
      mode: "range",
      minDate: "today",
      dateFormat: "d-m-Y",
      static: true,
    });

    return () => {
      instance.destroy();
    };
  }, []);

  return (
    <div
      className="modal fade"
      id="ModalCalendario"
      tabIndex={-1}
      aria-labelledby="ModalCalendarioLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="ModalCalendarioLabel">
              Calendario de reservas
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="input-group d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Selecciona las fechas"
                id="calendario-hotel"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Buscar
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary">
              reestablecer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
