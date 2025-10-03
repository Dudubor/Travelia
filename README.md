# 🌐 Backend - Meu Projeto Node.js

Este é o backend do projeto, desenvolvido em **Node.js** com **Express**, responsável por gerenciar a API, autenticação, regras de negócio e comunicação com o banco de dados.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://www.npmjs.com/package/nodemon) (ambiente de desenvolvimento)
- Banco de dados (ex: [MongoDB](https://www.mongodb.com/) ou [MySQL](https://www.mysql.com/))

---

## 📂 Estrutura do Projeto

⚙️ Instalação e Execu

```bash
backend/
├── src/
│   ├── controllers/      # Lógica das rotas
│   ├── models/           # Modelos do banco de dados
│   ├── routes/           # Definição das rotas
│   ├── middlewares/      # Middlewares (ex: autenticação)
│   ├── config/           # Configurações (db, variáveis de ambiente)
│   └── server.js         # Ponto de entrada da aplicação
├── .env                  # Variáveis de ambiente
├── package.json
├── README.md
└── .gitignore

```
⚙️ Instalação e Execução
1. Clone o repositório
git clone https://github.com/Dudubor/Travelia-backend
cd backend

2. Instale as dependências
npm install

3. Execute o servidor em modo desenvolvimento
npm run dev

4. Execute em modo produção
npm start
