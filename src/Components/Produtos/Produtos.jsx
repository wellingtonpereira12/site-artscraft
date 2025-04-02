import './Produtos.css';
import descansCopos from './Fotos/kit-descanso-copos.png';
import portajoia from './Fotos/porta-joia.png';
import portaFotos from './Fotos/porta-fotos.png';
import flores from './Fotos/flores.jpg';
import VelaEspiralRomântica from './Fotos/VelaEspiralRomântica.jpg';
import CeraPerfumada from './Fotos/CeraPerfumada.jpg';
import MiniBuquêAromatizado from './Fotos/MiniBuquêAromatizado.jpg';
import PortavelasLoveStar from './Fotos/PortavelasLoveStar.jpg';
import PortaIncensoLovelyAir from './Fotos/PortaIncensoLovelyAir.jpg';
import VelasPerfumadasFlorezinhasindividuais from './Fotos/VelasPerfumadasFlorezinhasindividuais.jpg';
import VelaPerfumadaArcoiris from './Fotos/VelaPerfumadaArcoiris.jpg';

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
                {/* Buquê de Flores */}
                <div className="produto-card">
                    <img src= {flores} alt="Buquê de Flores" />
                    <p className="preco">R$ 89,90</p>
                    <h3>O buquê de flores Perfumadas</h3>
                    <p className="descricaoProdutos">Um buquê de velas florais, com aromas suaves e toque romântico.</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Buquê de Flores. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                {/* Vela Espiral Romântica */}
                <div className="produto-card">
                    <img src= {VelaEspiralRomântica} alt="Vela Espiral Romântica" />
                    <p className="preco">R$ 19,90</p>
                    <h3>Kit Vela Espiral Romântica</h3>
                    <p className="descricaoProdutos">Ilumine seus momentos especiais com a Vela Espiral Romântica. Seu design único em formato espiral e os delicados corações pintados à mão trazem um toque de romantismo e elegância para qualquer ambiente.</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Vela Espiral Romântica. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                {/* Cera Perfumada em Formato de Coração */}
                <div className="produto-card">
                    <img src= {CeraPerfumada} alt="Cera Perfumada em Formato de Coração" />
                    <p className="preco">R$ 3,90</p>
                    <h3>Cera Perfumada em Formato de Coração</h3>
                    <p className="descricaoProdutos">Cera perfumada artesanal em formato de coração. Ideal para aromatizar ambientes pequenos. Diversas fragrâncias disponíveis.                    .</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Cera Perfumada em Formato de Coração. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                {/* Mini Buquê Aromatizado */}
                <div className="produto-card">
                    <img src= {MiniBuquêAromatizado} alt="Mini Buquê Aromatizado" />
                    <p className="preco">R$ 25,90</p>
                    <h3>Minibuquê Perfumado</h3>
                    <p className="descricaoProdutos">Mini buquê de flores feito com velas aromatizadas, perfeito para perfumar e decorar pequenos espaços com charme e delicadeza..                    .</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Mini Buquê Aromatizado. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                {/* Porta-Fotos */}
                <div className="produto-card">
                    <img src={portaFotos} alt="Porta-Fotos" />
                    <p className="preco">R$ 5,99</p>
                    <h3>Mini Porta-Fotos</h3>
                    <p className="descricaoProdutos">Porta fotos dos momentos felizes da sua vida</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Porta-fotos. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
               {/* 
                <div className="produto-card">
                    <img src={portajoia} alt="Porta-Joia" />
                    <p className="preco">R$ 19,90</p>
                    <h3>Porta-Joia</h3>
                    <p className="descricaoProdutos">Porta-joias "Smug": elegância e proteção para suas joias.</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Porta-Joia. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                /* 
                <div className="produto-card">
                    <img src= {descansCopos} alt="Kit Descanso de Copos" />
                    <p className="preco">R$ 19,90</p>
                    <h3>Kit Descanso de Copos</h3>
                    <p className="descricaoProdutos">Kit descanso de copos personalizado: estilo único com seu nome.</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Kit Descanso de Copos. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>*/}
                 {/* Porta-Fotos */}
                 <div className="produto-card">
                    <img src={PortavelasLoveStar} alt="Porta-velas-Love-Star" />
                    <p className="preco">R$ 24,99</p>
                    <h3>Porta-velas “Love Star”</h3>
                    <p className="descricaoProdutos">Porta-velas elegante e charmoso, perfeito para criar um ambiente aconchegante</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Porta-velas “Love Star”. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                <div className="produto-card">
                    <img src={PortaIncensoLovelyAir} alt="Porta-Incenso-Lovely-Air" />
                    <p className="preco">R$ 29,90</p>
                    <h3>Porta Incenso “Lovely Air”</h3>
                    <p className="descricaoProdutos">Porta-incenso sofisticado e delicado, ideal para perfumar e harmonizar seu ambiente</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Porta Incenso “Lovely Air”. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                <div className="produto-card">
                    <img src={VelasPerfumadasFlorezinhasindividuais} alt="Velas-Perfumadas-Florezinhas-individuais" />
                    <p className="preco">R$ 4,50</p>
                    <h3>Velas Perfumadas “Florezinhas” individuais</h3>
                    <p className="descricaoProdutos">Velas perfumadas individuais, delicadas e charmosas, perfeitas para aromatizar seu ambiente</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Velas Perfumadas “Florezinhas” individuais. Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
                <div className="produto-card">
                    <img src={VelaPerfumadaArcoiris} alt="Vela-Perfumada-Arco-Íris" />
                    <p className="preco">R$ 19,90</p>
                    <h3>Vela Perfumada “Arco-Íris"</h3>
                    <p className="descricaoProdutos">Vela perfumada colorida, vibrante e aromática, ideal para alegrar e perfumar seu espaço</p>
                    <button onClick={() => handleClickWhatsapp('Olá, visitei o site e fiquei interessado no Vela Perfumada “Arco-Íris". Poderia me informar como proceder para comprá-lo?')}>Peça o seu</button>
                </div>
            </div>
        </section>
    )
}

export default Produtos;