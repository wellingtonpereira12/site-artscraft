import React from "react";
import './End.css'
import logo from '../../assets/logoartsecraft.png'

function End() {
    const phoneNumber = '47984862476'; // Coloque o número de telefone com DDD
    const message = 'Olá,%20gostaria%20de%20de%20criar%20uma%20prévia%20grátis%20da%20minha%20marca.%20Podemos%20conversar%20sobre%20os%20detalhes%20e%20etapas%20do%20projeto?';
  
    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };
    return (
        <div className="endSectionEnd">
            <div className="endSectionEndParticao">
                <h1>Se interesou em algum dos nossos itens?</h1>
                <button onClick={handleClick} aria-label="Avançar para criar seu site">
                    <div className="endflecha-esquerda" />
                </button>
            </div>
            <div className="endContainerPrincipal">
            <div className="endlinha-branca" />
            <div className="endContainer">
                <div className="endDivLogo">
                    <img src={logo} alt="ReactLogo" className="endlogo"/>
                    <h1>Arts & Craft</h1>
                </div>
                <div className="endAteLogo">Até logo! Nos procure se quando quiser!</div>
                <div className="endDado">
                    <div className="">Blumenau, Santa Catarina</div>
                    <div className="">(47) 99126-3519</div>
                </div>
            </div>
            <div className="endContainer1">
                <div className="endDivLogo1">
                    <h1>Explorar</h1>
                </div>
                <div className="endDado1">
                    <a href="#inicio">Inicio</a>
                    <a href="#produtos">Produtos</a>
                    <a href="#sobre-nos">Sobre Nós</a>
                </div>
            </div>
            </div>
            <div className="endDireitos">2024 - Arts & Craft - Todos os direitos reservados</div>
        </div>
    )
}

export default End;
