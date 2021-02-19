## IdopterLabs React Native Template

Esse template tem todas as dependências necessárias para o escopo inicial e estrutura de pastas que usamos nos projetos e que melhor se adequa aos nossos padrões.

Na raiz do projeto temos `.env.example` e nele toda variável tem o prefixo `RN_`, com ele é possível automatizar as variáveis de ambiente do AppCenter

No `babel.config.js` foram pré-configurados alguns `alias` que são referentes às pastas

```JS
alias: {
  src: "./src",
  assets: "./src/assets",
  components: "./src/components",
  contexts: "./src/contexts",
  routes: "./src/routes",
  utils: "./src/utils",
},
```

