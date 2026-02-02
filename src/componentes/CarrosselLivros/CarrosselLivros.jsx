/**
 * Componente: CarrosselLivros
 * Carrossel 3D interativo com os 5 livros Oxford
 */
import { useState, useEffect } from 'react'
import {
    ContainerCarrossel,
    TrackCarrossel,
    ItemLivro,
    ImagemLivro,
    BotaoNavegacao,
    Indicadores,
    Indicador,
} from './styles'

import livro1 from '../../assets/img/livro-oxford1.jpg'
import livro2 from '../../assets/img/livro-oxford2.jpg'
import livro3 from '../../assets/img/livro-oxford3.jpg'
import livro4 from '../../assets/img/livro-oxford4.jpg'
import livro5 from '../../assets/img/livro-oxford5.jpg'

const CarrosselLivros = () => {
    const livrosOriginais = [
        { id: 1, imagem: livro1, titulo: 'Oxford Book 1' },
        { id: 2, imagem: livro2, titulo: 'Oxford Book 2' },
        { id: 3, imagem: livro3, titulo: 'Oxford Book 3' },
        { id: 4, imagem: livro4, titulo: 'Oxford Book 4' },
        { id: 5, imagem: livro5, titulo: 'Oxford Book 5' },
    ]

    const livros = [
        { ...livrosOriginais[3], idUnico: -2 },
        { ...livrosOriginais[4], idUnico: -1 },
        { ...livrosOriginais[0], idUnico: 0 },
        { ...livrosOriginais[1], idUnico: 1 },
        { ...livrosOriginais[2], idUnico: 2 },
        { ...livrosOriginais[3], idUnico: 3 },
        { ...livrosOriginais[4], idUnico: 4 },
        { ...livrosOriginais[0], idUnico: 5 },
        { ...livrosOriginais[1], idUnico: 6 },
    ]

    const totalLivrosOriginais = livrosOriginais.length
    const indiceInicial = 2

    const [indiceAtual, setIndiceAtual] = useState(indiceInicial)
    const [semTransicao, setSemTransicao] = useState(false)
    const [bloquearAnimacao, setBloquearAnimacao] = useState(false)
    const [indicadorAtivo, setIndicadorAtivo] = useState(0)
    const [direcaoSlide, setDirecaoSlide] = useState('right')
    const [touchInicio, setTouchInicio] = useState(0)
    const [touchFim, setTouchFim] = useState(0)
    const [dragAtivo, setDragAtivo] = useState(false)
    const [distanciaDrag, setDistanciaDrag] = useState(0)

    const obterLivro = (offset) => {
        const indice = (indiceAtual + offset + livros.length) % livros.length
        return livros[indice]
    }

    const proximoLivro = () => {
        setBloquearAnimacao(false)
        setDirecaoSlide('right')
        setIndiceAtual((prev) => prev + 1)
        setIndicadorAtivo((prev) => (prev + 1) % totalLivrosOriginais)
    }

    const livroAnterior = () => {
        setBloquearAnimacao(false)
        setDirecaoSlide('left')
        setIndiceAtual((prev) => prev - 1)
        setIndicadorAtivo((prev) => (prev - 1 + totalLivrosOriginais) % totalLivrosOriginais)
    }

    const irParaLivro = (indice) => {
        setBloquearAnimacao(false)
        setDirecaoSlide(indice > indicadorAtivo ? 'right' : 'left')
        setIndiceAtual(indiceInicial + indice)
        setIndicadorAtivo(indice)
    }

    // Handlers para Touch (Mobile)
    const handleTouchStart = (e) => {
        setTouchInicio(e.touches[0].clientX)
        setDragAtivo(true)
        setDistanciaDrag(0)
    }

    const handleTouchMove = (e) => {
        if (!dragAtivo) return
        const distancia = e.touches[0].clientX - touchInicio
        setDistanciaDrag(distancia)
    }

    const handleTouchEnd = (e) => {
        setDragAtivo(false)
        setTouchFim(e.changedTouches[0].clientX)
        const diferenca = touchInicio - e.changedTouches[0].clientX
        const limiteSwipe = 50

        if (diferenca > limiteSwipe) {
            proximoLivro()
        } else if (diferenca < -limiteSwipe) {
            livroAnterior()
        }

        setDistanciaDrag(0)
    }

    // Handler para Teclado (Arrow Keys)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                proximoLivro()
            } else if (e.key === 'ArrowLeft') {
                livroAnterior()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [bloquearAnimacao])

    useEffect(() => {
        if (indiceAtual >= indiceInicial + totalLivrosOriginais) {
            const timeout = setTimeout(() => {
                setSemTransicao(true)
                setBloquearAnimacao(true)
                setIndiceAtual(indiceInicial)
            }, 500)
            return () => clearTimeout(timeout)
        }

        if (indiceAtual < indiceInicial) {
            const timeout = setTimeout(() => {
                setSemTransicao(true)
                setBloquearAnimacao(true)
                setIndiceAtual(indiceInicial + totalLivrosOriginais - 1)
            }, 500)
            return () => clearTimeout(timeout)
        }

        if (semTransicao) {
            const timeout = setTimeout(() => {
                setSemTransicao(false)
            }, 50)
            return () => clearTimeout(timeout)
        }
    }, [indiceAtual, semTransicao, totalLivrosOriginais, indiceInicial])

    return (
        <>
            <ContainerCarrossel
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <BotaoNavegacao
                    $esquerda
                    onClick={livroAnterior}
                    aria-label="Previous book"
                >
                    ‹
                </BotaoNavegacao>

                <TrackCarrossel $semTransicao={semTransicao} $dragAtivo={dragAtivo}>
                    {[
                        { posicao: 'esquerda', livro: obterLivro(1) },
                        { posicao: 'centro', livro: obterLivro(0) },
                        { posicao: 'direita', livro: obterLivro(-1) },
                    ].map(({ posicao, livro }) => (
                        <ItemLivro key={posicao} $posicao={posicao} $distanciaDrag={dragAtivo ? distanciaDrag : 0}>
                            <ImagemLivro
                                $posicao={posicao}
                                $direcao={direcaoSlide}
                                $semTransicao={semTransicao}
                                $bloquearAnimacao={bloquearAnimacao}
                                $dragAtivo={dragAtivo}
                                key={livro.idUnico}
                                src={livro.imagem}
                                alt={livro.titulo}
                                loading="lazy"
                            />
                        </ItemLivro>
                    ))}
                </TrackCarrossel>

                <BotaoNavegacao
                    $direita
                    onClick={proximoLivro}
                    aria-label="Next book"
                >
                    ›
                </BotaoNavegacao>
            </ContainerCarrossel>

            <Indicadores>
                {livrosOriginais.map((livro, indice) => (
                    <Indicador
                        key={livro.id}
                        $ativo={indicadorAtivo === indice}
                        onClick={() => irParaLivro(indice)}
                        aria-label={`Go to book ${indice + 1}`}
                    />
                ))}
            </Indicadores>
        </>
    )
}

export default CarrosselLivros
