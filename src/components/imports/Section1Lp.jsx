import { useState } from 'react';

import mascota from '../../assets/images/personaje-1-1.webp';

import { categorias } from '../utils/categoriasSection1Lp';

export const Section1Lp = () => {
    const [textoActivo, setTextoActivo] = useState(null);

    const handleClick = (id) => {
        setTextoActivo((prev) => (prev === id ? null : id));
    };

    return (
        <section className="section-1-lp-container">
            <header className="section-1-lp-header">
                <h1 className="bebas-text">
                    ¡COMPRA <br /> TU CASA!
                </h1>
                <h2 className="light-text">Adquiere una propiedad</h2>
            </header>

            <div className="section-1-lp-content-1">
                <div>
                    <p className="light-text">Rápido y seguro</p>
                    <p className="light-text">¡Déjalo en nuestras manos!</p>
                </div>

                <div className="imagen-mascota">
                    <img src={mascota} alt="Personaje de Compramos Casas sosteniendo la llave de la Casa que quiere Vender" />
                </div>
            </div>

            <div className="section-1-lp-content-2">
                <h3 className="light-text">¿Qué tipo de casa quieres comprar?</h3>

                <div className={`section-1-lp-content-2-cards ${textoActivo ? 'texto-activo' : ''}`}>
                    {categorias.map((categoria) => (
                        <div key={categoria.id}>
                            <button
                                className="section-1-lp-content-2-card"
                                onClick={() => handleClick(categoria.id)}
                                title={`Haz clic para saber qué es una casa ${categoria.titulo.toLowerCase()}`}
                            >
                                <img src={categoria.imagen} alt={categoria.titulo} />
                                <p className="light-text">{categoria.titulo}</p>
                            </button>

                            {textoActivo === categoria.id && (
                                <div className="section-1-lp-cards-text">
                                    <p className="light-text">{categoria.descripcion}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="section-1-lp-content-2-button">
                    <button
                        className="bold-text"
                        onClick={() => document.querySelector('#section-3-lp')?.scrollIntoView({ behavior: 'smooth' })}
                        title="Haz clic para cotizar con un agente"
                    >
                        COMPRA TU CASA
                    </button>
                </div>
            </div>
        </section>
    );
};
