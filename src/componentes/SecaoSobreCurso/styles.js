import styled from 'styled-components'

/**
 * Container principal que centraliza o conteúdo
 * e define a largura máxima da página
 */
export const ContainerPrincipal = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

/**
 * Seção "Sobre" com fundo branco
 */
export const SecaoSobre = styled.section`
  padding: 5rem 2rem;
  background: white;
`

/**
 * Título principal de seção
 */
export const TituloSecao = styled.h2`
  font-size: 2.5rem;
  color: #2d3748;
  text-align: center;
  margin-bottom: 3.5rem;
  position: relative;
  padding-bottom: 1rem;

  /* Linha decorativa embaixo do título */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 2px;
  }
`

/**
 * Grade com 4 colunas de itens de "sobre"
 */
export const GradeItens = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

/**
 * Card individual com efeito hover
 */
export const CartaoItem = styled.div`
  background: #f7fafc;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-8px);
    border-color: #667eea;
    box-shadow: 0 12px 24px rgba(102, 126, 234, 0.15);
  }

  /* Ícone emoji grande */
  .icone {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    display: block;
  }

  h3 {
    color: #2d3748;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  p {
    color: #718096;
    line-height: 1.6;
  }
`
