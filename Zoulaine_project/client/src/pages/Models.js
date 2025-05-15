import React, { useState, useEffect } from "react";
import "./Models.css";

const Models = () => {
    const [models, setModels] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch models");
                }
                const data = await response.json();
                setModels(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchModels();
    }, []);

    const filteredModels = models
        .filter((model) => {
            return selectedBrand === "" || model.marque === selectedBrand;
        })
        .sort((a, b) => {
            return sortOrder === "asc" ? a.prix - b.prix : b.prix - a.prix;
        });

    if (loading) {
        return <div className="models-page">Loading...</div>;
    }

    if (error) {
        return <div className="models-page">Error: {error}</div>;
    }

    return (
        <div className="models-page">
            <header className="models-header">
                <h1>Nos Modèles</h1>
                <p>Explorez notre collection de voitures avec des options de filtre et de tri.</p>
                <div className="filters">
                    <select
                        className="filter-select"
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                    >
                        <option value="">Toutes les marques</option>
                        {[...new Set(models.map((model) => model.marque))].map((brand) => (
                            <option key={brand} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                    <select
                        className="filter-select"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="asc">Prix: Croissant</option>
                        <option value="desc">Prix: Décroissant</option>
                    </select>
                </div>
            </header>
            <div className="models-container">
                {filteredModels.map((model) => (
                    <div key={model._id} className="model-card">
                        <div
                            className="model-image"
                            style={{ backgroundImage: `url(${model.imgPath})` }}
                        ></div>
                        <div className="model-details">
                            <h3>{model.name}</h3>
                            <p className="model-brand">{model.marque}</p>
                            <p className="model-price">{model.prix.toLocaleString()} €</p>
                            <button className="btn btn-primary">En savoir plus</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Models;
