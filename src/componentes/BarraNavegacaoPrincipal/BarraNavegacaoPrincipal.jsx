/**
 * Componente: BarraNavegacaoPrincipal
 * 
 * Responsável pela navegação superior do site
 * Contém o logo, tagline e links de navegação
 */

import { useState, useEffect, useCallback, useMemo } from 'react'
import {
    BarraNavegacao,
    ContainerPrincipal,
    Logo,
    ListaNavegacao,
    BotaoHamburguer,
    LinhaHamburguer,
    ItemNavegacao,
    IconeItem,
    BotaoSocial,
    DivisorMenu,
    DescricaoItem,
    ContainerRedesSociais,
    TituloRedesSociais,
    GrupoRedesSociais,
    ItemNavegacaoDesktop,
} from './styles'
import { useScrollSmooth } from '../../hooks/useScrollSmooth'
import { LINKS_NAVEGACAO, CONTATOS } from '../../constants/dados'

import logoHeader from '../../assets/img/logo-header.png'
import whatsappIcon from '../../assets/img/whatsapp-icon.svg'

const BarraNavegacaoPrincipal = () => {
    const [temScroll, setTemScroll] = useState(false)
    const [menuAberto, setMenuAberto] = useState(false)
    const scrollSmooth = useScrollSmooth()

    // Memoizar dados estáticos
    const linksNavegacao = useMemo(() => LINKS_NAVEGACAO, [])
    const contatosSociais = useMemo(() => CONTATOS, [])

    useEffect(() => {
        const handleScroll = () => {
            setTemScroll(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkScroll = useCallback((evento) => {
        evento.preventDefault()
        const alvo = evento.currentTarget.getAttribute('href')
        scrollSmooth(alvo)
        setMenuAberto(false)
    }, [scrollSmooth])

    const handleLogoClick = useCallback(() => {
        scrollSmooth('#home')
        setMenuAberto(false)
    }, [scrollSmooth])

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
                    {linksNavegacao.map((link) => (
                        <ItemNavegacaoDesktop key={link.id}>
                            <a href={`#${link.id}`} onClick={handleLinkScroll}>
                                {link.label}
                            </a>
                        </ItemNavegacaoDesktop>
                    ))}

                    {/* MOBILE - Com ícones e descrições */}
                    {linksNavegacao.map((link) => (
                        <ItemNavegacao key={`mobile-${link.id}`}>
                            <a href={`#${link.id}`} onClick={handleLinkScroll}>
                                <IconeItem>{link.icone}</IconeItem>
                                <div>
                                    <strong>{link.label}</strong>
                                    <DescricaoItem>{link.descricao}</DescricaoItem>
                                </div>
                            </a>
                        </ItemNavegacao>
                    ))}

                    <DivisorMenu />

                    <ContainerRedesSociais>
                        <TituloRedesSociais>REDES SOCIAIS</TituloRedesSociais>
                        <GrupoRedesSociais>
                            {contatosSociais.map((contato) => (
                                <BotaoSocial
                                    key={contato.id}
                                    href={contato.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={contato.label}
                                >
                                    {contato.tipo === 'whatsapp' ? (
                                        <img src={whatsappIcon} alt="WhatsApp" style={{ width: '24px', height: '24px' }} />
                                    ) : (
                                        contato.icone
                                    )}
                                </BotaoSocial>
                            ))}
                        </GrupoRedesSociais>
                    </ContainerRedesSociais>
                </ListaNavegacao>
            </ContainerPrincipal>
        </BarraNavegacao>
    )
}

export default BarraNavegacaoPrincipal
