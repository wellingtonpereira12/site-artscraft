import './Velas.css';
import velaspresente from '../../assets/Vela e presente.png';
import velas from '../../assets/Vela.png';

function Velas() {
    return (
        <section id="velas" className="velas-section">
            <div className="velas-content">
                {/* Texto e descrição */}
                <div className="texto">
                    <p className="preco">R$ 9,99</p>
                    <h1>Velas</h1>
                    <h2>Conheça nossas velas</h2>
                    <p className="descricao">
                        Velas aromatizadas com diversas fragrâncias para criar o ambiente perfeito.
                    </p>
                    <a href="#contato" className="link-contato">Entre em contato</a>
                </div>

                {/* Imagem principal */}
                <div className="imagem-vela">
                    <img src={velas} alt="Vela em formato de árvore" />
                </div>
            </div>

            {/* Banner inferior */}
            <div className="banner-encomenda">
                <div className="banner-content">
                    <img src={velaspresente} alt="Presentes com vela" className="imagem-banner" />
                    <div className="texto-banner">
                        <h2>Faça sua encomenda</h2>
                        <p>Faça sua encomenda e personalize com seu nome!</p>
                        <a href="#contato" className="botao-banner">Entre em contato</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Velas;
