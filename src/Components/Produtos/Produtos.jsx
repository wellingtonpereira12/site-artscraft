import './Produtos.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartModal from '../Carrinho/Carrinho';
import { produtosLista } from '../../data/produtosData';

function Produtos({ carrinhoItens, setCarrinhoItens }) {
  const navigate = useNavigate();
  const [indicesImagem, setIndicesImagem] = useState({});
  const [animandoImagem, setAnimandoImagem] = useState({});
  const [filtro, setFiltro] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const phoneNumber = '47991263519';

  const trocarImagemComTransicao = (id, imagens, direcao) => {
    setAnimandoImagem(prev => ({ ...prev, [id]: true }));

    setTimeout(() => {
      setIndicesImagem(prev => {
        const atual = prev[id] || 0;
        const novoIndice = direcao === 'proxima'
          ? (atual + 1) % imagens.length
          : (atual - 1 + imagens.length) % imagens.length;

        return { ...prev, [id]: novoIndice };
      });
      setAnimandoImagem(prev => ({ ...prev, [id]: false }));
    }, 250);
  };

  const adicionarAoCarrinho = (produto) => {
    setCarrinhoItens(prev => {
      const itemExistente = prev.find(item => item.id === produto.id);
      return itemExistente
        ? prev.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
        : [...prev, { ...produto, quantidade: 1 }];
    });
    setCarrinhoAberto(true);
  };

  const handleClickWhatsapp = (ms) => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(ms)}`, '_blank');
  };

  const categoriasUnicas = [...new Set(produtosLista.map(produto => produto.categoria))];

  const produtosFiltrados = produtosLista.filter(produto => {
    const nomeMatch = produto.nome.toLowerCase().includes(filtro.toLowerCase());
    const categoriaMatch = !categoriaSelecionada || produto.categoria === categoriaSelecionada;
    return nomeMatch && categoriaMatch;
  });

  return (
    <section id="Produtos">
      <div className="produtos-container">
        <h1>Crafts</h1>
        <h2>Conheça nossos produtinhos exclusivos pensados e preparados à mão.</h2>
      </div>

      <div className="filtro-container">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="filtro-input"
        />
        <select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          className="filtro-select"
        >
          <option value="">Todas as categorias</option>
          {categoriasUnicas.map((categoria, index) => (
            <option key={index} value={categoria}>{categoria}</option>
          ))}
        </select>
      </div>

      {produtosFiltrados.length === 0 ? (
        <p className="produto-nao-encontrado">Produto não encontrado.</p>
      ) : (
        <div className="produtos-grid">
          {produtosFiltrados.map((produto) => {
            const indiceAtual = indicesImagem[produto.id] || 0;
            return (
              <div key={produto.id} className="produto-card" onClick={() => navigate(`/produto/${produto.id}`)} style={{ cursor: 'pointer' }}>
                <div className="imagem-container" onClick={(e) => e.stopPropagation()}>
                  <img
                    src={produto.imagem[indiceAtual]}
                    alt={produto.nome}
                    className={`imagem-produto ${animandoImagem[produto.id] ? 'fade-out' : ''}`}
                  />
                  {produto.imagem.length > 1 && (
                    <>
                      <button
                        className="seta seta-esquerda"
                        onClick={(e) => {
                          e.stopPropagation();
                          trocarImagemComTransicao(produto.id, produto.imagem, 'anterior');
                        }}
                      >
                        <FaArrowAltCircleLeft />
                      </button>
                      <button
                        className="seta seta-direita"
                        onClick={(e) => {
                          e.stopPropagation();
                          trocarImagemComTransicao(produto.id, produto.imagem, 'proxima');
                        }}
                      >
                        <FaArrowAltCircleRight />
                      </button>
                    </>
                  )}
                </div>
                <p className="preco">{produto.preco}</p>
                <h3>{produto.nome}</h3>
                <p className="descricaoProdutos">{produto.descricao}</p>

                <div className="produto-botoes" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => handleClickWhatsapp(produto.mensagem)}
                    className="botao-whatsapp"
                  >
                    Peça o seu
                  </button>
                  <button
                    onClick={() => adicionarAoCarrinho(produto)}
                    className="botao-carrinho"
                  >
                    <ShoppingCart color="#ffffff" size={20} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <CartModal
        isOpen={carrinhoAberto}
        onClose={() => setCarrinhoAberto(false)}
        itens={carrinhoItens}
        setItens={setCarrinhoItens}
      />
    </section>
  );
}

export default Produtos;
