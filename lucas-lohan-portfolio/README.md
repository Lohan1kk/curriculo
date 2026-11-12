# Portfólio — Lucas Lohan

Next.js 14 (App Router) + TypeScript. Sem backend, sem variáveis de ambiente.

## Rodar localmente
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # teste de produção
```

## Editar conteúdo
Tudo (contatos, projetos, tecnologias, trajetória) está em `app/data.ts`.
O currículo fica em `public/curriculo-lucas-lohan.pdf`.

## Publicar no GitHub
```bash
git init
git add .
git commit -m "Portfólio inicial"
git branch -M main
git remote add origin https://github.com/lohan1kk/NOME-DO-REPOSITORIO.git
git push -u origin main
```

## Deploy na Vercel
1. Acesse vercel.com e entre com sua conta do GitHub.
2. Clique em **Add New… → Project** e importe o repositório.
3. Framework: Next.js (detectado automaticamente). Clique em **Deploy**.
