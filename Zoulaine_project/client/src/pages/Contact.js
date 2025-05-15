import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000); 
    };

    return (
        <div className="contact-page">
            <section
                className="hero-section text-white text-center d-flex align-items-center"
                style={{
                    backgroundImage: `url('/path-to-contact-background.jpg')`,
                    height: "50vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <h1 className="display-4 fw-bold">Contactez-Nous</h1>
                    <p className="lead">Nous sommes là pour répondre à toutes vos questions.</p>
                </div>
            </section>

            <section className="form-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5 text-dark">Envoyez-nous votre avis</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            {showAlert && (
                                <div className="alert alert-success text-center" role="alert">
                                    Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                                </div>
                            )}
                            <form
                                className="bg-dark text-white p-4 rounded shadow"
                                onSubmit={handleSubmit}
                            >
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        placeholder="Entrez votre nom complet"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Adresse Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Entrez votre email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Votre message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="form-control"
                                        rows="5"
                                        placeholder="Rédigez votre message ici"
                                        required
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Envoyer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
