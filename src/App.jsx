import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Produtos from './Components/Produtos/Produtos';
import Velas from './Components/Velas/Velas';
import SobreNos from './Components/SobreNos/SobreNos';
import End from './Components/End/End';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  const [carrinhoItens, setCarrinhoItens] = useState([]); // Estado centralizado do carrinho

  return (
    <HelmetProvider>
      <div>
        <Helmet>
            <title>Arts & Craft - Artesanatos</title>
            <link rel="canonical" href="https://Arts&craft.com.br" />
            <meta name="description" content="Nossos itens de cerâmica são feitos à mão com muito amor... e uma dose de caos criativo, para transformar seu espaço!" />
        </Helmet>
        <Navbar 
            carrinhoItens={carrinhoItens}
            setCarrinhoItens={setCarrinhoItens}
        />
        <Home />
        <Produtos 
            carrinhoItens={carrinhoItens} 
            setCarrinhoItens={setCarrinhoItens}
        /> 
        <Velas /> 
        <SobreNos /> 
        <End />  
      </div>
    </HelmetProvider>  
  );
}

export default App;
