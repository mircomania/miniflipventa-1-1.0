import icono1 from '../../assets/images/icono-section-2-lp-1.webp';
import icono2 from '../../assets/images/icono-section-2-lp-2.webp';
import icono3 from '../../assets/images/icono-section-2-lp-3.webp';

export const Section2Lp = () => {
    return (
        <section className="section-2-lp-container">
            <header className="section-2-lp-header">
                <h2 className="bold-text">¡Rápido, fácil y seguro!</h2>
                <h3 className="light-text">Compra tu casa en 48 horas</h3>
            </header>

            <div className="section-2-lp-content-1">
                <div>
                    <p className="light-text">1.- Déjanos tus datos</p>
                    <img src={icono1} alt="Una hoja recibiendo los datos de la Casa que quieres Vender" loading="lazy" decoding="async" />
                </div>

                <div>
                    <p className="light-text">2.- Recibe una oferta</p>
                    <img src={icono2} alt="Dos personas negociando el Valor de una Casa en Venta" loading="lazy" decoding="async" />
                </div>

                <div>
                    <p className="light-text">3.- Conocemos tu casa</p>
                    <img src={icono3} alt="Un ticket aprobando la Venta de tu Casa" loading="lazy" decoding="async" />
                </div>
            </div>

            <hr />
        </section>
    );
};
