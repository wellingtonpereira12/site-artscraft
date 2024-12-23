import './SobreNos.css';
import velasepresentejuntos from '../../assets/velasepresentejuntos.png';
import { CiLocationOn } from "react-icons/ci";

function SobreNos() {
    const phoneNumber = '47991263519'; 
    const message = 'Olá, vim pelo site e me interessei pelos seus produtos. Poderia, por favor, enviar o catálogo de produtos?';

    const handleClickInsta = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');  
    };
    return (
        <section id="sobre-nos" className="sobre-nos-section">
            <div className="sobre-nos-content">
                {/* Texto principal */}
                <div className="texto-principal">
                        <div>
                            <h1>Sobre nós</h1>
                            <h2>
                                Nós oferecemos uma experiência inesquecível para amantes da arte e apreciadores de criatividade!
                            </h2>
                        </div>
                    {/* Texto descritivo */}
                    <div className="descricaoSobre">
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
            </div>
            {/* <div  className="imagem-bannerSobre" /> */}
            <div className='banner-sobre-nos-controle'>
                <div className="banner-sobre-nos1">
                    <div className="banner-contentSobre">
                        {/* Texto do banner */}
                        <div className="texto-bannerSobre">
                            <h2>Arts & Craft</h2>
                            <p>Atendemos via WhatsApp</p>
                            <h3>Venha fazer sua encomenda</h3>
                            <a href="#contato" onClick={handleClickInsta} >Entre em contato</a>
                        </div>
                    </div>
                </div>
                <div className="banner-sobre-nos2">
                    {/* Imagem e endereço */}
                    <div className="imagem-endereco">
                         <div className="endereco">
                            <h3>Onde estamos</h3>
                            <h2>Você pode nos encontrar no endereço:</h2>
                            <div className='enderecoNome'>
                                <CiLocationOn className='iconLocation'/>
                                <p>Rua José João da Silva 40, Badenfurt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default SobreNos;
