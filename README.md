## PEGANDO A BRANCH

# Clone o repositório
```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

# Acesse o diretório do repositório
```
cd seu-repositorio
```

# Verifique as branches disponíveis
```
git branch
```

# Mude para a branch desejada
```
git checkout nome-da-branch
```

# Instale as dependências
```
npm install
```

# Rode o servidor
```
npm run dev
```

# Server

Este é um servidor Node.js para uma aplicação web.

## Dependências

- [@prisma/client](https://www.npmjs.com/package/@prisma/client) - ORM para comunicação com banco de dados
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Biblioteca para criptografia de senhas
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Alternativa ao `bcrypt` para ambientes com limitações de recursos
- [body-parser](https://www.npmjs.com/package/body-parser) - Middleware para parsear o corpo de requisições HTTP
- [cors](https://www.npmjs.com/package/cors) - Middleware para habilitar o CORS
- [dotenv](https://www.npmjs.com/package/dotenv) - Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`
- [express](https://www.npmjs.com/package/express) - Framework para construção de aplicações web
- [nodemon](https://www.npmjs.com/package/nodemon) - Monitor de mudanças de arquivos para reiniciar o servidor automaticamente
- [pg](https://www.npmjs.com/package/pg) - Biblioteca para conexão com o PostgreSQL
- [prisma](https://www.npmjs.com/package/prisma) - ORM para comunicação com banco de dados

## Scripts

- `dev`: Inicia o servidor em modo de desenvolvimento com o Nodemon

# Views

Views é um projeto de exemplo criado com React.

## Instalação

Para instalar o projeto, use o seguinte comando:

```
npm install
```

## Uso

Para iniciar o servidor de desenvolvimento, use o seguinte comando:

```
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:300).

## Dependências

As principais dependências do projeto incluem:

- "@testing-library/jest-dom": "^5.16.5": Biblioteca de utilitários de teste para interação com a DOM em testes de JavaScript.
- "@testing-library/react": "^13.4.0": Biblioteca de utilitários de teste para componentes React.
- "@testing-library/user-event": "^13.5.0": Biblioteca de utilitários de teste para simular eventos do usuário em testes de JavaScript.
- "axios": "^1.3.4": Biblioteca para fazer requisições HTTP.
- "react": "^18.2.0": Biblioteca JavaScript para construir interfaces de usuário.
- "react-dom": "^18.2.0": Biblioteca para renderizar elementos React no DOM.
- "react-scripts": "5.0.1": Conjunto de scripts de configuração para aplicações criadas com Create React App.
- "web-vitals": "^2.1.4": Biblioteca para medir a performance de uma aplicação Web.

## Scripts

Os scripts disponíveis incluem:

- "start": Inicia o servidor de desenvolvimento.
- "build": Compila a aplicação para produção.
- "test": Executa testes.
- "eject": Ejeta o código de configuração do Create React App para customização avançada.

## Configuração do ESLint

O objeto "eslintConfig" configura o linter ESLint para o projeto. 
"extends" especifica que o projeto segue as configurações padrão do Create React App.

## Browsers suportados

Por fim, "browserslist" especifica os navegadores que o projeto suporta. 
No ambiente de desenvolvimento, a aplicação será executada no último Chrome, Firefox e Safari. 