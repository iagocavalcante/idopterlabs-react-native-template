# Idopter Labs React Native Template

🇺🇸 Scroll down for an english version.

🇧🇷 Este template contém bibliotecas e padrões de projeto que adotamos em aplicativos React Native na Idopter Labs.

## Usando o template

`npx react-native init fifaSearch --template @iagocavalcante/idopterlabs-react-native-template`

## Variáveis de Ambiente

O arquivo `.env.example` é um exemplo de como o aplicativo lê variáveis de ambiente. Todas as variáveis de ambiente devem adotar o prefixo `RN_`. Com isso, conseguimos integrá-las ao nosso processo de desenvolvimento e ao mesmo tempo ao processo de Continuous Integration (CI) utilizando o AppCenter.

Copie ou modifique o arquivo para `.env`. Variáveis de ambiente adicionadas a este arquivo devem também ser adicionadas ao arquivo `src/utils/envs.js`.

## Resolução de Módulos

No arquivo `babel.config.js` encontram-se alguns `alias` pre-configurados:

```JS
alias: {
  "@src": "./src",
  "@assets": "./src/assets",
  "@components": "./src/components",
  "@contexts": "./src/contexts",
  "@routes": "./src/routes",
  "@utils": "./src/utils",
},
```

Isso permite que referências a modulos nestas pastas sejam feitas através da syntaxe `@src/<arquivo>`, `@assets/<arquivo>`, etc.

🇺🇸 This template includes libraries and patterns we use across our React Native applications at Idopter Labs.
