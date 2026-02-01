# EUA - English Unlimited for Adults

## Descrição do Projeto

Site moderno e responsivo para o curso de inglês "EUA - English Unlimited for Adults", desenvolvido com React, Vite e Styled Components.

## Tecnologias Utilizadas

- **React 18** - Biblioteca para construir interfaces
- **Vite** - Build tool e dev server ultra-rápido
- **Styled Components** - CSS-in-JS para estilização
- **JavaScript ES6+** - Linguagem de programação

## Estrutura do Projeto

```
src/
├── componentes/
│   ├── BarraNavegacaoPrincipal/      # Navegação superior
│   ├── SecaoHeroiPrincipal/          # Seção de destaque
│   ├── SecaoLivros/                  # Seção com carrossel de livros
│   ├── CarrosselLivros/              # Carrossel 3D interativo
│   ├── SecaoSobreCurso/              # Diferenciais do curso
│   ├── SecaoContatoPrincipal/        # Contato (WhatsApp/Instagram)
│   └── RodapePrincipal/              # Rodapé
├── assets/
│   └── img/                          # Imagens do projeto
├── App.jsx                           # Componente principal
└── main.jsx                          # Ponto de entrada da aplicação

```

## Como Rodar o Projeto

### Instalação de Dependências

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abrirá o servidor de desenvolvimento em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## Deploy na Vercel

### Método 1: Deploy via CLI (Recomendado)

1. Instale o Vercel CLI globalmente:
```bash
npm i -g vercel
```

2. Faça login na Vercel:
```bash
vercel login
```

3. Execute o deploy:
```bash
vercel
```

4. Para deploy em produção:
```bash
vercel --prod
```

### Método 2: Deploy via GitHub

1. Suba seu código para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Add New Project"
4. Importe seu repositório do GitHub
5. As configurações serão detectadas automaticamente
6. Clique em "Deploy"

### Configurações de Deploy

O projeto já está configurado com:
- ✅ `vercel.json` - Configurações de build e rotas
- ✅ `.gitignore` - Arquivos a serem ignorados
- ✅ Build otimizado com Vite
- ✅ SPA routing configurado

## Características

✅ **Navegação Responsiva** - Menu hambúrguer no mobile
✅ **Scroll Suave** - Navegação por âncoras com transição suave
✅ **Carrossel 3D** - Visualização interativa dos livros Oxford
✅ **Design Moderno** - Gradientes, sombras e efeitos hover
✅ **Componentes Modulares** - Código organizado e escalável
✅ **Styled Components** - CSS-in-JS com animações suaves
✅ **Otimizado para Produção** - Build otimizado com Vite
✅ **Deploy Fácil** - Pronto para Vercel

## Componentes

### BarraNavegacaoPrincipal
- Menu responsivo com hambúrguer
- Scroll suave ao clicar

### SecaoHeroiPrincipal
- Hero section com título destacado
- Botões de ação (Comece Agora / Saiba Mais)
- Animações de entrada

### SecaoLivros
- Wrapper para o carrossel de livros
- Título e descrição da seção

### CarrosselLivros
- Carrossel 3D com 5 livros Oxford
- Navegação por botões e indicadores
- Animações suaves de slide
- Efeito hover no livro central
- Sistema de clones para loop infinito

### SecaoSobreCurso
- 4 cards com diferenciais
- Ícones e descrições
- Grid responsivo

### SecaoContatoPrincipal
- Botões WhatsApp e Instagram
- Links diretos para contato
- Design atrativ[SecaoContatoPrincipal.jsx](src/componentes/SecaoContatoPrincipal/SecaoContatoPrincipal.jsx):

```javascript
const canaisContato = [
  {
    id: 1,
    tipo: 'whatsapp',
    label: 'WhatsApp',
    icone: '💬',
    url: 'https://wa.me/SEUNUMERO', // Altere aqui
  },
  // ...
]
```

### Alterar Livros do Carrossel

Edite o arquivo [CarrosselLivros.jsx](src/componentes/CarrosselLivros/CarrosselLivros.jsx) e substitua as imagens em `src/assets/img/`

### Alterar Cores do Tema

Os componentes usam Styled Components. Edite os arquivos `styles.js` de cada componente para ajustar cores, fontes e animações.

### Adicionar Novas Seções

1. Crie uma pasta em `src/componentes/NomeComponente/`
2. Crie `NomeComponente.jsx` e `styles.js`
3. Importe no [App.jsx](src/App.jsx)
### Alterar Cores

Edite o arquivo `src/estilos/EstilosGlobais.js` e procure por:
- `#667eea` - Cor primária azul
- `#764ba2` - Cor primária roxo

### Adicionar Novas Seções

1. Crie um novo arquivo em `src/componentes/`
2. Importe os estilos de `EstilosGlobais.js`
3. Importe no `App.jsx` e adicione à renderização

## Responsividade

O pPerformance

- ⚡ Build otimizado com Vite
- 📦 Code splitting automático
- 🖼️ Imagens otimizadas
- 🎨 CSS-in-JS com styled-components
- 📱 Mobile-first e responsivo

## Melhorias Futuras

- [ ] Adicionar página de depoimentos
- [ ] Integrar formulário de inscrição  
- [ ] Adicionar sistema de CMS
- [ ] Implementar modo escuro
- [ ] SEO e meta tags otimizadas
- [ ] Analytics e tracking
- [ ] Adicionar página de depoimentos
- [ ] Integrar formulário de inscrição
- [ ] Adicionar galeria de fotos
- [ ] Implementar modo escuro
- [ ] Adicionar múltiplos idiomas

## Contato

Para mais informações sobre o curso EUA:
- 📱 WhatsApp: +55 24 99395-5771
- 📸 Instagram: @english.unlimited.for.adults

---

Desenvolvido com ❤️ para EUA - English Unlimited for Adults
