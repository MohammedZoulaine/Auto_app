import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaSignInAlt,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h4 d-flex align-items-center">
          <img
            src="../logo.avif"
            alt="logo"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "10px",
            }}
          />
          Hot Wheels
        </h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaHome className="me-1" /> Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                <FaInfoCircle className="me-1" /> À propos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/models" className="nav-link text-white">
                Modèles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">
                <FaEnvelope className="me-1" /> Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white">
                <FaSignInAlt className="me-1" /> Connexion
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
