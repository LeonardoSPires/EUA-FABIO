/**
 * Componente: RodapePrincipal
 * 
 * Rodapé da página com informações de copyright
 */

import { Rodape, ContainerPrincipal } from './styles'

const RodapePrincipal = () => {
    const anoAtual = new Date().getFullYear()

    return (
        <Rodape>
            <ContainerPrincipal>
                <p>
                    &copy; {anoAtual} EUA - English Unlimited for Adults. All rights reserved. | Created by Leonardo Pires
                </p>
            </ContainerPrincipal>
        </Rodape>
    )
}

export default RodapePrincipal
