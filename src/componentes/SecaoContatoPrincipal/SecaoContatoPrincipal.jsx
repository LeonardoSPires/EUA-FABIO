/**
 * Componente: SecaoContatoPrincipal
 * 
 * Seção com chamada para ação
 * Links diretos para WhatsApp e Instagram
 */

import { useMemo } from 'react'
import {
    SecaoContato,
    ContainerPrincipal,
    TituloSecao,
    SubtituloSecao,
    ConteinerBotoes,
    Botao,
} from './styles'
import { CONTATOS } from '../../constants/dados'

const SecaoContatoPrincipal = () => {
    const contatos = useMemo(() => CONTATOS, [])

    return (
        <SecaoContato id="contact">
            <ContainerPrincipal>
                {/* Título da seção */}
                <TituloSecao>Get in Touch</TituloSecao>

                {/* Subtítulo motivacional */}
                <SubtituloSecao>
                    Ready to start your English journey?
                </SubtituloSecao>

                {/* Botões de contato */}
                <ConteinerBotoes>
                    {contatos.map((contato) => (
                        <Botao
                            key={contato.id}
                            as="a"
                            href={contato.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            $whatsapp={contato.tipo === 'whatsapp'}
                            $instagram={contato.tipo === 'instagram'}
                        >
                            <span>{contato.icone}</span> {contato.label}
                        </Botao>
                    ))}
                </ConteinerBotoes>
            </ContainerPrincipal>
        </SecaoContato>
    )
}

export default SecaoContatoPrincipal
