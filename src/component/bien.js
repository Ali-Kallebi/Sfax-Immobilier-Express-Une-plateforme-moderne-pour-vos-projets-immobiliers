import React from 'react';
import "./bien.css";
import { useNavigate } from 'react-router-dom';

const Bien = () => {
    const navigate = useNavigate(); 
    const articles = [
        {
            id: 1,
            title: 'Terrain Agricole',
            type: 'Terrain',
            description: 'Terrain spacieux idéal pour les projets agricoles.',
            location: 'Sfax, Tunisie',
            image: 'assets/layout/images/1.jpg'
        },
        {
            id: 2,
            title: 'Maison Moderne',
            type: 'Maison',
            description: 'Maison moderne avec toutes les commodités.',
            location: 'Tunis, Tunisie',
            image: 'assets/layout/images/2.jpg'
        },
        {
            id: 3,
            title: 'Appartement Luxueux',
            type: 'Appartement',
            description: 'Appartement haut standing dans un quartier calme.',
            location: 'Monastir, Tunisie',
            image: 'assets/layout/images/3.jpg'
        },
        {
            id: 4,
            title: 'Ferme Équipée',
            type: 'Ferme',
            description: 'Ferme entièrement équipée avec espace vert.',
            location: 'Mahdia, Tunisie',
            image: 'assets/layout/images/4.jpg'
        },
        {
            id: 5,
            title: 'Villa de Luxe',
            type: 'Maison',
            description: 'Villa de luxe avec piscine et jardin.',
            location: 'Hammamet, Tunisie',
            image: 'assets/layout/images/5.jpg'
        },
        {
            id: 6,
            title: 'Terrain Constructible',
            type: 'Terrain',
            description: 'Terrain idéal pour la construction de projets résidentiels.',
            location: 'Sousse, Tunisie',
            image: 'assets/layout/images/6.jpg'
        },
        {
            id: 7,
            title: 'Appartement Vue Mer',
            type: 'Appartement',
            description: 'Appartement avec une magnifique vue sur la mer.',
            location: 'La Marsa, Tunisie',
            image: 'assets/layout/images/7.jpg'
        },
        {
            id: 8,
            title: 'Ferme Agricole',
            type: 'Ferme',
            description: 'Grande ferme pour les activités agricoles.',
            location: 'Kairouan, Tunisie',
            image: 'assets/layout/images/8.jpg'
        },
    ];

    return (
        <><div
            className="back-icon"
            style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                cursor: 'pointer',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '10px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onClick={() => navigate('/')} // Naviguer vers la page d'accueil
        >
            <i
                className="pi pi-arrow-left" // Classe d'icône PrimeIcons
                style={{
                    fontSize: '20px',
                    color: 'white',
                }}
            ></i>
        </div><div className="articles-grid">

                {articles.map(article => (
                    <div key={article.id} className="article-card">
                        <img src={article.image} alt={article.title} className="article-image" />
                        <div className="article-content">
                            <h2 className="article-title">{article.title}</h2>
                            <p className="article-type">{article.type}</p>
                            <p className="article-description">{article.description}</p>
                            <p className="article-location"><strong>{article.location}</strong></p>
                            <button className="interest-button">Intéressé</button>
                        </div>
                    </div>
                ))}
            </div></>
    );
};

export default Bien;
