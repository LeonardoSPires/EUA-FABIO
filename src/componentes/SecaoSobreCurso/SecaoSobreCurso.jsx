/**
 * Componente: SecaoSobreCurso
 * 
 * Exibe os diferenciais do curso em cards com ícones
 * Estrutura: 4 cards em grid responsivo
 */

import { useMemo } from 'react'
import {
    SecaoSobre,
    ContainerPrincipal,
    TituloSecao,
    GradeItens,
    CartaoItem,
} from './styles'
import { DIFERENCIAIS_CURSO } from '../../constants/dados'

const SecaoSobreCurso = () => {
    const diferenciais = useMemo(() => DIFERENCIAIS_CURSO, [])

    return (
        <SecaoSobre id="about">
            <ContainerPrincipal>
                {/* Título da seção */}
                <TituloSecao>About EUA Course</TituloSecao>

                {/* Grade com os diferenciais */}
                <GradeItens>
                    {diferenciais.map((item) => (
                        <CartaoItem key={item.id}>
                            {/* Ícone emoji do diferencial */}
                            <span className="icone">{item.icone}</span>

                            {/* Título do diferencial */}
                            <h3>{item.titulo}</h3>

                            {/* Descrição do diferencial */}
                            <p>{item.descricao}</p>
                        </CartaoItem>
                    ))}
                </GradeItens>
            </ContainerPrincipal>
        </SecaoSobre>
    )
}

export default SecaoSobreCurso
