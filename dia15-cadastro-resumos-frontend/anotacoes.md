# 📒 Dia 15 — Desafio 90 Dias Estagiário DEV

📅 Data: 20/05/2025

## 🎯 Objetivo do dia
Finalizar o fluxo de CRUD da **Plataforma de Estudos**, implementando o **cadastro de novos resumos diretamente pelo frontend**, com integração real via API `POST /resumos`.
---

## ✅ O que foi implementado
- Formulário de cadastro com campos: título, conteúdo e tags
- Integração com backend usando `fetch()` e método `POST`
- Validação básica no frontend (`required`, campos vazios)
- Exibição de mensagens de sucesso e erro
- Atualização automática da lista de resumos após cadastro
- Reset do formulário ao finalizar
- Organização visual com estilo limpo e responsivo

## 🧠 Aprendizados do dia
- Como capturar eventos de formulário com `submit` e `preventDefault`
- Como coletar e estruturar dados do DOM em objetos JS
- Como enviar `fetch` com método `POST` e `headers`
- Boas práticas com feedback visual e UX simples
- Como atualizar o DOM dinamicamente após uma ação

## ✅ Melhorias aplicadas
- Pequena reorganização visual: a frase "Veja abaixo os resumos cadastrados" foi movida para depois do formulário, melhorando a hierarquia visual da página
- Correção de pequenos detalhes no HTML (type de input, semântica)

## 📌 Conclusão
Agora a Plataforma de Estudos possui um CRUD completo funcional com frontend e backend conectados e dados persistentes no MongoDB. Um dos marcos mais importantes até agora no desafio!

📅 Próxima etapa (Dia 16):
Permitir editar um resumo existente pelo frontend (integração com rota `PUT`).