import Hamburger from "@/components/navbar/hamburger";
import Titulo from "@/components/navbar/title";
import Usuario from "@/components/navbar/userzone";

export default function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top mb-1">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Hamburger />
        <Titulo />
        <Usuario />
        <div className="collapse navbar-collapse w-100" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Habitaciones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
