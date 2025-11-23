# Rick and Morty Web App

Uma aplicação web moderna desenvolvida com Nuxt 3 para exibir personagens da série Rick and Morty, consumindo a API pública [The Rick and Morty API](https://rickandmortyapi.com/).

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[Nuxt 3](https://nuxt.com/)** - Framework Vue.js de próxima geração
- **[Vue 3](https://vuejs.org/)** - Framework JavaScript progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Lucide Icons](https://lucide.dev/)** - Biblioteca de ícones moderna e limpa

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm**, **yarn**, **pnpm** ou **bun** (gerenciador de pacotes)

## 🔧 Instalação

Siga estes passos para configurar o projeto localmente:

1. **Clone o repositório** (ou baixe os arquivos do projeto)

```bash
git clone <https://github.com/edurodrigues0/Rick-and-morty-nuxt.git>
cd nuxt-app
```

2. **Instale as dependências**

Escolha um dos gerenciadores de pacotes abaixo:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 🏃 Executando o Projeto

### Modo Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

O servidor será iniciado em `http://localhost:3000`

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

### Preview da Build de Produção

Para visualizar a build de produção localmente:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

### Gerar Site Estático

Para gerar um site estático:

```bash
# npm
npm run generate

# pnpm
pnpm generate

# yarn
yarn generate

# bun
bun run generate
```

## 📁 Estrutura do Projeto

```
nuxt-app/
├── app/
│   └── app.vue          # Componente principal da aplicação
├── components/
│   └── icons/
│       ├── HeartFilled.vue     # Ícone de coração preenchido
│       └── HeartOutlined.vue   # Ícone de coração vazio
├── middleware/
│   └── 01.removeTrailingSlash.global.ts  # Middleware global
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── nuxt.config.ts       # Configurações do Nuxt
├── package.json         # Dependências e scripts
└── tsconfig.json        # Configurações do TypeScript
```

## ✨ Funcionalidades

- ✅ **Listagem de Personagens**: Exibe todos os personagens da série Rick and Morty
- ✅ **Informações Detalhadas**: Mostra nome, status (Vivo/Morto), espécie e origem de cada personagem
- ✅ **Design Responsivo**: Layout adaptável utilizando Tailwind CSS
- ✅ **Navegação**: Links para mais informações sobre cada personagem
- ✅ **Interface Moderna**: UI dark mode com design moderno e limpo

## 🎨 Interface

A aplicação apresenta:

- **Dark Mode**: Tema escuro (slate-900) para melhor experiência visual
- **Cards Responsivos**: Grid flexível que se adapta a diferentes tamanhos de tela
- **Animações Suaves**: Transições e efeitos hover nos elementos interativos
- **Layout Limpo**: Design minimalista e organizado

## 🔌 API Utilizada

Este projeto consome a [Rick and Morty API](https://rickandmortyapi.com/), uma API REST pública e gratuita que fornece dados sobre personagens, localizações e episódios da série.

**Endpoint utilizado:**
```
https://rickandmortyapi.com/api/character
```

## 📝 Scripts Disponíveis

- `dev` - Inicia o servidor de desenvolvimento
- `build` - Cria a build de produção
- `generate` - Gera um site estático
- `preview` - Visualiza a build de produção localmente
- `postinstall` - Executa `nuxt prepare` após instalação de dependências

## 🛠️ Configurações

### Nuxt Config (`nuxt.config.ts`)

O projeto está configurado com:

- **Tailwind CSS**: Estilização utilitária
- **Lucide Icons**: Ícones modernos
- **DevTools**: Habilitado para desenvolvimento

### TypeScript

O projeto utiliza TypeScript com configurações otimizadas para Nuxt 3.

## 📦 Dependências Principais

- `nuxt`: ^4.2.1
- `vue`: ^3.5.24
- `@nuxtjs/tailwindcss`: 6.14.0
- `nuxt-lucide-icons`: 2.0.0
- `vue-router`: ^4.6.3

## 🚢 Deploy

Para informações sobre deployment, consulte a [documentação oficial do Nuxt](https://nuxt.com/docs/getting-started/deployment).

Algumas plataformas populares para deploy:

- **Vercel**: Deploy automático para aplicações Nuxt
- **Netlify**: Suporte nativo para Nuxt
- **Cloudflare Pages**: Deploy rápido e gratuito
- **GitHub Pages**: Para sites estáticos gerados com `nuxt generate`

## 📄 Licença

Este projeto é privado e de uso pessoal.

## 👨‍💻 Desenvolvido por

Projeto desenvolvido como uma aplicação de demonstração utilizando Nuxt 3 e a API pública do Rick and Morty.

---

**Nota**: Certifique-se de ter uma conexão com a internet para que a aplicação possa buscar os dados da API.
