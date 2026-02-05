/**
 * Componente: CarrosselLivros
 * Carrossel 3D interativo com os 5 livros Oxford (Otimizado)
 */
import { useState, useEffect, useCallback, useMemo } from 'react'
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
    // Dados memorizados (não mudam)
    const livrosOriginais = useMemo(() => [
        { id: 1, imagem: livro1, titulo: 'Oxford Book 1' },
        { id: 2, imagem: livro2, titulo: 'Oxford Book 2' },
        { id: 3, imagem: livro3, titulo: 'Oxford Book 3' },
        { id: 4, imagem: livro4, titulo: 'Oxford Book 4' },
        { id: 5, imagem: livro5, titulo: 'Oxford Book 5' },
    ], [])

    const { livros, totalLivrosOriginais, indiceInicial } = useMemo(() => {
        const total = livrosOriginais.length
        const inicio = 2
        const livrosComClones = [
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
        return { livros: livrosComClones, totalLivrosOriginais: total, indiceInicial: inicio }
    }, [livrosOriginais])

    // Estados consolidados
    const [indiceAtual, setIndiceAtual] = useState(indiceInicial)
    const [transicao, setTransicao] = useState({ sem: false, bloqueada: false })
    const [indicadorAtivo, setIndicadorAtivo] = useState(0)
    const [direcaoSlide, setDirecaoSlide] = useState('right')
    const [drag, setDrag] = useState({ ativo: false, inicio: 0, distancia: 0 })

    // Função consolidada de navegação
    const navegarCarrossel = useCallback((direcao) => {
        setTransicao({ sem: false, bloqueada: false })
        setDirecaoSlide(direcao > 0 ? 'right' : 'left')
        setIndiceAtual(prev => prev + direcao)
        setIndicadorAtivo(prev => (prev + direcao + totalLivrosOriginais) % totalLivrosOriginais)
    }, [totalLivrosOriginais])

    const obterLivro = useCallback((offset) => {
        const indice = (indiceAtual + offset + livros.length) % livros.length
        return livros[indice]
    }, [indiceAtual, livros])

    const irParaLivro = useCallback((indice) => {
        setTransicao({ sem: false, bloqueada: false })
        setDirecaoSlide(indice > indicadorAtivo ? 'right' : 'left')
        setIndiceAtual(indiceInicial + indice)
        setIndicadorAtivo(indice)
    }, [indicadorAtivo, indiceInicial])

    // Handlers touch unificados
    const handleTouchStart = useCallback((e) => {
        setDrag({ ativo: true, inicio: e.touches[0].clientX, distancia: 0 })
    }, [])

    const handleTouchMove = useCallback((e) => {
        if (!drag.ativo) return
        setDrag(prev => ({ ...prev, distancia: e.touches[0].clientX - prev.inicio }))
    }, [drag.ativo])

    const handleTouchEnd = useCallback((e) => {
        const diferenca = drag.inicio - e.changedTouches[0].clientX
        const limiteSwipe = 50

        if (diferenca > limiteSwipe) navegarCarrossel(1)
        else if (diferenca < -limiteSwipe) navegarCarrossel(-1)

        setDrag({ ativo: false, inicio: 0, distancia: 0 })
    }, [drag.inicio, navegarCarrossel])

    // Handler de teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') navegarCarrossel(1)
            else if (e.key === 'ArrowLeft') navegarCarrossel(-1)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [navegarCarrossel])

    // Loop infinito
    useEffect(() => {
        if (indiceAtual >= indiceInicial + totalLivrosOriginais) {
            const timeout = setTimeout(() => {
                setTransicao({ sem: true, bloqueada: true })
                setIndiceAtual(indiceInicial)
            }, 500)
            return () => clearTimeout(timeout)
        }

        if (indiceAtual < indiceInicial) {
            const timeout = setTimeout(() => {
                setTransicao({ sem: true, bloqueada: true })
                setIndiceAtual(indiceInicial + totalLivrosOriginais - 1)
            }, 500)
            return () => clearTimeout(timeout)
        }

        if (transicao.sem) {
            const timeout = setTimeout(() => setTransicao(prev => ({ ...prev, sem: false })), 50)
            return () => clearTimeout(timeout)
        }
    }, [indiceAtual, transicao.sem, totalLivrosOriginais, indiceInicial])

    return (
        <>
            <ContainerCarrossel
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <BotaoNavegacao
                    $esquerda
                    onClick={() => navegarCarrossel(-1)}
                    aria-label="Previous book"
                >
                    ‹
                </BotaoNavegacao>

                <TrackCarrossel $semTransicao={transicao.sem} $dragAtivo={drag.ativo}>
                    {[
                        { posicao: 'esquerda', livro: obterLivro(1) },
                        { posicao: 'centro', livro: obterLivro(0) },
                        { posicao: 'direita', livro: obterLivro(-1) },
                    ].map(({ posicao, livro }) => (
                        <ItemLivro
                            key={posicao}
                            $posicao={posicao}
                            $distanciaDrag={drag.ativo ? drag.distancia : 0}
                        >
                            <ImagemLivro
                                $posicao={posicao}
                                $direcao={direcaoSlide}
                                $semTransicao={transicao.sem}
                                $bloquearAnimacao={transicao.bloqueada}
                                $dragAtivo={drag.ativo}
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
                    onClick={() => navegarCarrossel(1)}
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
