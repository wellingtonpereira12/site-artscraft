import { useParams, useNavigate } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
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

    // Scroll para o topo quando o produto mudar
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    // Selecionar 3 produtos aleatórios (excluindo o produto atual)
    const produtosRelacionados = useMemo(() => {
        if (!produto) return [];

        const outrosProdutos = produtosLista.filter(p => p.id !== produto.id);
        const embaralhados = [...outrosProdutos].sort(() => Math.random() - 0.5);
        return embaralhados.slice(0, 3);
    }, [produto]);

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

    const adicionarAoCarrinho = (produtoParaAdicionar = produto) => {
        setCarrinhoItens(prev => {
            const itemExistente = prev.find(item => item.id === produtoParaAdicionar.id);
            return itemExistente
                ? prev.map(item =>
                    item.id === produtoParaAdicionar.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                )
                : [...prev, { ...produtoParaAdicionar, quantidade: 1 }];
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

            {/* Seção de Produtos Relacionados */}
            {produtosRelacionados.length > 0 && (
                <div className="produtos-relacionados-section">
                    <h2 className="produtos-relacionados-titulo">Produtos Relacionados</h2>
                    <div className="produtos-relacionados-grid">
                        {produtosRelacionados.map(produtoRel => (
                            <div
                                key={produtoRel.id}
                                className="produto-relacionado-card"
                                onClick={() => navigate(`/produto/${produtoRel.id}`)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="produto-relacionado-imagem-container">
                                    <img
                                        src={produtoRel.imagem[0]}
                                        alt={produtoRel.nome}
                                        className="produto-relacionado-imagem"
                                    />
                                </div>
                                <div className="produto-relacionado-info">
                                    <p className="produto-relacionado-preco">{produtoRel.preco}</p>
                                    <h3 className="produto-relacionado-nome">{produtoRel.nome}</h3>
                                    <p className="produto-relacionado-descricao">
                                        {produtoRel.descricao.length > 80
                                            ? `${produtoRel.descricao.substring(0, 80)}...`
                                            : produtoRel.descricao}
                                    </p>

                                    <div className="produto-relacionado-botoes" onClick={(e) => e.stopPropagation()}>
                                        <button
                                            onClick={() => adicionarAoCarrinho(produtoRel)}
                                            className="produto-relacionado-botao-carrinho"
                                        >
                                            <ShoppingCart size={18} />
                                            <span>Adicionar ao Carrinho</span>
                                        </button>
                                        <button
                                            onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(produtoRel.mensagem)}`, '_blank')}
                                            className="produto-relacionado-botao-whatsapp"
                                        >
                                            Peça pelo WhatsApp
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetails;
