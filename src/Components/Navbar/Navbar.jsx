import React, { useEffect, useState } from 'react';
import logo from '../../assets/logoartsecraft.png'
import './Navbar.css'
import { Instagram, Menu, SquareX} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";


const Navbar = () => {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggler");
    const [scrolled, setScrolled] = useState(false);
    const phoneNumber = '47991263519'; 
    const message = 'Olá, vim pelo site e me interessei pelos seus produtos. Poderia, por favor, enviar o catálogo de produtos?';
  
    const handleClickInsta = () => {
        window.open(`https://www.instagram.com/artsecraftskeby/`, '_blank');
    };

    const handleClickWhatsapp = () => {
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');  
    };

    const navToggle =() =>{
        active === "nav_menu"
            ? setActive("nav_menu nav_active")
            : setActive("nav_menu");

        toggleIcon === 'nav_toggler'  
        ? setToggleIcon('nav_toggler toggler')
        : setToggleIcon('nav_toggler')
    }

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 50;
          if (isScrolled !== scrolled) setScrolled(isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);
    
    return(
        <div className="navbar">
            <nav className={`nav  ${scrolled ? 'scrolled' : ''}`}>
                <div className='containerlogo'>
                    <img src={logo} alt="ReactLogo" className={`logo ${scrolled ? 'scrolled' : ''}`}/>
                </div>
                <ul className={active}>
                    <li><a className={`a ${scrolled ? 'scrolled' : ''}`} href="#inicio">Início</a></li>
                    <li><a className={`a ${scrolled ? 'scrolled' : ''}`} href="#Produtos">Produtos</a></li>
                    <li><a className={`a ${scrolled ? 'scrolled' : ''}`} href="#sobre-nos">Sobre</a></li>
                    <button onClick={handleClickWhatsapp} className={`btnNav ${scrolled ? 'scrolled' : ''}`}> 
                        <FaWhatsapp className='FaWhatsapp'/>
                        {toggleIcon !== 'nav_toggler' ? (
                            <div>Whatsapp</div>
                        ) : null}
                    </button>
                    <button onClick={handleClickInsta} className={`btnNav ${scrolled ? 'scrolled' : ''}`}> 
                        <Instagram /> 
                        {toggleIcon !== 'nav_toggler' ? (
                            <div>Instagram</div>
                        ) : null}
                    </button>
                </ul>
                <div onClick={navToggle} className={toggleIcon}>
                    { toggleIcon == 'nav_toggler' ? (
                        <Menu className='NavIconBarraLateral'/>
                    ) : (
                        <SquareX className='NavIconBarraLateral'/>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;