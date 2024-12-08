import './Produtos.css';
import descansCopos from '../../assets/kit-descanso-copos.png';
import portajoia from '../../assets/porta-joia.png';
import portaFotos from '../../assets/porta-fotos.png';


function Produtos() {
    const phoneNumber = '47991263519'; 

    const handleClickWhatsapp = (ms) => {
        window.open(`https://wa.me/${phoneNumber}?text=${ms}`, '_blank');  
    };
    return (
        <section id="Produtos">
            <div className="produtos-container">
                <h1>Crafts</h1>
                <h2>Conheça nossos produtinhos exclusivos pensados e preparados a mão. </h2>
            </div>
            <div className="produtos-grid">
                {/* Cartão 1 */}
                <div className="produto-card">
                    <img src={portaFotos} alt="Porta-Fotos" />
                    <p className="preco">R$ 5,99</p>
                    <h3>Porta-Fotos</h3>
                    <p className="descricaoProdutos">Porta fotos dos momentos felizes da sua vida</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Porta-fotos. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                
                {/* Cartão 2 */}
                <div className="produto-card">
                    <img src={portajoia} alt="Porta-Joia" />
                    <p className="preco">R$ 19,90</p>
                    <h3>Porta-Joia</h3>
                    <p className="descricaoProdutos">Porta-joias "Smug": elegância e proteção para suas joias.</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Porta-Joia. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                
                {/* Cartão 3 */}
                <div className="produto-card">
                    <img src= {descansCopos} alt="Kit Descanso de Copos" />
                    <p className="preco">R$ 19,90</p>
                    <h3>Kit Descanso de Copos</h3>
                    <p className="descricaoProdutos">Kit descanso de copos personalizado: estilo único com seu nome.</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Kit Descanso de Copos. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
            </div>
        </section>
    )
}

export default Produtos;