# Mega Rank API

Uma API simple de rank em nodejs, express e typescript.

## 🔥 Introdução

A MegaRank API é uma aplicação para listar participantes de uma competição com detalhes como nome, imagem, experiência (XP) e links para redes sociais.

### ⚙️ Pré-requisitos

Para utilizar a API MegaRank, é necessário ter o Docker e o Node.js instalados na sua máquina local.

- Docker: Acesse o site oficial do Docker para instruções de instalação e configuração do Docker em diferentes sistemas operacionais.

- Node.js: Acesse o site oficial do Node.js para baixar e instalar o Node.js. Certifique-se de ter pelo menos a versão 20 ou qualquer lts/iron do Node.js instalada.

### 🔨 Guia de instalação

- Clone o repositório:

```
git clone git@github.com:PedroArnaldo/mega_rank_api.git && cd mega_rank_api
```

1 - Instalação das Dependências do Projeto:

```
npm install
```

2 - Configuração do Prisma:

```
npx prisma generate
```

3 - Configuração do Banco de Dados:

- 3.1 - Configura a string de conexção e coloque no .env

4- Configura a secreat seed para JWT:

```
SECRET_KEY="coloque uma seed"
```

5 - Inicie a aplicação:

```
docker compose up -d
```

6 - Criando a tabela no banco de dados:

```
npx prisma migrate dev
```

## ⚙ EndPoints

- Create User - Essa rota server para criar o usuário.
  OBS: o nome é um identificador único.

`POST /users`

- Request:

```json
{
  "name": "Pedro Lopes",
  "password": "mypassword"
}
```

- Response:

```json
{
  "id": "1",
  "name": "Pedro Lopes",
  "password": "mypassword"
}
```

- Login - Essa rota server para fazer o login na aplicação, ela retorna um token de autorização.
  OBS: o nome é um identificador unico.

`POST /users`

- Request:

```json
{
  "name": "Pedro Lopes",
  "password": "mypassword"
}
```

- Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDMyMDE3MDUsImV4cCI6MTcwMzIwMjkwNSwic3ViIjoiZDhjZGFiNzUtOGYwYy00YTY1LTk5OWItNmEyZmIzYTI3OThjIn0.fEO3gaUMpnzzWYeTcUG6z4pu9hDxnYo5MgInucw20tw"
}
```

---

`Estas rotas são responsáveis por manipular informações dos participantes e requerem autenticação na aplicação para serem acessadas.`

- Lista os participantes.

`GET /participants`

- Response:

```json
[
  {
    "id": "36b8f84d-df4e-4d49-b662-bcde71a8764f",
    "name": "Gabriel de Jesus",
    "imageUrl": "https://github.com/gabrieldejesus.png",
    "xp": 220,
    "socialNetwork": "https://www.linkedin.com/in/gabrieldejesus"
  },
  {
    "name": "Pedro Lopes",
    "imageUrl": "https://github.com/PedroArnaldo",
    "xp": 320,
    "socialNetwork": "https://www.linkedin.com/in/pedroarnaldoo"
  }
]
```

- Cadastrar um novo participante - Cria um novo participante com os seguintes campos no corpo da requisição: name, imageUrl, xp, socialNetwork.

`POST /participants`

- Request:

```json
{
  "name": "Pedro Lopes",
  "imageUrl": "https://github.com/PedroArnaldo",
  "xp": 320,
  "socialNetwork": "https://www.linkedin.com/in/pedroarnaldoo"
}
```

- Response:

```json
{
  "id": "36b8f84d-df4e-4d49-b662-bcde71a87a20",
  "name": "Pedro Lopes",
  "imageUrl": "https://github.com/PedroArnaldo",
  "xp": 320,
  "socialNetwork": "https://www.linkedin.com/in/pedroarnaldoo"
}
```

- Atualizar um participante existente - Atualiza as informações de um participante existente com base no id e responde com participante atualizado.

`PUT /participants/:id`

- Request:

```json
{
  "name": "Pedro Lopes",
  "imageUrl": "https://github.com/PedroArnaldo",
  "xp": 31200,
  "socialNetwork": "https://www.linkedin.com/in/pedroarnaldoo"
}
```

- Response:

```json
{
  "id": "1223",
  "name": "Pedro Lopes",
  "imageUrl": "https://github.com/PedroArnaldo",
  "xp": 31200,
  "socialNetwork": "https://www.linkedin.com/in/pedroarnaldoo"
}
```

- Remover um participante - Remove um participante com base no id.

`DELETE /participants/:id`

## 📦 Tecnologias usadas:

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## 🛠️ Features Futuras e Em Andamento:

1 - Implementação de testes unitários e testes Integração

2 - Implementar injeção de dependência
2.1 - Identificar as Dependências
2.2 - Criar Interfaces
2.3 - Configurar as Classes para Aceitar Dependência

## 👷 Autor

- **Pedro Arnaldo** - _Desenvolvedor - Backend_ - [Pedro Arnaldo](https://github.com/PedroArnaldo)

## 📄 Licença

Esse projeto está sob a licença (MIT) - acesse os detalhes [LICENSE.md](https://github.com/PedroArnaldo/mega_rank_api/blob/main/LICENSE).
