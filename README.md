
# Desafio Dr. Consulta
## Funcionalidades

- [X]  CRUD dos estabelecimentos
- [X]  CRUD dos veículos
- [X]  Controle de entrada e saída de veículos

## Requisitos

- [X]  Controle JWT via Handshake
- [X]  Retorno em formato JSON
- [X]  Requisições GET, POST, PUT ou DELETE, conforme a melhor prática
- [X]  Persistência dos dados em banco relacional MYSQL
- [X]  Criar README do projeto descrevendo as tecnologias utilizadas, chamadas dos serviços e configurações necessário para executar a aplicação
- [X]  Sumário da quantidade de entrada e saída
- [X]  Adição do swagger no projeto

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/brunomestanza/desafio-entrevista-nodejs.git
```

Entre no diretório do projeto

```bash
  cd desafio-entrevista-nodejs/parking-service
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start:dev
```

## Rodando localmente

Crie um arquivo env.ts na raiz do projeto, usando como base o arquivo abaixo

```bash
  export const constants = {
  // Random secret used by JWT, example above
  secret: 'bd3b04c564489fbc31479a37c8182218c679264faad9b18bba965b66aae168f1',

  // Database host, example above
  host: 'localhost',

  // Database port, example above
  port: 3306,

  // Database username, example above
  username: 'root',

  // Database password, example above
  password: 'pass123',

  // Database name, example above
  database: 'parking',
};
```

Abra o Swagger do projeto, usando o link abaixo

```bash
  http://localhost:3000/api
```

Crie um usuário, usando a rota abaixo

```bash
  POST /users
```

Autentique o usuário usando a rota abaixo
```bash
  POST /auth/login
```

Use o JWT para autenticar seu usuário dentro do do próprio swagger, no canto superior direito.

Após isso, crie um estabelecimento e um veículo para testar o projeto, criando entradas e afins.


## Stack utilizada

**Back-end:** Node, NestJS, class-validator, typeorm, passport, mysql, bcrypt, jwt e class-validator.

