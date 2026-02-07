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
 * Seção de contato com fundo gradiente
 */
export const SecaoContato = styled.section`
  background: linear-gradient(135deg, #700101 0%, #ce1818 100%);
  padding: 5rem 2rem;
  text-align: center;
  color: white;
`

/**
 * Título principal de seção
 */
export const TituloSecao = styled.h2`
  font-size: 2.5rem;
  color: white;
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
 * Subtítulo descritivo
 */
export const SubtituloSecao = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
`

/**
 * Container de botões com flexbox
 */
export const ConteinerBotoes = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`

/**
 * Componente base de botão com variações
 * de estilos através de props
 */
export const Botao = styled.button`
  padding: 0.75rem 2rem;
  width: 200px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  /* Botão WhatsApp */
  ${(props) =>
        props.$whatsapp &&
        `
    background: #25D366;
    color: white;
    
    &:hover {
      background: #20ba5a;
      transform: scale(1.05);
    }
  `}

  /* Botão Instagram */
  ${(props) =>
        props.$instagram &&
        `
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    color: white;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  `}
`
