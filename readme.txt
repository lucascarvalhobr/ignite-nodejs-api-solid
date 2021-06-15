1) Utilizando ESLint e Prettier
    npm install eslint -d
    ngx eslint --init
    npm install prettier eslint-config-prettier eslint-plugin-prettier -D


2) Para realizar a conversão automática da typescript para javascript. Utilizar a seguinte lib:
    npm install ts-node-dev -d

    "scripts": {
      ...
        "start": "ts-node-dev --transpile-only --ignore-watch node_modules -respawn src/server.ts"
    },

    //--ignore-watch node_modules  -> Desconsidera mudanças na pasta node_modules
    //--respawn -> para aplicação dar refresh quando ocorrerem alterações no código 