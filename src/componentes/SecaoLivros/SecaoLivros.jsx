/**
 * Componente: SecaoLivros
 * Exibe um carrossel 3D interativo com os 5 livros Oxford
 * Suporta navegação por botões e indicadores com animações suaves
 */
import {
    SecaoLivros,
    ContainerPrincipal,
    TituloSecao,
    SubtituloSecao,
} from './styles'

import CarrosselLivros from '../CarrosselLivros/CarrosselLivros'

const SecaoLivrosPrincipal = () => {
    return (
        <SecaoLivros id="books">
            <ContainerPrincipal>
                {/* Título da seção */}
                <TituloSecao>Our Books</TituloSecao>
                <SubtituloSecao>
                    Explore the Oxford series that guides your English learning journey
                </SubtituloSecao>

                <CarrosselLivros />
            </ContainerPrincipal>
        </SecaoLivros>
    )
}

export default SecaoLivrosPrincipal
