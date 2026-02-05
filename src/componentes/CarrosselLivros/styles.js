import styled, { keyframes, css } from 'styled-components'

const slideInCenterRight = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(60px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`

const slideInCenterLeft = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(-60px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`

const slideSideRight = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(70px) scale(0.94);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`

const slideSideLeft = keyframes`
  from {
    opacity: 0.5;
    transform: translateX(-70px) scale(0.94);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
`

export const ContainerCarrossel = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  overflow: hidden;
  padding: 3.5rem 0;
  perspective: 2000px;
  perspective-origin: center center;

  @media (max-width: 768px) {
    max-width: 1100px;
    perspective: 2000px;
  }
`

export const TrackCarrossel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: ${(props) => (props.$semTransicao || props.$dragAtivo ? 'none' : 'opacity 0.3s ease')};
  transform-style: preserve-3d;
`

export const ItemLivro = styled.div`
  min-width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  transition: ${(props) => props.$distanciaDrag !== 0 ? 'none' : 'transform 0.5s ease, opacity 0.5s ease'};
  transform: ${(props) => {
  let baseTransform = ''
  if (props.$posicao === 'esquerda') baseTransform = 'scale(0.9) rotateY(-45deg)'
  else if (props.$posicao === 'centro') baseTransform = 'scale(1) rotateY(0deg)'
  else if (props.$posicao === 'direita') baseTransform = 'scale(0.9) rotateY(45deg)'
  else baseTransform = 'scale(0.9)'

  if (props.$distanciaDrag !== 0 && props.$posicao === 'centro') {
    return `${baseTransform} translateX(${props.$distanciaDrag * 0.5}px)`
  }
  return baseTransform
    }};
  transform-style: preserve-3d;
  opacity: ${(props) => (props.$posicao === 'centro' ? 1 : 0.8)};
  z-index: ${(props) => (props.$posicao === 'centro' ? 10 : 5)};

  @media (max-width: 768px) {
    min-width: 40%;
    padding: 0 0.25rem;
    transform: ${(props) => {
  let baseTransform = ''
  if (props.$posicao === 'esquerda') baseTransform = 'scale(0.85) rotateY(-65deg)'
  else if (props.$posicao === 'centro') baseTransform = 'scale(1) rotateY(0deg)'
  else if (props.$posicao === 'direita') baseTransform = 'scale(0.85) rotateY(65deg)'
  else baseTransform = 'scale(0.75)'

  if (props.$distanciaDrag !== 0 && props.$posicao === 'centro') {
    return `${baseTransform} translateX(${props.$distanciaDrag * 0.5}px)`
  }
  return baseTransform
    }};
  }
`

export const ImagemLivro = styled.img`
  max-width: 280px;
  width: 100%;
  height: auto;
  padding-bottom: 10px;
  border-radius: 12px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3), 
              0 10px 25px rgba(0, 0, 0, 0.2);
  transition: ${(props) => (props.$dragAtivo ? 'none' : 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease')};
  cursor: ${(props) => (props.$dragAtivo ? 'grabbing' : 'grab')};
  position: relative;
  z-index: ${(props) => (props.$posicao === 'centro' ? 10 : 1)};

  ${(props) => {
    if (props.$semTransicao || props.$bloquearAnimacao) return css``

    if (props.$posicao === 'centro' && props.$direcao === 'left') {
      return css`animation: ${slideInCenterRight} 0.7s ease;`
    }
    if (props.$posicao === 'centro' && props.$direcao === 'right') {
      return css`animation: ${slideInCenterLeft} 0.7s ease;`
    }
    if (props.$posicao === 'esquerda' && props.$direcao === 'left') {
      return css`animation: ${slideSideRight} 0.7s ease;`
    }
    if (props.$posicao === 'esquerda' && props.$direcao === 'right') {
      return css`animation: ${slideSideLeft} 0.7s ease;`
    }
    if (props.$posicao === 'direita' && props.$direcao === 'left') {
      return css`animation: ${slideSideRight} 0.7s ease;`
    }
    if (props.$posicao === 'direita' && props.$direcao === 'right') {
      return css`animation: ${slideSideLeft} 0.7s ease;`
    }
    return css``
  }}

  &:hover {
    transform: ${(props) => (props.$posicao === 'centro' && !props.$dragAtivo ? 'scale(1.05) translateY(-5px)' : 'none')};
    box-shadow: ${(props) => (props.$posicao === 'centro' && !props.$dragAtivo
        ? '0 15px 25px rgba(0, 0, 0, 0.4), 0 15px 30px rgba(0, 0, 0, 0.25)'
        : '0 10px 15px rgba(0, 0, 0, 0.3), 0 10px 25px rgba(0, 0, 0, 0.2)')};
  }

  @media (max-width: 768px) {
    max-width: 360px;
    width: 120%;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    width: 120%;
  }
`

export const BotaoNavegacao = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$esquerda ? 'left: 10px;' : '')}
  ${(props) => (props.$direita ? 'right: 10px;' : '')}
  width: 50px;
  height: 50px;
  background: rgba(26, 58, 82, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(26, 58, 82, 1);
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
`

export const Indicadores = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const Indicador = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.$ativo ? '#1a3a52' : '#cfd8dc')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #1a3a52;
    transform: scale(1.2);
  }
`
