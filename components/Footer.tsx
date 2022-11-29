import * as React from 'react';

export default function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a href="/reservations" className="nav-link px-2 text-muted">
              Reservations
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">© Pension Puaka 2022</p>
      </footer>
    </div>
  );
}
