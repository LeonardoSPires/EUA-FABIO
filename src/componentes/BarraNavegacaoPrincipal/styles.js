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

  li {
    a {
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
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 20px;
    flex-direction: column;
    gap: 0.5rem;
    background: rgba(14, 39, 59, 0.95);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    opacity: ${(props) => (props.$aberto ? 1 : 0)};
    transform: ${(props) => (props.$aberto ? 'translateY(0)' : 'translateY(-8px)')};
    pointer-events: ${(props) => (props.$aberto ? 'auto' : 'none')};
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
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
