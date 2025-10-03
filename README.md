# 🌐 Backend - Projeto Node.js

## 📌 Objetivo
Este backend foi desenvolvido em **Node.js + Express** para gerenciar autenticação, regras de negócio, integração com banco de dados e expor APIs REST ao frontend.  
Ele é responsável por processar dados, validar credenciais, gerar tokens JWT e realizar deploy automatizado na **AWS (ECR + Elastic Beanstalk)** via GitHub Actions.

---

## ⚙️ Instalação e Execução

### 1. Clonar repositório
```bash
git clone https://github.com/Dudubor/Travelia-backend
cd backend
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do backend seguindo o modelo do `.env.sample`:


### 4. Rodar servidor
```bash
npm run dev   # desenvolvimento (com nodemon)
npm start     # produção
```

---

## 🧪 Testes

Rodar os testes locais:
```bash
npm test
```

---

## 🔑 Orientações sobre credenciais

- **Nunca versionar** `.env` com dados sensíveis.
- Utilize o arquivo `.env.sample` como referência para variáveis necessárias.
- Em produção, as credenciais ficam em:
  - **GitHub Actions → Settings → Secrets/Variables**
  - **AWS Secrets Manager** para dados críticos como `DATABASE_URL` ou `JWT_SECRET`.
- CI/CD já está configurado para **usar OIDC no GitHub** ou chaves IAM rotacionáveis.

---

## 🔄 CI/CD (Workflows GitHub Actions)

Os workflows do backend estão localizados em `.github/workflows/`:

- **pipeline-ecr-eb.yml** → Build da imagem Docker, push para AWS ECR e deploy no Elastic Beanstalk.  
- **pipeline-ecr-eb-provisioning.yml** → Provisiona infraestrutura (Terraform/Ansible).  
- **pipeline-ecr-eb-terraform.yml** → Infra como código com Terraform.  
- **pipeline-ecr-eb-destroy.yml** → Destrói a infraestrutura.  

### 🔧 Gatilhos
- `on: push` na branch `main`
- `on: pull_request` para `main`
- `workflow_dispatch` para execução manual

### 🔐 Segredos utilizados
- `AWS_ACCOUNT_ID`, `AWS_REGION`, `AWS_ECR_REPO`, `AWS_EB_APP`, `AWS_EB_ENV`
- Se não usar OIDC, também: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`

---

## 📜 Licença
MIT License
