import './SobreNos.css';
import EntreEmContato from '../../assets/EntreEmContato.png';

function SobreNos() {
    const phoneNumber = '47991263519';

    const handleClickWhatsapp = (ms) => {
        window.open(`https://wa.me/${phoneNumber}?text=${ms}`, '_blank');
    };
    return (
        <section id="sobre-nos" className="sobre-nos-section">
            <div className="sobre-nos-content">
                <div className="texto-principal">
                    <div>
                        <h1>Sobre nós</h1>
                        <h2>
                            Nós oferecemos uma experiência inesquecível para amantes da arte e apreciadores de criatividade!
                        </h2>
                    </div>
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
            <img src={EntreEmContato} alt="Vela e presentes" className="EntreEmContato" onClick={() => handleClickWhatsapp('Olá, vim pelo site e me interessei pelos seus produtos. Poderia, por favor, enviar o catálogo de produtos?')}/>        
        </section>
    );
}

export default SobreNos;