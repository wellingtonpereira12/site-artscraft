import './Produtos.css';

function Produtos() {
    return (
        <section id="Produtos">
            <div className="produtos-container">
                <h1>Crafts</h1>
                <h2>Conheça nossos produtinhos exclusivos pensados e preparados a mão. </h2>
            </div>
            <div className="produtos-grid">
                {/* Cartão 1 */}
                <div className="produto-card">
                    <img src="porta-fotos.jpg" alt="Porta-Fotos" />
                    <p className="preco">R$ 5,99</p>
                    <h3>Porta-Fotos</h3>
                    <p className="descricao">Porta fotos dos momentos felizes da sua vida</p>
                    <button>Peça o seu</button>
                </div>
                
                {/* Cartão 2 */}
                <div className="produto-card">
                    <img src="porta-joia.jpg" alt="Porta-Joia" />
                    <p className="preco">R$ 19,90</p>
                    <h3>Porta-Joia</h3>
                    <p className="descricao">Porta-joias "Smug": elegância e proteção para suas joias.</p>
                    <button>Peça o seu</button>
                </div>
                
                {/* Cartão 3 */}
                <div className="produto-card">
                    <img src="kit-descanso-copos.jpg" alt="Kit Descanso de Copos" />
                    <p className="preco">R$ 19,90</p>
                    <h3>Kit Descanso de Copos</h3>
                    <p className="descricao">Kit descanso de copos personalizado: estilo único com seu nome.</p>
                    <button>Peça o seu</button>
                </div>
            </div>
        </section>
    )
}

export default Produtos;