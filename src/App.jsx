import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css'

function App() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
            <title>Arts & Craft - Artesanatos</title>
            <link rel="canonical" href="https://Arts&craft.com.br" />
            <meta name="description" content="Nossos itens de cerâmica são feitos à mão com muito amor... e uma dose de caos criativo, para transformar seu espaço!" />
        </Helmet>
        <Navbar />
        <Home />
      </div>
    </HelmetProvider>  
  )
}

export default App
