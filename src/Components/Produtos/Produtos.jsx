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
import KitDifusorRechaudPastilhasAromatizantes  from './Fotos/KitDifusorRechaudPastilhasAromatizantes.jpeg';
import VelaRosa  from './Fotos/VelaRosa.jpeg';
import MinibuqueRosa from './Fotos/MinibuqueRosa.jpeg';
import MinibuqueFlor from './Fotos/MinibuqueFlor.jpeg';

import { useState } from 'react';
 

const produtosLista = [
    {
      id: 1,
      nome: 'Buquê de Flores Perfumadas - G',
      preco: 'R$ 89,90',
      descricao: 'Um buquê de velas florais, com aromas suaves e toque romântico.',
      imagem: flores,
      categoria: 'Velas',
      mensagem: 'Olá, visitei o site e fiquei interessado no Buquê de Flores Perfumadas - G. Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 2,
      nome: 'Kit Vela Espiral Romântica',
      preco: 'R$ 19,90',
      descricao: 'Ilumine seus momentos especiais com a Vela Espiral Romântica. Seu design único em formato espiral e os delicados corações pintados à mão trazem um toque de romantismo e elegância para qualquer ambiente.',
      imagem: VelaEspiralRomântica,
      categoria: 'Velas',
      mensagem: 'Olá, visitei o site e fiquei interessado no Kit Vela Espiral Romântica. Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 3,
      nome: 'Pacote de Cera Perfumada em Formato de Coração',
      preco: 'R$ 9,90',
      descricao: 'Cera perfumada artesanal em formato de coração. Ideal para aromatizar ambientes pequenos. Diversas fragrâncias disponíveis.',
      imagem: CeraPerfumada,
      categoria: 'Velas',
      mensagem: 'Olá, visitei o site e fiquei interessado no Pacote de Cera Perfumada em Formato de Coração. Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 4,
      nome: 'Buquê de Flores Perfumadas - P',
      preco: 'R$ 24,90',
      descricao: 'Mini buquê de flores feito com velas aromatizadas, perfeito para perfumar e decorar pequenos espaços com charme e delicadeza.',
      imagem: MiniBuquêAromatizado,
      categoria: 'Velas',
      mensagem: 'Olá, visitei o site e fiquei interessado no Buquê de Flores Perfumadas - P. Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 5,
      nome: 'Mini Porta-Fotos',
      preco: 'R$ 5,99',
      descricao: 'Porta fotos dos momentos felizes da sua vida',
      imagem: portaFotos,
      categoria: 'Cerâmica',
      mensagem: 'Olá, visitei o site e fiquei interessado no Mini Porta-Fotos. Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 6,
      nome: 'Porta-velas “Love Star”',
      preco: 'R$ 24,99',
      descricao: 'Porta-velas elegante e charmoso, perfeito para criar um ambiente aconchegante',
      imagem: PortavelasLoveStar,
      categoria: 'Cerâmica',
      mensagem: 'Olá, visitei o site e fiquei interessado no Porta-velas “Love Star”. Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 7,
      nome: 'Porta Incenso “Lovely Air”',
      preco: 'R$ 29,90',
      descricao: 'Porta-incenso sofisticado e delicado, ideal para perfumar e harmonizar seu ambiente',
      imagem: PortaIncensoLovelyAir,
      categoria: 'Cerâmica',
      mensagem: 'Olá, visitei o site e fiquei interessado no Porta Incenso “Lovely Air”. Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 8,
      nome: 'Velas Perfumadas “Florezinhas” individuais',
      preco: 'R$ 5,00',
      descricao: 'Velas perfumadas individuais, delicadas e charmosas, perfeitas para aromatizar seu ambiente',
      imagem: VelasPerfumadasFlorezinhasindividuais,
      categoria: 'Velas',
      mensagem: 'Olá, visitei o site e fiquei interessado no Velas Perfumadas “Florezinhas” individuais. Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 9,
      nome: 'Vela Perfumada “Arco-Íris"',
      preco: 'R$ 11,90',
      descricao: 'Vela perfumada colorida, vibrante e aromática, ideal para alegrar e perfumar seu espaço',
      imagem: VelaPerfumadaArcoiris,
      categoria: 'Velas',
      mensagem: 'Olá, visitei o site e fiquei interessado no Vela Perfumada “Arco-Íris". Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 10,
      nome: 'Kit Difusor Rechaud + Pastilhas Aromatizantes',
      preco: 'R$ 89,90',
      descricao: 'Deixe seu ambiente mais aconchegante e perfumado! Ideal para relaxar, decorar e transformar o clima da sua casa com aromas envolventes.',
      imagem: KitDifusorRechaudPastilhasAromatizantes,
      categoria: 'Velas',
      mensagem: 'Olá, visitei o site e fiquei interessado no Kit Difusor Rechaud + Pastilhas Aromatizantes. Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 11,
      nome: 'Vela Rosa',
      preco: 'R$ 11,90',
      descricao: 'Com aroma suave e toque romântico, é ideal para criar um clima acolhedor e cheio de charme em qualquer ambiente.',
      imagem: VelaRosa,
      categoria: 'Velas',
      mensagem: 'Olá, visitei o site e fiquei interessado no Vela Rosa. Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 12,
      nome: 'Mini buquê Rosa',
      preco: 'R$ 19,90',
      descricao: 'Delicado e cheio de charme, é perfeito para presentear ou decorar com um toque romântico e sofisticado.',
      imagem: MinibuqueRosa,
      categoria: 'Velas',
      mensagem: 'Olá, visitei o site e fiquei interessado no Mini buquê Rosa. Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 13,
      nome: 'Mini buquê Flor',
      preco: 'R$ 9,90',
      descricao: 'Colorido e encantador, é ideal para presentear com afeto ou decorar com um toque especial de alegria.',
      imagem: MinibuqueFlor,
      categoria: 'Velas',
      mensagem: 'Olá, visitei o site e fiquei interessado no Mini buquê Flor. Poderia me informar como proceder para comprá-lo?'
    },
    // Produtos comentados, mas disponíveis:
    /*{
      id: 10,
      nome: 'Porta-Joia "Smug"',
      preco: 'R$ 19,90',
      descricao: 'Porta-joias "Smug": elegância e proteção para suas joias.',
      imagem: portajoia,
      categoria: 'Cerâmica',
      mensagem: 'Olá, visitei o site e fiquei interessado no Porta-Joia. Poderia me informar como proceder para comprá-lo?'
    },
    {
      id: 11,
      nome: 'Kit Descanso de Copos Personalizado',
      preco: 'R$ 19,90',
      descricao: 'Kit descanso de copos personalizado: estilo único com seu nome.',
      imagem: descansCopos,
      categoria: 'Cerâmica',
      mensagem: 'Olá, visitei o site e fiquei interessado no Kit Descanso de Copos. Poderia me informar como proceder para comprá-lo?'
    }*/
  ];
  
  function Produtos() {
      const phoneNumber = '47991263519'; 
      const [filtro, setFiltro] = useState('');
      const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  
      const categoriasUnicas = [...new Set(produtosLista.map(produto => produto.categoria))];
  
      const handleClickWhatsapp = (ms) => {
          window.open(`https://wa.me/${phoneNumber}?text=${ms}`, '_blank');  
      };
  
      // Filtro combinado: nome + categoria
      const produtosFiltrados = produtosLista.filter((produto) => {
          const nomeMatch = produto.nome.toLowerCase().includes(filtro.toLowerCase());
          const categoriaMatch = categoriaSelecionada === '' || produto.categoria === categoriaSelecionada;
          return nomeMatch && categoriaMatch;
      });
  
      return (
          <section id="Produtos">
                <div className="produtos-container">
                  <h1>Crafts</h1>
                  <h2>Conheça nossos produtinhos exclusivos pensados e preparados a mão. </h2>
                </div>

                <div className="filtro-container">
                {/* Campo de busca */}
                <input
                    type="text"
                    placeholder="Buscar produto..."
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                    className="filtro-input"
                />
                {/* Caixa de seleção de categorias */}
                <select
                    value={categoriaSelecionada}
                    onChange={(e) => setCategoriaSelecionada(e.target.value)}
                    className="filtro-select"
                >
                    <option value="">Todas as categorias</option>
                    {categoriasUnicas.map((categoria, index) => (
                        <option key={index} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </select>
                </div>
  
              {/* Lista de produtos filtrados */}
            {produtosFiltrados.length === 0 ? (
                <p className="produto-nao-encontrado">Produto não encontrado.</p>
            ) : (
                <div className="produtos-grid">
                {produtosFiltrados.map((produto) => (
                    <div key={produto.id} className="produto-card">
                        <img src={produto.imagem} alt={produto.nome} />
                        <p className="preco">{produto.preco}</p>
                        <h3>{produto.nome}</h3>
                        <p className="descricaoProdutos">{produto.descricao}</p>
                        <button onClick={() => handleClickWhatsapp(produto.mensagem)}>
                            Peça o seu
                        </button>
                    </div>
                ))}
            </div>
            )}
          </section>
      );
  }
  

export default Produtos;
