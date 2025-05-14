# 📒 Dia 13 — Desafio 90 Dias Estagiário DEV

📅 Data: 14/05/2025

## 🧩 Objetivo do dia
Finalizar o backend da plataforma de estudos, implementando:
- Rotas `PUT` e `DELETE` para resumos e flashcards
- Tratamento de erros com `try/catch`
- Validações nos Schemas do Mongoose (campos obrigatórios, minlength, maxlength)
- Testes completos via Postman
---

## 🛠️ O que foi implementado hoje

### ✅ Rotas adicionadas:
- `PUT /resumos/:id`
- `DELETE /resumos/:id`
- `PUT /flashcards/:id`
- `DELETE /flashcards/:id`

### ✅ Validações nos Schemas:
- Campos `required`, `minlength`, `maxlength` para título, conteúdo, pergunta, resposta
- Mensagens de erro personalizadas
- `trim: true` para limpeza dos campos
- `tags` com `default: []`
---

## 🧪 Testes no Postman

| Rota                  | Status esperado   | Testado |
|-----------------------|-------------------|---------|
| `POST /resumos`       | 201 ✅            | ✅       |
| `GET /resumos`        | 200 ✅            | ✅       |
| `PUT /resumos/:id`    | 200 / 400 / 404    | ✅       |
| `DELETE /resumos/:id` | 200 / 404          | ✅       |
| `POST /flashcards`    | 201 ✅            | ✅       |
| `GET /flashcards`     | 200 ✅            | ✅       |
| `PUT /flashcards/:id` | 200 / 400 / 404    | ✅       |
| `DELETE /flashcards/:id`| 200 / 404        | ✅       |

---

## 🧠 Aprendizados do dia

- Importância de testar todas as rotas antes de integrar com frontend
- Uso de `nodemon` com script no `package.json`
- Como o `ECONNREFUSED` pode estar ligado à porta presa, Mongo travado ou servidor rodando incorretamente
- Validações com Mongoose ajudam a garantir a integridade dos dados na aplicação

---

## ✅ Conclusão

Backend 100% funcional com CRUD completo para **resumos** e **flashcards**!  
Pronto para integração com o frontend no próximo dia! 💻🔥
---

📅 **Próxima etapa:** Integração com o frontend (React ou HTML + fetch)

