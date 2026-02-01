/**
 * Componente: SecaoHeroiPrincipal
 * 
 * Seção destaque da página com:
 * - Título principal
 * - Subtítulo descritivo
 * - Botões de ação (Comece Agora e Saiba Mais)
 */

import { useState, useEffect } from 'react'
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
import logoFabio from '../../assets/img/logo-principal.png'

const SecaoHeroiPrincipal = () => {
    /**
     * Estado para controlar qual imagem mostrar
     * true = oxford-colorida, false = oxford-pretaebranca
     */
    const [mostrarPrimeiraImagem, setMostrarPrimeiraImagem] = useState(true)

    /**
     * useEffect que executa uma vez quando o componente monta
     * Após 2 segundos, troca para a segunda imagem
     */
    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarPrimeiraImagem(false)
        }, 2000) // 2000ms = 2 segundos

        // Cleanup: limpa o timer se o componente for desmontado
        return () => clearTimeout(timer)
    }, []) // Array vazio [] = executa apenas uma vez

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
                        onClick={(e) => {
                            e.preventDefault()
                            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Get Started
                    </Botao>

                    <Botao
                        $secundario
                        as="a"
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault()
                            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Learn More
                    </Botao>
                </ConteinerBotoes>
            </ContainerTitulo>
        </SecaoHeroi>
    )
}

export default SecaoHeroiPrincipal
