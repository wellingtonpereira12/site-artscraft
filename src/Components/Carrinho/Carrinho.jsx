// src/components/Carrinho/Carrinho.js
import React, { useCallback, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import './Carrinho.css';

const Carrinho = ({ isOpen, onClose, itens, setItens }) => {
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const handleClickFora = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const removerItem = (id) => {
    setItens(prev => prev.filter(item => item.id !== id));
  };

  const atualizarQuantidade = (id, novaQuantidade) => {
    if (novaQuantidade < 1) {
      removerItem(id);
      return;
    }
    setItens(prev => prev.map(item =>
      item.id === id ? { ...item, quantidade: novaQuantidade } : item
    ));
  };

  const calcularTotal = () => {
    return itens.reduce((total, item) => {
      const preco = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
      return total + (preco * item.quantidade);
    }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const calcularSubtotal = (item) => {
    const preco = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
    return (preco * item.quantidade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="carrinho-overlay"
      onClick={handleClickFora}
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-carrinho"
    >
      <div className="carrinho-modal">
        <div className="carrinho-cabecalho">
          <div className="cabecalho-titulo">
            <ShoppingBag size={24} className="carrinho-icone" />
            <h2 id="titulo-carrinho">Meu Carrinho</h2>
            {itens.length > 0 && <span className="carrinho-badge">{itens.length}</span>}
          </div>
          <button
            className="carrinho-fechar"
            onClick={onClose}
            aria-label="Fechar carrinho"
          >
            <X size={24} />
          </button>
        </div>

        <div className="carrinho-conteudo">
          {itens.length === 0 ? (
            <div className="carrinho-vazio">
              <ShoppingBag size={64} className="icone-vazio" />
              <p>Seu carrinho está vazio</p>
              <span className="texto-secundario">Adicione produtos para começar!</span>
            </div>
          ) : (
            <>
              <div className="carrinho-itens">
                {itens.map((item, index) => (
                  <div key={item.id} className="carrinho-item" style={{ animationDelay: `${index * 0.05}s` }}>
                    {item.imagem && item.imagem[0] && (
                      <div className="item-imagem">
                        <img src={item.imagem[0]} alt={item.nome} />
                      </div>
                    )}
                    <div className="item-detalhes">
                      <h3 className="item-titulo">{item.nome}</h3>
                      <p className="item-preco">{item.preco}</p>
                      <div className="item-quantidade">
                        <button
                          className="quantidade-btn"
                          onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                          aria-label="Diminuir quantidade"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="quantidade-valor">{item.quantidade}</span>
                        <button
                          className="quantidade-btn"
                          onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                          aria-label="Aumentar quantidade"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="item-acoes">
                      <span className="item-subtotal">{calcularSubtotal(item)}</span>
                      <button
                        className="item-remover"
                        onClick={() => removerItem(item.id)}
                        aria-label="Remover item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="carrinho-resumo">
                <div className="resumo-linha">
                  <span>Subtotal</span>
                  <span>{calcularTotal()}</span>
                </div>
                <div className="resumo-linha total">
                  <span>Total</span>
                  <strong>{calcularTotal()}</strong>
                </div>
              </div>

              <button
                className="carrinho-finalizar"
                onClick={() => window.open(`https://wa.me/47991263519?text=${encodeURIComponent(`Olá, gostaria de finalizar a compra dos seguintes itens:\n${itens.map(item => `- ${item.nome} (${item.quantidade}x ${item.preco})`).join('\n')}\nTotal: ${calcularTotal()}`)}`)}
              >
                <ShoppingBag size={20} />
                Finalizar Compra pelo WhatsApp
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
