/**
 * Componente: SecaoContatoPrincipal
 * 
 * Seção com chamada para ação
 * Links diretos para WhatsApp e Instagram
 */

import {
    SecaoContato,
    ContainerPrincipal,
    TituloSecao,
    SubtituloSecao,
    ConteinerBotoes,
    Botao,
} from './styles'

const SecaoContatoPrincipal = () => {
    /**
     * Dados de contato
     * URLs estão configuradas com a formatação de prévia de mensagem
     */
    const contatos = [
        {
            id: 1,
            tipo: 'whatsapp',
            label: 'WhatsApp',
            icone: '💬',
            url: 'https://wa.me/5524992795300?text=Hello,%20I%20want%20to%20start%20the%20course!',
        },
        {
            id: 2,
            tipo: 'instagram',
            label: 'Instagram',
            icone: '📸',
            url: 'https://www.instagram.com/english.unlimited.for.adults/',
        },
    ]

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
