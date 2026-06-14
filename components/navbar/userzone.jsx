export default function Usuario() {
  return (
    <div className="d-flex justify-content-evenly align-items-center">
      <div className="d-flex align-items-center gap-4">
        <div className="d-flex align-items-center">
          <a href="#" data-bs-toggle="modal" data-bs-target="#ModalZonaUsuario">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          </a>
        </div>

        <div className="d-flex align-items-center">
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#ModalZonGestionarReserva"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-luggage"
            >
              <path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" />
              <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
              <path d="M10 20h4" />
              <circle cx="16" cy="20" r="2" />
              <circle cx="8" cy="20" r="2" />
            </svg>
          </a>
        </div>

        <div className="dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ES
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end border-0 shadow-sm"
            style={{ minWidth: "auto" }}
          >
            <li>
              <a className="dropdown-item text-center" href="#">
                EN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
