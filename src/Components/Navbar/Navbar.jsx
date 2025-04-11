import React, { useEffect, useState } from 'react';
import logo from '../../assets/logoartsecraft.png';
import './Navbar.css';
import { Instagram, Menu, SquareX, ShoppingCart } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import Carrinho from '../Carrinho/Carrinho';

const Navbar = ({ carrinhoItens, setCarrinhoItens }) => { // Receba as props
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
    const [scrolled, setScrolled] = useState(false);
    const [carrinhoAberto, setCarrinhoAberto] = useState(false); // Use apenas este estado
    
    const phoneNumber = '47991263519'; 
    const message = 'Olá, vim pelo site e me interessei pelos seus produtos. Poderia, por favor, enviar o catálogo de produtos?';
  
    const handleClickInsta = () => {
        window.open(`https://www.instagram.com/artsecraftskeby/`, '_blank');
    };

    const handleClickWhatsapp = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');  
    };

    const navToggle = () => {
        setActive(prev => prev === "nav_menu" ? "nav_menu nav_active" : "nav_menu");
        setToggleIcon(prev => prev === 'nav_toggler' ? 'nav_toggler toggler' : 'nav_toggler');
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="navbar">
            <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <div className='containerlogo'>
                    <img src={logo} alt="Logo Arts e Crafts" className={`logo ${scrolled ? 'scrolled' : ''}`} />
                </div>
                <ul className={active}>
                    <li><a className={`a ${scrolled ? 'scrolled' : ''}`} href="#inicio">Início</a></li>
                    <li><a className={`a ${scrolled ? 'scrolled' : ''}`} href="#Produtos">Produtos</a></li>
                    <li><a className={`a ${scrolled ? 'scrolled' : ''}`} href="#sobre-nos">Sobre</a></li>
                    
                    <button onClick={handleClickWhatsapp} className={`btnNav ${scrolled ? 'scrolled' : ''}`}>
                        <FaWhatsapp className='FaWhatsapp' />
                        {toggleIcon !== 'nav_toggler' && <div>Whatsapp</div>}
                    </button>
                    
                    <button onClick={handleClickInsta} className={`btnNav ${scrolled ? 'scrolled' : ''}`}>
                        <Instagram />
                        {toggleIcon !== 'nav_toggler' && <div>Instagram</div>}
                    </button>
                    
                    <button 
                        onClick={() => setCarrinhoAberto(true)} 
                        className={`btnNav ${scrolled ? 'scrolled' : ''}`}
                    >
                        <ShoppingCart />
                        {toggleIcon !== 'nav_toggler' && <div>Carrinho</div>}
                        {carrinhoItens.length > 0 && (
                            <span className="carrinho-contador">
                                {carrinhoItens.reduce((acc, item) => acc + item.quantidade, 0)}
                            </span>
                        )}
                    </button>
                </ul>
                
                <div onClick={navToggle} className={toggleIcon}>
                    {toggleIcon === 'nav_toggler' ? (
                        <Menu className='NavIconBarraLateral' />
                    ) : (
                        <SquareX className='NavIconBarraLateral' />
                    )}
                </div>
            </nav>

            <Carrinho 
                isOpen={carrinhoAberto} 
                onClose={() => setCarrinhoAberto(false)}
                itens={carrinhoItens}
                setItens={setCarrinhoItens}
            />
        </div>
    );
}

export default Navbar;