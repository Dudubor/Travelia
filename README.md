# CI/CD – Node.js + TypeScript

Este repositório demonstra um pipeline completo de CI (lint, testes, build) e CD (Vercel/Render) com GitHub Actions.

## Como rodar local
```bash
npm ci
npm run dev
```

## CI
- Arquivo: `.github/workflows/ci.yml`
- Executa em push/PR para `main`

## CD
- **Vercel**: `.github/workflows/cd-vercel.yml`
- **Render**: `.github/workflows/cd-render.yml`

## Docker
```bash
docker build -t meuapp .
docker run -p 3000:3000 meuapp
```

## Rotas
- `GET /health` → `{ "status": "ok" }`
