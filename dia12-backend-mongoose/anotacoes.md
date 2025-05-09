# 📒 Dia 12 — Desafio 90 Dias Estagiário DEV

📅 Data: 08/05/2025

## ✅ O que foi feito hoje

- Revisamos e corrigimos as rotas do backend (`/resumos` e `/flashcards`).
- Ajuste dos controllers para garantir as funções `get` e `post` funcionando.
- Configuramos corretamente o `.env` com a connection string do MongoDB Atlas.
- Backend conectado ao banco de dados MongoDB.
- Servidor backend rodando com Node.js + Express.
- Teste das rotas no Postman:
  - GET `/resumos` → retornou lista vazia (esperado).
  - POST `/resumos` → corrigido, agora aceita cadastro.
  - GET `/flashcards` → retornou lista vazia (esperado).
  - POST `/flashcards` → inseriu corretamente dados no banco.
- Feito commit e push para o GitHub no repositório principal.

## 📌 Aprendizados do dia

- Como usar variáveis de ambiente (`.env`) no Node.js.
- Como conectar Mongoose + MongoDB Atlas.
- Diferença entre erros 200, 201, 400 no Postman.
- Importância do uso correto do `.gitignore` para proteger credenciais.
- Boas práticas de commit no GitHub.

## 🔥 Próximos passos (Dia 13)

- Implementar rotas PUT (atualizar) e DELETE (remover) para resumos e flashcards.
- Melhorar estrutura do backend com middlewares.
- Testar rotas de edição e exclusão no Postman.
