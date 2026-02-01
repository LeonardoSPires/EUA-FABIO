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
 * Rodapé da página
 */
export const Rodape = styled.footer`
  background: linear-gradient(135deg, #0e273b 0%, #1a3a52 100%);
  color: white;
  text-align: center;
  padding: 2rem;

  p {
    font-size: 0.875rem;
    opacity: 0.8;
  }
`
