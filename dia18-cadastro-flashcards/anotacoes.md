# 📒 Dia 18 — Cadastro de Flashcards (POST)

📅 Data: 27/05/2025

## 🎯 Objetivo do dia
Implementar o formulário de cadastro de flashcards no frontend da Plataforma de Estudos, conectando com o backend através da rota POST `/flashcards` e aplicando feedback visual ao usuário.

---

## ✅ Funcionalidades entregues

- Criação do formulário de cadastro de flashcards no HTML
- Campos: pergunta, resposta e tags (opcional)
- Requisição POST `/flashcards` via `fetch`
- Conversão da string de tags em array de strings
- Validação de campos obrigatórios no frontend
- Mensagens visuais de sucesso e erro
- Atualização automática da lista de flashcards após cadastro
- Reset automático dos campos do formulário
- Ocultação da mensagem de feedback após 3 segundos

---

## 🧠 Aprendizados do dia

- Como capturar dados de formulários diferentes na mesma página
- Diferença entre string e array no envio de JSON para a API
- Utilização de `split()` e `map()` para tratar tags
- Validação de dados e exibição de mensagens dinâmicas no DOM
- Integração de múltiplas requisições com o backend (GET e POST)
- Organização clara dos blocos de código por responsabilidade

---

## 💡 Detalhes extras aplicados

- Evitado conflito de IDs entre os formulários de resumos e flashcards
- Aplicado `setTimeout()` para ocultar mensagens de feedback
- Tratamento do campo `tags` com fallback (“Sem tags”) na renderização
- Garantia de consistência visual e semântica com CSS já existente
- Uso de `typeof carregarFlashcards === "function"` para modularidade

---

## 📌 Conclusão

A plataforma agora permite não só visualizar flashcards, mas também **criar novos conteúdos de forma prática, com feedback imediato e integração completa com o backend**. O cadastro já considera boas práticas como validação, limpeza de campos e reutilização de funções.

---

📅 **Próxima etapa (Dia 19):**
Aprimorar o formulário com validações adicionais, evitar duplicidades de perguntas e explorar melhorias de UX como destaque visual para flashcards recém-criados.
