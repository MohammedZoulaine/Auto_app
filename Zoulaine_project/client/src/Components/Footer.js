import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaCarAlt, FaInfoCircle, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-light pt-5 pb-4">
            <div className="container">
                <div className="row text-center text-md-left">
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3">À propos de nous</h5>
                        <p className=" text-white">
                            Hot Wheels est votre destination ultime pour découvrir des voitures
                            élégantes et performantes. Nous combinons innovation et luxe pour une
                            expérience inoubliable.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-3">Liens rapides</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="text-light text-decoration-none">
                                    <FaHome className="me-2" /> Accueil
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/models" className="text-light text-decoration-none">
                                    <FaCarAlt className="me-2" /> Modèles
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="text-light text-decoration-none">
                                    <FaInfoCircle className="me-2" /> À propos
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-light text-decoration-none">
                                    <FaEnvelope className="me-2" /> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4 text-center text-md-end">
                        <h5 className="fw-bold mb-3">Suivez-nous</h5>
                        <div className="d-flex justify-content-center justify-content-md-end gap-3">
                            <a href="https://facebook.com" className="text-light">
                                <FaFacebook size={28} />
                            </a>
                            <a href="https://twitter.com" className="text-light">
                                <FaTwitter size={28} />
                            </a>
                            <a href="https://instagram.com" className="text-light">
                                <FaInstagram size={28} />
                            </a>
                            <a href="https://linkedin.com" className="text-light">
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center border-top border-secondary mt-4 pt-3">
                    <p className="mb-0">
                        © 2024 <span className="fw-bold">Hot Wheels</span>. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
