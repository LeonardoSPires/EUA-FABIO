/**
 * Componente: BarraNavegacaoPrincipal
 * 
 * Responsável pela navegação superior do site
 * Contém o logo, tagline e links de navegação
 */

import { useState, useEffect } from 'react'
import {
    BarraNavegacao,
    ContainerPrincipal,
    Logo,
    ListaNavegacao,
    BotaoHamburguer,
    LinhaHamburguer,
    ItemNavegacao,
    IconeItem,
    ContadorIndicador,
    BotaoSocial,
    DivisorMenu,
    DescricaoItem,
    ContainerRedesSociais,
    TituloRedesSociais,
    GrupoRedesSociais,
    ItemNavegacaoDesktop,
} from './styles'

import logoHeader from '../../assets/img/logo-header.png'

const BarraNavegacaoPrincipal = () => {
    /**
     * Estado para controlar se o usuário fez scroll
     */
    const [temScroll, setTemScroll] = useState(false)
    const [menuAberto, setMenuAberto] = useState(false)

    /**
     * useEffect para detectar scroll na página
     */
    useEffect(() => {
        const handleScroll = () => {
            // Se scrollou mais de 50px, muda a cor do header
            if (window.scrollY > 50) {
                setTemScroll(true)
            } else {
                setTemScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    /**
     * Função para scroll suave quando clicar em um link
     * @param {Event} evento - Evento do clique
     */
    const handleLinkScroll = (evento) => {
        evento.preventDefault()
        const alvo = evento.target.getAttribute('href')
        const elemento = document.querySelector(alvo)

        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth' })
        }

        setMenuAberto(false)
    }

    /**
     * Função para scroll ao home ao clicar no logo
     */
    const handleLogoClick = () => {
        const homeElement = document.querySelector('#home')
        if (homeElement) {
            homeElement.scrollIntoView({ behavior: 'smooth' })
        }
        setMenuAberto(false)
    }

    return (
        <BarraNavegacao $temScroll={temScroll}>
            <ContainerPrincipal>
                {/* Logo e tagline */}
                <Logo onClick={handleLogoClick} role="button" tabIndex={0} style={{ cursor: 'pointer' }}>
                    <img src={logoHeader} alt="Logo EUA - English Unlimited for Adults" />
                </Logo>

                <BotaoHamburguer
                    type="button"
                    aria-label="Abrir menu"
                    aria-expanded={menuAberto}
                    aria-controls="menu-principal"
                    onClick={() => setMenuAberto((estadoAtual) => !estadoAtual)}
                >
                    <LinhaHamburguer $aberto={menuAberto} />
                    <LinhaHamburguer $aberto={menuAberto} />
                    <LinhaHamburguer $aberto={menuAberto} />
                </BotaoHamburguer>

                {/* Links de navegação */}
                <ListaNavegacao id="menu-principal" $aberto={menuAberto}>
                    {/* DESKTOP - Links simples */}
                    <ItemNavegacaoDesktop>
                        <a href="#home" onClick={handleLinkScroll}>Home</a>
                    </ItemNavegacaoDesktop>
                    <ItemNavegacaoDesktop>
                        <a href="#books" onClick={handleLinkScroll}>Books</a>
                    </ItemNavegacaoDesktop>
                    <ItemNavegacaoDesktop>
                        <a href="#about" onClick={handleLinkScroll}>About</a>
                    </ItemNavegacaoDesktop>
                    <ItemNavegacaoDesktop>
                        <a href="#contact" onClick={handleLinkScroll}>Contact</a>
                    </ItemNavegacaoDesktop>

                    {/* MOBILE - Com ícones e descrições */}
                    <ItemNavegacao>
                        <a href="#home" onClick={handleLinkScroll}>
                            <IconeItem>🏠</IconeItem>
                            <div>
                                <strong>Home</strong>
                                <DescricaoItem>Voltar ao início</DescricaoItem>
                            </div>
                        </a>
                    </ItemNavegacao>

                    <ItemNavegacao>
                        <a href="#books" onClick={handleLinkScroll}>
                            <IconeItem>📚</IconeItem>
                            <div>
                                <strong>Books</strong>
                                <DescricaoItem>Nossos livros Oxford</DescricaoItem>
                            </div>
                        </a>
                    </ItemNavegacao>

                    <ItemNavegacao>
                        <a href="#about" onClick={handleLinkScroll}>
                            <IconeItem>ℹ️</IconeItem>
                            <div>
                                <strong>About</strong>
                                <DescricaoItem>Sobre o curso</DescricaoItem>
                            </div>
                        </a>
                    </ItemNavegacao>

                    <ItemNavegacao>
                        <a href="#contact" onClick={handleLinkScroll}>
                            <IconeItem>✉️</IconeItem>
                            <div>
                                <strong>Contact</strong>
                                <DescricaoItem>Entre em contato</DescricaoItem>
                            </div>
                        </a>
                    </ItemNavegacao>

                    <DivisorMenu />

                    <ContainerRedesSociais>
                        <TituloRedesSociais>REDES SOCIAIS</TituloRedesSociais>
                        <GrupoRedesSociais>
                            <BotaoSocial href="#" aria-label="Instagram">
                                📱
                            </BotaoSocial>
                            <BotaoSocial href="#" aria-label="Facebook">
                                f
                            </BotaoSocial>
                            <BotaoSocial href="#" aria-label="WhatsApp">
                                💬
                            </BotaoSocial>
                        </GrupoRedesSociais>
                    </ContainerRedesSociais>
                </ListaNavegacao>
            </ContainerPrincipal>
        </BarraNavegacao>
    )
}

export default BarraNavegacaoPrincipal
