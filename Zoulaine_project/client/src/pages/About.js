import React from "react";
import "./About.css"; 

const About = () => {
    return (
        <div className="about-page">
            <section className="hero-section text-white text-center d-flex align-items-center justify-content-center">
                <div className="container">
                    <h1 className="display-4 fw-bold">Notre Histoire</h1>
                    <p className="lead">Quand passion et innovation se rencontrent.</p>
                </div>
            </section>

            <section className="story-section py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className="mb-4">Une Passion pour l'Excellence</h2>
                            <p>
                                Hot Wheels est né de la conviction que les voitures ne sont pas seulement des moyens de transport. Elles sont des extensions de notre personnalité, des outils de liberté, et des promesses d'aventure.
                            </p>
                            <p>
                                Notre équipe a redéfini l'automobile en adoptant une approche artistique : des lignes épurées, des matériaux de haute qualité, et des technologies avancées qui repoussent les limites du possible.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img
                                src="../Car1.jpg"
                                alt="Une voiture élégante"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section text-white py-5">
                <div className="container text-center">
                    <h2 className="mb-5">Nos Valeurs</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <i className="bi bi-lightning-charge-fill display-4 text-primary"></i>
                            <h4 className="mt-3">Innovation</h4>
                            <p>Concevoir des solutions audacieuses et visionnaires pour l'automobile.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-star-fill display-4 text-primary"></i>
                            <h4 className="mt-3">Excellence</h4>
                            <p>Chaque détail compte. Nous nous efforçons de créer la perfection.</p>
                        </div>
                        <div className="col-md-4">
                            <i className="bi bi-heart-fill display-4 text-primary"></i>
                            <h4 className="mt-3">Passion</h4>
                            <p>Nos véhicules sont nés d'une véritable passion pour l'automobile.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vision-section py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-md-2">
                            <h2 className="mb-4">Notre Vision</h2>
                            <p>
                                Imaginez un monde où chaque voiture est une œuvre d'art, où chaque conducteur est un explorateur. Nous croyons en un avenir où l'élégance et la technologie coexistent harmonieusement.
                            </p>
                            <p>
                                Grâce à nos recherches et à notre engagement envers la durabilité, nous façonnons un avenir où les routes sont non seulement belles, mais aussi respectueuses de la planète.
                            </p>
                        </div>
                        <div className="col-md-6 order-md-1">
                            <img
                                src="../Car2.jpg"
                                alt="Vision futuriste"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
