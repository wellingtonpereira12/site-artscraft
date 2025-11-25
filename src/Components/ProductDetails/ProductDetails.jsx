import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowLeft } from "react-icons/fa";
import { ShoppingCart } from 'lucide-react';
import { produtosLista } from '../../data/produtosData';
import './ProductDetails.css';

function ProductDetails({ carrinhoItens, setCarrinhoItens }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const produto = produtosLista.find(p => p.id === parseInt(id));

    const [indiceImagem, setIndiceImagem] = useState(0);
    const [animandoImagem, setAnimandoImagem] = useState(false);
    const phoneNumber = '47991263519';

    if (!produto) {
        return (
            <div className="produto-nao-encontrado-page">
                <h2>Produto não encontrado</h2>
                <button onClick={() => navigate('/')} className="botao-voltar">
                    <FaArrowLeft /> Voltar para a página inicial
                </button>
            </div>
        );
    }

    const trocarImagemComTransicao = (direcao) => {
        setAnimandoImagem(true);

        setTimeout(() => {
            setIndiceImagem(prev => {
                if (direcao === 'proxima') {
                    return (prev + 1) % produto.imagem.length;
                } else {
                    return (prev - 1 + produto.imagem.length) % produto.imagem.length;
                }
            });
            setAnimandoImagem(false);
        }, 250);
    };

    const adicionarAoCarrinho = () => {
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
        alert('Produto adicionado ao carrinho!');
    };

    const handleClickWhatsapp = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(produto.mensagem)}`, '_blank');
    };

    return (
        <div className="product-details-page">
            <div className="botao-voltar-container">
                <button onClick={() => navigate('/')} className="botao-voltar">
                    <FaArrowLeft /> Voltar
                </button>
            </div>

            <div className="product-details-container">
                <div className="product-details-galeria">
                    <div className="imagem-principal-container">
                        <img
                            src={produto.imagem[indiceImagem]}
                            alt={produto.nome}
                            className={`imagem-principal ${animandoImagem ? 'fade-out' : ''}`}
                        />
                        {produto.imagem.length > 1 && (
                            <>
                                <button
                                    className="seta seta-esquerda"
                                    onClick={() => trocarImagemComTransicao('anterior')}
                                >
                                    <FaArrowAltCircleLeft />
                                </button>
                                <button
                                    className="seta seta-direita"
                                    onClick={() => trocarImagemComTransicao('proxima')}
                                >
                                    <FaArrowAltCircleRight />
                                </button>
                            </>
                        )}
                    </div>

                    {produto.imagem.length > 1 && (
                        <div className="miniaturas-container">
                            {produto.imagem.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${produto.nome} - ${index + 1}`}
                                    className={`miniatura ${index === indiceImagem ? 'ativa' : ''}`}
                                    onClick={() => setIndiceImagem(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="product-details-info">
                    <span className="categoria-badge">{produto.categoria}</span>
                    <h1>{produto.nome}</h1>
                    <p className="preco-detalhes">{produto.preco}</p>
                    <p className="descricao-detalhes">{produto.descricao}</p>

                    <div className="acoes-container">
                        <button
                            onClick={adicionarAoCarrinho}
                            className="botao-adicionar-carrinho"
                        >
                            <ShoppingCart size={20} />
                            Adicionar ao Carrinho
                        </button>
                        <button
                            onClick={handleClickWhatsapp}
                            className="botao-whatsapp-detalhes"
                        >
                            Peça pelo WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
