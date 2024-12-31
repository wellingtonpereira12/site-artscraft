import React from "react";
import './End.css'
import logo from '../../assets/logoartsecraft.png'

function End() {
    const phoneNumber = '47991263519'; 
    const message = 'Olá, vim pelo site e me interessei pelos seus produtos. Poderia, por favor, enviar o catálogo de produtos?';


    const handleClickWhatsapp = () => {
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');  
    };
    return (
        <div className="endSectionEnd">
            <div className="endContainerPrincipal">
            <div className="endlinha-branca" />
            <div className="endContainer">
                <div className="endDivLogo">
                    <img src={logo} alt="ReactLogo" className="endlogo"/>
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
                    <a href="#Produtos">Produtos</a>
                    <a href="#sobre-nos">Sobre Nós</a>
                </div>
            </div>
            </div>
            <div className="endDireitos">2024 - Arts & Craft - Todos os direitos reservados</div>
        </div>
    )
}

export default End;
