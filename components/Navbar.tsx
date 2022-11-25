import * as React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pension Puaka
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Pension Puaka
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Réservation
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/chambresetbungalows">
                      Chambres Et Bungalows
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/activites">
                      Activités
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/locations">
                      Locations
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/evenements">
                      Evénements
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/formules">
                      Formules
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
