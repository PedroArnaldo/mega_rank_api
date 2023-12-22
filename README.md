# Mega Rank API

Uma API simple de rank em nodejs, express e typescript.

## 🔥 Introdução

A MegaRank API é uma aplicação para listar participantes de uma competição com detalhes como nome, imagem, experiência (XP) e links para redes sociais.

### ⚙️ Pré-requisitos

Para utilizar a API MegaRank, é necessário ter o Docker e o Node.js instalados na sua máquina local.

- Docker: Acesse o site oficial do Docker para instruções de instalação e configuração do Docker em diferentes sistemas operacionais.

- Node.js: Acesse o site oficial do Node.js para baixar e instalar o Node.js. Certifique-se de ter pelo menos a versão 20 ou qualquer lts/iron do Node.js instalada.

### 🔨 Guia de instalação

Explique aqui um passo a passo mostrando como deve executar para ter um ambiente de desenvolvimento em execução, desde instalar e rodar o projeto.

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

    3.1 - Configura a string de conexção e coloque no .env

4- Configura a secreat seed para JWT:

```
SECRET_KEY="coloque uma seed"
```

## REST API

## 🛠️ Executando os testes

Explique como executar os testes automatizados para este sistema.

```
Coloque exemplos
```

## 📦 Tecnologias usadas:

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## 👷 Autor

- **Pedro Arnaldo** - _Desenvolvedor - Backend_ - [Pedro Arnaldo](https://github.com/PedroArnaldo)

## 📄 Licença

Esse projeto está sob a licença (MIT) - acesse os detalhes [LICENSE.md](https://github.com/PedroArnaldo/mega_rank_api/blob/main/LICENSE).
