import './Home.css';
import React, { useState, useEffect } from 'react';

function Home() {
    const [larguraTela, setLarguraTela] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setLarguraTela(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Limpeza do event listener quando o componente for desmontado
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
      
    const telaMenorQue1115px = larguraTela < 1115;

    return (
        <section id="inicio">
            <div className="hero-container">
                <h1>Peça sua arte</h1>
                <h2>Arts & Craft</h2>
                <h3>
                  Decorar nunca foi tão fácil (ou divertido)! Transforme qualquer ambiente com nossos itens de cerâmica fria e velas aromáticas. Tudo feito à mão com amor, paciência... e um pouco de caos criativo. Afinal, quem disse que arte precisa ser séria?"
                </h3>
                {telaMenorQue1115px ? (
                    <div className="hero-image-container"></div>
                ) : (
                    <div></div>
                )}
            </div>
            {telaMenorQue1115px ? (
                <div></div>
            ) : (
                <div className="hero-image-container"></div>
            )}   
        </section>
    );
}

export default Home;