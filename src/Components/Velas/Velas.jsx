import './Velas.css';
import velasImag from '../../assets/vela3.png';
import fundoEncomenda from '../../assets/fundoEncomenda.png';

function Velas() {
    const phoneNumber = '47991263519';

    const handleClickWhatsapp = (ms) => {
        window.open(`https://wa.me/${phoneNumber}?text=${ms}`, '_blank');
    };

    return (
        <section id="velas" className="vela-section">
            <div className="vela-content">
                <div className="vela-text-container"> {/* Container para o texto */}
                    <p className="vela-preco">R$ 9,99</p>
                    <h1 className="vela-titulo">Velas</h1> {/* Adicionada classe para o título */}
                    <h2 className="vela-subtitulo">Conheça nossas velas</h2> {/* Adicionada classe para o subtítulo */}
                    <p className="vela-descricao">
                        Velas aromatizadas com diversas fragrâncias para criar o ambiente perfeito.
                    </p>
                    <a href="#contato" className="vela-link-contato" onClick={() => handleClickWhatsapp('Olá, vim pelo site e me interessei pelos seus produtos. Poderia, por favor, enviar o catálogo de produtos?')}>Entre em contato</a>
                </div>
                <div className="vela-imagem-vela">
                    <img src={velasImag} alt="Vela em formato de árvore" />
                </div>
            </div>
            <div className="imagem-banner" onClick={() => handleClickWhatsapp('Olá, vim pelo site e me interessei pelos seus produtos. Poderia, por favor, enviar o catálogo de produtos?')}>
              <img src={fundoEncomenda} alt="Vela e presentes"  />
            </div>
          </section>
    );
}

export default Velas;