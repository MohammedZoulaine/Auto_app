import React from "react";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaShieldAlt,
  FaCar,
  FaLeaf,
  FaCogs,
  FaUserShield,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="dark-theme">
      <section
        className="hero-section text-white text-center d-flex align-items-center"
        style={{
          backgroundImage: `url('https://wallpapers.com/images/hd/black-car-4k-wnfjwxcbybpwbs08.jpg')`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <div className="container">
          <h1
            className="display-3 fw-bold"
            style={{
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
              fontSize: "4rem",
              letterSpacing: "2px",
            }}
          >
            Explorez l'Excellence
          </h1>
          <p
            className="lead mt-3"
            style={{
              fontSize: "1.5rem",
              textShadow: "1px 1px 5px rgba(0, 0, 0, 0.8)",
            }}
          >
            L'élégance rencontre l'innovation.
          </p>
          <Link
            to="/models"
            className="btn btn-outline-light btn-lg mt-4"
            style={{
              borderRadius: "50px",
              padding: "15px 30px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow =
                "0px 8px 15px rgba(255, 255, 255, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow =
                "0px 4px 10px rgba(255, 255, 255, 0.3)";
            }}
          >
            Nos Modèles
          </Link>
        </div>
      </section>

      <section className="features py-5">
        <div className="container">
          <h2 className="text-center text-light mb-5">
            Pourquoi Nous Choisir ?
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card feature-card bg-dark text-white h-100 shadow-lg">
                <div className="card-body text-center">
                  <FaBolt size={60} className="text-primary mb-4" />
                  <h4 className="card-title">Performance</h4>
                  <p className="card-text">
                    Une puissance inégalée et des moteurs conçus pour des
                    performances maximales.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card bg-dark text-white h-100 shadow-lg">
                <div className="card-body text-center">
                  <FaCar size={60} className="text-primary mb-4" />
                  <h4 className="card-title">Design Élégant</h4>
                  <p className="card-text">
                    Des lignes épurées et un style audacieux qui captivent à
                    chaque regard.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card bg-dark text-white h-100 shadow-lg">
                <div className="card-body text-center">
                  <FaShieldAlt size={60} className="text-primary mb-4" />
                  <h4 className="card-title">Sécurité</h4>
                  <p className="card-text">
                    Des systèmes de sécurité avancés pour protéger ce qui compte
                    le plus.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card bg-dark text-white h-100 shadow-lg">
                <div className="card-body text-center">
                  <FaLeaf size={60} className="text-success mb-4" />
                  <h4 className="card-title">Durabilité</h4>
                  <p className="card-text">
                    Des solutions écoresponsables pour un avenir plus vert.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card bg-dark text-white h-100 shadow-lg">
                <div className="card-body text-center">
                  <FaCogs size={60} className="text-primary mb-4" />
                  <h4 className="card-title">Technologie Avancée</h4>
                  <p className="card-text">
                    Des innovations qui transforment votre expérience de
                    conduite.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card bg-dark text-white h-100 shadow-lg">
                <div className="card-body text-center">
                  <FaUserShield size={60} className="text-primary mb-4" />
                  <h4 className="card-title">Confiance Client</h4>
                  <p className="card-text">
                    Un engagement inébranlable envers la satisfaction de nos
                    clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
