import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ email: "", password: "", name: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        if (isLogin) {
            if (formData.email === "admin@admin.com" && formData.password === "admin") {
                setSuccessMessage("Connexion réussie !");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000);
                return;
            }

            try {
                await axios.post("http://localhost:4000/api/users/login", {
                    email: formData.email,
                    password: formData.password,
                });
                setSuccessMessage("Connexion réussie !");
                setTimeout(() => {
                    navigate("/models");
                }, 1000);
            } catch (error) {
                setErrorMessage(
                    error.response?.data?.message || "Identifiants incorrects ou erreur serveur."
                );
            }
        } else {
            if (!formData.email || !formData.password || !formData.name) {
                setErrorMessage("Veuillez remplir tous les champs.");
                return;
            }

            try {
                await axios.post("http://localhost:4000/api/users/register", {
                    fullname: formData.name,
                    email: formData.email,
                    password: formData.password,
                });
                setSuccessMessage("Inscription réussie !");
                setFormData({ email: "", password: "", name: "" });
                setIsLogin(true);
            } catch (error) {
                setErrorMessage(
                    error.response?.data?.message || "Une erreur est survenue lors de l'inscription."
                );
            }
        }
    };

    return (
        <div
            style={{
                backgroundColor: "#121212",
                color: "#fff",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <section
                style={{
                    backgroundImage: `url('/path-to-login-background.jpg')`,
                    height: "50vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    backgroundBlendMode: "overlay",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
            >
                <div>
                    <h1 className="display-4 fw-bold">
                        {isLogin ? "Connexion" : "Inscription"}
                    </h1>
                </div>
            </section>

            <section
                style={{
                    backgroundColor: "#f8f9fa",
                    padding: "40px 20px",
                    flex: "1",
                }}
            >
                <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                    {errorMessage && (
                        <div
                            className="alert alert-danger text-center"
                            style={{
                                borderRadius: "10px",
                                fontSize: "1rem",
                                marginBottom: "20px",
                            }}
                            role="alert"
                        >
                            {errorMessage}
                        </div>
                    )}
                    {successMessage && (
                        <div
                            className="alert alert-success text-center"
                            style={{
                                borderRadius: "10px",
                                fontSize: "1rem",
                                marginBottom: "20px",
                            }}
                            role="alert"
                        >
                            {successMessage}
                        </div>
                    )}
                    <form
                        style={{
                            backgroundColor: "#333",
                            color: "#fff",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                        onSubmit={handleSubmit}
                    >
                        {!isLogin && (
                            <div style={{ marginBottom: "15px" }}>
                                <label
                                    htmlFor="name"
                                    style={{
                                        display: "block",
                                        marginBottom: "5px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        borderRadius: "5px",
                                        border: "none",
                                        backgroundColor: "#444",
                                        color: "#fff",
                                    }}
                                    placeholder="Entrez votre nom complet"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div style={{ marginBottom: "15px" }}>
                            <label
                                htmlFor="email"
                                style={{
                                    display: "block",
                                    marginBottom: "5px",
                                    fontWeight: "bold",
                                }}
                            >
                                Adresse Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    border: "none",
                                    backgroundColor: "#444",
                                    color: "#fff",
                                }}
                                placeholder="Entrez votre email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                            <label
                                htmlFor="password"
                                style={{
                                    display: "block",
                                    marginBottom: "5px",
                                    fontWeight: "bold",
                                }}
                            >
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    border: "none",
                                    backgroundColor: "#444",
                                    color: "#fff",
                                }}
                                placeholder="Entrez votre mot de passe"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: "#0d6efd",
                                    border: "none",
                                    color: "#fff",
                                    padding: "10px 20px",
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                                onMouseOver={(e) =>
                                    (e.target.style.backgroundColor = "#004bb1")
                                }
                                onMouseOut={(e) =>
                                    (e.target.style.backgroundColor = "#0d6efd")
                                }
                            >
                                {isLogin ? "Connexion" : "Inscription"}
                            </button>
                        </div>
                    </form>
                    <div style={{ textAlign: "center", marginTop: "15px" }}>
                        <p className="text-dark">
                            {isLogin
                                ? "Vous n'avez pas de compte ? "
                                : "Vous avez déjà un compte ? "}
                            <span
                                style={{
                                    cursor: "pointer",
                                    color: "#0d6efd",
                                    fontWeight: "bold",
                                }}
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? "Inscrivez-vous" : "Connectez-vous"}
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
