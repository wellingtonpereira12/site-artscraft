// src/components/Carrinho/Carrinho.js
import React, { useCallback, useEffect } from 'react';
import { SquareX } from 'lucide-react';
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

  const calcularTotal = () => {
    return itens.reduce((total, item) => {
      const preco = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
      return total + (preco * item.quantidade);
    }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
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
          <h2 id="titulo-carrinho">Meu Carrinho</h2>
          <button 
            className="carrinho-fechar"
            onClick={onClose}
            aria-label="Fechar carrinho"
          >
            <SquareX size={24} />
          </button>
        </div>

        <div className="carrinho-conteudo">
          {itens.length === 0 ? (
            <p className="carrinho-vazio">Seu carrinho está vazio por enquanto :)</p>
          ) : (
            <>
              {itens.map(item => (
                <div key={item.id} className="carrinho-item">
                  <div className="item-info">
                    <h3 className="item-titulo">{item.nome}</h3>
                    <p className="item-detalhes">
                      {item.preco} × {item.quantidade}
                    </p>
                  </div>
                  <button 
                    className="item-remover"
                    onClick={() => removerItem(item.id)}
                    aria-label="Remover item"
                  >
                    <SquareX size={18} />
                  </button>
                </div>
              ))}
              
              <div className="carrinho-total">
                <span>Total:</span>
                <strong>{calcularTotal()}</strong>
              </div>

              <button 
                className="carrinho-finalizar"
                onClick={() => window.open(`https://wa.me/47991263519?text=${encodeURIComponent(`Olá, gostaria de finalizar a compra dos seguintes itens:\n${itens.map(item => `- ${item.nome} (${item.quantidade}x ${item.preco})`).join('\n')}\nTotal: ${calcularTotal()}`)}`)}
              >
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