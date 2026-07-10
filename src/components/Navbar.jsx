import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Hospital Management
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Add Patient
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  Search Patient
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/discharge">
                  Discharge Patient
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/view">
                  View Patients
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;