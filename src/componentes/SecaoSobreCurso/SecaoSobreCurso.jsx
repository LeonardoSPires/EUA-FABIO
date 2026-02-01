/**
 * Componente: SecaoSobreCurso
 * 
 * Exibe os diferenciais do curso em cards com ícones
 * Estrutura: 4 cards em grid responsivo
 */

import {
    SecaoSobre,
    ContainerPrincipal,
    TituloSecao,
    GradeItens,
    CartaoItem,
} from './styles'

const SecaoSobreCurso = () => {
    /**
     * Dados dos diferenciais do curso
     * Cada item contém: ícone, título e descrição
     */
    const diferenciais = [
        {
            id: 1,
            icone: '🎯',
            titulo: 'Oxford Method',
            descricao: 'We use the Oxford method, recognized worldwide for its effectiveness in teaching English.',
        },
        {
            id: 2,
            icone: '👥',
            titulo: 'For Adults',
            descricao: 'Classes specially adapted for adults who want to learn English in a practical and objective way.',
        },
        {
            id: 3,
            icone: '🌍',
            titulo: 'Unlimited English',
            descricao: 'No limits to learning. Flexible and personalized classes according to your needs.',
        },
        {
            id: 4,
            icone: '👨‍🏫',
            titulo: 'Experienced Teacher',
            descricao: 'Classes with a private teacher dedicated to your learning and development.',
        },
    ]

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
