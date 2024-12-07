import './SobreNos.css';
import velasepresentejuntos from '../../assets/velasepresentejuntos.png';

function SobreNos() {
    return (
        <section id="sobre-nos" className="sobre-nos-section">
            <div className="sobre-nos-content">
                {/* Texto principal */}
                <div className="texto-principal">
                    <h1>Sobre nós</h1>
                    <h2>
                        Nós oferecemos uma experiência inesquecível para amantes da arte e apreciadores de criatividade!
                    </h2>
                </div>

                {/* Texto descritivo */}
                <div className="descricao">
                    <p>
                        <strong>O melhor lugar para apreciar e adquirir arte de forma única.</strong>
                    </p>
                    <p>
                        Na Arts & Craft, oferecemos uma seleção única de produtos artesanais, trazendo a beleza e a criatividade diretamente para você. 
                    </p>
                    <p>
                        Com peças exclusivas e cuidadosamente escolhidas, nossa loja online celebra a arte e a expressão criativa, proporcionando uma experiência de compra única para os amantes da arte.
                    </p>
                </div>
            </div>

            {/* Banner inferior */}
            <div className="banner-sobre-nos">
                <div className="banner-content">
                    {/* Texto do banner */}
                    <div className="texto-banner">
                        <h2>Arts & Craft</h2>
                        <p>Atendemos via WhatsApp</p>
                        <p>Venha fazer sua encomenda</p>
                        <a href="#contato" className="link-contato">Entre em contato</a>
                    </div>

                    {/* Imagem e endereço */}
                    <div className="imagem-endereco">
                        <img src={velasepresentejuntos} alt="Vela artesanal" className="imagem-banner" />
                        <div className="endereco">
                            <h3>Onde estamos</h3>
                            <p>Você pode nos encontrar no endereço:</p>
                            <p>Rua José João da Silva 40, Badenfurt</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SobreNos;
