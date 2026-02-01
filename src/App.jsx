/**
 * Aplicação Principal: App
 * 
 * Componente raiz que agrupa todos os componentes da página
 * Renderiza:
 * 1. Barra de navegação
 * 2. Seção herói (destaque)
 * 3. Seção sobre o curso
 * 4. Seção de contato
 * 5. Rodapé
 */

import BarraNavegacaoPrincipal from './componentes/BarraNavegacaoPrincipal/BarraNavegacaoPrincipal'
import SecaoHeroiPrincipal from './componentes/SecaoHeroiPrincipal/SecaoHeroiPrincipal'
import SecaoLivros from './componentes/SecaoLivros/SecaoLivros'
import SecaoSobreCurso from './componentes/SecaoSobreCurso/SecaoSobreCurso'
import SecaoContatoPrincipal from './componentes/SecaoContatoPrincipal/SecaoContatoPrincipal'
import RodapePrincipal from './componentes/RodapePrincipal/RodapePrincipal'

function App() {
    return (
        <>
            {/* Barra de navegação fixa no topo */}
            <BarraNavegacaoPrincipal />

            {/* Seção herói com apresentação principal */}
            <SecaoHeroiPrincipal />

            {/* Seção com carrossel de livros Oxford */}
            <SecaoLivros />

            {/* Seção com diferenciais do curso */}
            <SecaoSobreCurso />

            {/* Seção com botões de contato */}
            <SecaoContatoPrincipal />

            {/* Rodapé com informações de copyright */}
            <RodapePrincipal />
        </>
    )
}

export default App
