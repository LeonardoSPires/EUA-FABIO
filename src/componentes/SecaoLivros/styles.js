import styled from 'styled-components'

/**
 * Container principal que centraliza o conteúdo
 */
export const ContainerPrincipal = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
`

/**
 * Seção de livros com fundo gradiente suave
 */
export const SecaoLivros = styled.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  overflow: hidden;
`

/**
 * Título da seção
 */
export const TituloSecao = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a3a52;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`

/**
 * Subtítulo da seção
 */
export const SubtituloSecao = styled.p`
  font-size: 1.125rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
