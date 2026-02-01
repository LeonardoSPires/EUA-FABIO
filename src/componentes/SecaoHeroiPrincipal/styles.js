import styled from 'styled-components';
import oxfordColorida from '../../assets/img/oxford-colorida.jpg';
import oxfordPretaBranca from '../../assets/img/oxford-pretaebranca.jpg';

export const SecaoHeroi = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: -70px;
  padding-top: 70px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${oxfordColorida});
    background-size: cover;
    background-position: center;
    opacity: ${(props) => (props.$mostrarPrimeiraImagem ? 1 : 0)};
    transition: opacity 4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${oxfordPretaBranca});
    background-size: cover;
    background-position: center;
    opacity: ${(props) => (props.$mostrarPrimeiraImagem ? 0 : 1)};
    transition: opacity 4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${(props) => (props.$mostrarPrimeiraImagem ? 0.3 : 0.5)});
  transition: background-color 4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
`;

export const ContainerTitulo = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-height: 400px;
`;

export const TituloGrande = styled.h1`
  width: 700px;
  text-shadow: #fff 0px 4px 5px;
  padding-bottom: 150px;
  font-family: 'Poppins', sans-serif;
  font-size: 3.7rem;
  font-weight: 700;
  color:  #04052f;
  letter-spacing: 0.05em;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.$mostrarPrimeiraImagem ? 1 : 0)};
  transition: opacity 2s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.2;
  z-index: 5;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    padding-bottom: 30px;
    top: 10%;
    width: 390px; 
    text-align: center;
  }
`;

export const LogoPrincipal = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  opacity: ${(props) => (props.$mostrarPrimeiraImagem ? 0 : 1)};
  transition: opacity 4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    max-width: 300px;
    
  }

  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

export const TituloPequeno = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: white;
  padding-bottom: 30px;
  letter-spacing: 0.02em;
  margin: 0;
  opacity: ${(props) => (props.$mostrarPrimeiraImagem ? 0 : 1)};
  transition: opacity 4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ConteinerBotoes = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  z-index: 4;
  position: relative;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

export const Botao = styled.button`
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  ${(props) => {
    if (props.$primario) {
      return `
        background-color: #1a3a52;
        color: white;

        &:hover {
          background-color: #cb0b0b;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
        }

        &:active {
          transform: translateY(0);
        }
      `;
    } else if (props.$secundario) {
      return `
        background-color: transparent;
        color: white;
        border: 2px solid white;

        &:hover {
          background-color: white;
          color: #007bff;
          transform: translateY(-2px);
        }

        &:active {
          transform: translateY(0);
        }
      `;
    }
  }}

  @media (max-width: 768px) {
    width: 100%;
  }
`;
