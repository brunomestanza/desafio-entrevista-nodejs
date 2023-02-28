
# Desafio Dr. Consulta
## Funcionalidades

- [X]  CRUD dos estabelecimentos
- [X]  CRUD dos veículos
- [X]  Controle de entrada e saída de veículos

## Requisitos

- [ ]  Controle JWT via Handshake
- [ ]  Modelagem de dados
- [X]  Retorno em formato JSON
- [X]  Requisições GET, POST, PUT ou DELETE, conforme a melhor prática
- [X]  Persistência dos dados em banco relacional MYSQL
- [X]  Criar README do projeto descrevendo as tecnologias utilizadas, chamadas dos serviços e configurações necessário para executar a aplicação
- [X]  Sumário da quantidade de entrada e saída
- [ ]  Sumário da quantidade de entrada e saída de veículos por hora
- [ ]  Relatório para dono do estabelecimento
- [ ]  Uso de TDD
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

Para rodar os testes

```bash
  npm run test
```


## Stack utilizada

**Back-end:** Node, NestJS, class-validator, typeorm

