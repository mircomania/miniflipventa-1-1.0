import { Form } from './Form';

import imgMascotaLp from '../../assets/images/personaje-2.webp';

export const Section3Lp = () => {
    return (
        <section className="section-3-lp-container">
            <header className="section-3-lp-header">
                <h2 className="bold-text">Contáctanos</h2>
                <h3 className="light-text">Déjanos tus datos y nos comunicaremos contigo a la brevedad</h3>
            </header>

            <div className="section-3-lp-content-1">
                <img src={imgMascotaLp} alt="Personaje de Compramos tu Casa anotando tus datos en una plantilla" loading="lazy" decoding="async" />

                <Form />
            </div>
        </section>
    );
};
