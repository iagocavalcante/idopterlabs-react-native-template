# Idopter Labs React Native Template

🇺🇸 Scroll down for an english version.

🇧🇷 Este template contém bibliotecas e padrões de projeto que adotamos em aplicativos React Native na Idopter Labs.

## Usando o template

`npx react-native init NomeDoProjeto --template @iagocavalcante/idopterlabs-react-native-template`

## Variáveis de Ambiente

O arquivo `.env.example` é um exemplo de como o aplicativo lê variáveis de ambiente. Todas as variáveis de ambiente devem adotar o prefixo `RN_` como convenção. Por exemplo:

```
RN_BASE_URL="https://..."
RN_SERVICE_API_KEY="...."
RN_OTHER_SERVICE_API_KEY="...."
RN_ENV="development"
```

Seguindo esta convenção, temos estas mesmas variáveis de ambiente automaticamente substituidas pelos valores de staging e production.

Copie ou modifique o arquivo para `.env`. Variáveis de ambiente adicionadas a este arquivo devem também ser adicionadas ao arquivo `src/utils/envs.js`. Por exemplo:

```
_envs.set('BASE_URL', RN_BASE_URL);
```

Para acessá-las de ouros arquivos, importamos o modulo e utilizamos `.get`:

```
import envs from '@utils/envs';

let URL = envs.get('BASE_URL');
```

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
