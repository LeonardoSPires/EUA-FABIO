import styled from 'styled-components'

/**
 * Container principal que centraliza o conteúdo
 * e define a largura máxima da página
 */
export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 70px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
`

/**
 * Barra de navegação topo da página
 * com background fixo e sombra para profundidade
 */
export const BarraNavegacao = styled.nav`
    background: ${(props) => (props.$temScroll ? 'linear-gradient(135deg, #0e273b 0%, #1a3a52 100%);' : 'transparent')};
  box-shadow: ${(props) => (props.$temScroll ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  height: 70px;
  transition: background 0.5s ease, box-shadow 0.5s ease;

  ${ContainerPrincipal} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

/**
 * Logo e tagline da marca
 */
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 50px;
  color: white;

  h1 {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 2px;
  }

`

/**
 * Lista de links de navegação
 */
export const ListaNavegacao = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 20px;
    flex-direction: column;
    gap: 0.25rem;
    background: linear-gradient(135deg, rgba(14, 39, 59, 0.98) 0%, rgba(26, 58, 82, 0.98) 100%);
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    opacity: ${(props) => (props.$aberto ? 1 : 0)};
    transform: ${(props) => (props.$aberto ? 'translateY(8px) scale(1)' : 'translateY(-16px) scale(0.95)')};
    pointer-events: ${(props) => (props.$aberto ? 'auto' : 'none')};
    transition: opacity 0.3s ease, transform 0.3s ease;
    backdrop-filter: blur(10px);
    min-width: 280px;
    width: 100%;
  }
`

export const ItemNavegacao = styled.li`
  a {
    display: none;
    align-items: center;
    gap: 1rem;
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    position: relative;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateX(4px);
      
      div strong {
        color: #64b5f6;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      strong {
        transition: color 0.3s ease;
        font-size: 0.95rem;
      }
    }

    @media (max-width: 768px) {
      display: flex;
      padding: 0.75rem 0.75rem;
    }
  }
`

export const ItemNavegacaoDesktop = styled.li`
  a {
    display: flex;
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 4px;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const IconeItem = styled.span`
  font-size: 1.5rem;
  min-width: 2rem;
  display: none;
  align-items: center;
  justify-content: center;
  animation: bounce 0.6s ease-in-out;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

export const DescricaoItem = styled.span`
  font-size: 0.75rem;
  color: #cbd5e0;
  font-weight: 400;
  transition: color 0.3s ease;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const DivisorMenu = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  margin: 0.75rem 0;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`

export const BotaoSocial = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: rgba(100, 181, 246, 0.3);
    border-color: #64b5f6;
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    display: flex;
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
`

export const ContadorIndicador = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ef5350;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  margin-left: 0.5rem;
`

export const BotaoHamburguer = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const LinhaHamburguer = styled.span`
  width: 26px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:nth-child(1) {
    transform: ${(props) => (props.$aberto ? 'translateY(7px) rotate(45deg)' : 'none')};
  }

  &:nth-child(2) {
    opacity: ${(props) => (props.$aberto ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${(props) => (props.$aberto ? 'translateY(-7px) rotate(-45deg)' : 'none')};
  }
`

export const ContainerRedesSociais = styled.div`
  padding: 0.5rem 10px;
  width: 100%;
  display: none;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`

export const TituloRedesSociais = styled.p`
  font-size: 0.75rem;
  color: #a0aec0;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
`

export const GrupoRedesSociais = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
`
