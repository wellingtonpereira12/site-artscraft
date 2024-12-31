import './Produtos.css';
import descansCopos from '../../assets/kit-descanso-copos.png';
import portajoia from '../../assets/porta-joia.png';
import portaFotos from '../../assets/porta-fotos.png';
import flores from '../../assets/flores.jpg';
import VelaEspiralRomântica from '../../assets/VelaEspiralRomântica.jpg';
import CeraPerfumada from '../../assets/CeraPerfumada.jpg';
import MiniBuquêAromatizado from '../../assets/MiniBuquêAromatizado.jpg';

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
                {/* Cartão 4*/}
                <div className="produto-card">
                    <img src= {flores} alt="Buquê de Flores" />
                    <p className="preco">R$ 89,90</p>
                    <h3>Buquê de Flores</h3>
                    <p className="descricaoProdutos">Um buquê de velas florais, com aromas suaves e toque romântico.</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Buquê de Flores. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                {/* Cartão 5*/}
                <div className="produto-card">
                    <img src= {VelaEspiralRomântica} alt="Vela Espiral Romântica" />
                    <p className="preco">R$ 25,90</p>
                    <h3>Vela Espiral Romântica</h3>
                    <p className="descricaoProdutos">Ilumine seus momentos especiais com a Vela Espiral Romântica. Seu design único em formato espiral e os delicados corações pintados à mão trazem um toque de romantismo e elegância para qualquer ambiente.</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Vela Espiral Romântica. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                {/* Cartão 6*/}
                    <div className="produto-card">
                    <img src= {CeraPerfumada} alt="Cera Perfumada em Formato de Coração" />
                    <p className="preco">R$ 3,90</p>
                    <h3>Cera Perfumada em Formato de Coração</h3>
                    <p className="descricaoProdutos">Cera perfumada artesanal em formato de coração. Ideal para aromatizar ambientes pequenos. Diversas fragrâncias disponíveis.                    .</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Cera Perfumada em Formato de Coração. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                {/* Cartão 7*/}
                <div className="produto-card">
                    <img src= {MiniBuquêAromatizado} alt="Mini Buquê Aromatizado" />
                    <p className="preco">R$ 45,90</p>
                    <h3>Mini Buquê Aromatizado</h3>
                    <p className="descricaoProdutos">Mini buquê de flores feito com velas aromatizadas, perfeito para perfumar e decorar pequenos espaços com charme e delicadeza..                    .</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Mini Buquê Aromatizado. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
            </div>
        </section>
    )
}

export default Produtos;