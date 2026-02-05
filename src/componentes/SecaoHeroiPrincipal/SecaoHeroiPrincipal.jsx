/**
 * Componente: SecaoHeroiPrincipal
 * 
 * Seção destaque da página com:
 * - Título principal
 * - Subtítulo descritivo
 * - Botões de ação (Comece Agora e Saiba Mais)
 */

import { useState, useEffect, useCallback } from 'react'
import {
    SecaoHeroi,
    ContainerTitulo,
    ConteinerBotoes,
    Botao,
    LogoPrincipal,
    TituloPequeno,
    TituloGrande,
    Overlay,
} from './styles'
import { useScrollSmooth } from '../../hooks/useScrollSmooth'

import logoFabio from '../../assets/img/logo-principal.png'

const SecaoHeroiPrincipal = () => {
    const [mostrarPrimeiraImagem, setMostrarPrimeiraImagem] = useState(true)
    const scrollSmooth = useScrollSmooth()

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarPrimeiraImagem(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    const handleBotaoClick = useCallback((e, targetId) => {
        e.preventDefault()
        scrollSmooth(`#${targetId}`)
    }, [scrollSmooth])

    return (
        <SecaoHeroi id="home" $mostrarPrimeiraImagem={mostrarPrimeiraImagem}>
            <Overlay $mostrarPrimeiraImagem={mostrarPrimeiraImagem} />
            <ContainerTitulo>
                {/* Título GRANDE com transição sincronizada */}
                <TituloGrande $mostrarPrimeiraImagem={mostrarPrimeiraImagem}>
                    English Unlimited for Adults
                </TituloGrande>

                {/* Logo do Fabio com transição sincronizada */}
                <LogoPrincipal src={logoFabio} alt="Logo Fabio" $mostrarPrimeiraImagem={mostrarPrimeiraImagem} />

                <TituloPequeno $mostrarPrimeiraImagem={mostrarPrimeiraImagem}>
                    English Unlimited for Adults
                </TituloPequeno>

                {/* Botões de ação embaixo da logo */}
                <ConteinerBotoes>
                    <Botao
                        $primario
                        as="a"
                        href="#contact"
                        onClick={(e) => handleBotaoClick(e, 'contact')}
                    >
                        Get Started
                    </Botao>

                    <Botao
                        $secundario
                        as="a"
                        href="#about"
                        onClick={(e) => handleBotaoClick(e, 'about')}
                    >
                        Learn More
                    </Botao>
                </ConteinerBotoes>
            </ContainerTitulo>
        </SecaoHeroi>
    )
}

export default SecaoHeroiPrincipal
