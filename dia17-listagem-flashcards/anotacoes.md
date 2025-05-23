# 📒 Dia 17 — Desafio 90 Dias Estagiário DEV

📅 Data: 23/05/2025

## 🎯 Objetivo do dia
Implementar a listagem dos flashcards no frontend da Plataforma de Estudos, consumindo a rota GET do backend e exibindo os dados dinamicamente com interações visuais.

---

## ✅ Funcionalidades entregues

- Criação da seção “🧠 Flashcards cadastrados” no HTML
- Requisição GET `/flashcards` ao backend usando fetch
- Criação dinâmica dos cards de flashcard no DOM
- Botão “Mostrar resposta” que alterna entre mostrar/ocultar
- Transição suave na resposta com CSS
- Destaque visual (cor e sombra) no flashcard ativo
- Alternância do texto do botão: “Mostrar” -> “Ocultar”

---

## 🧠 Aprendizados do dia

- Como consumir múltiplas rotas no mesmo frontend
- Reutilização de padrões visuais e componentes no HTML/JS
- Aplicação de animações simples com `max-height` e `opacity`
- Alternância de classes no DOM via `classList.toggle()`
- Melhoria de UX com feedback visual (efeito visual de foco)
- Boas práticas de separação entre lógica (JS) e estilo (CSS)

---

## 💡 Detalhes extras aplicados

- Ocultação da resposta via `.resposta` com transição
- Destaque de cor no flashcard `.mostrar`
- Correção de bug visual com ponto e vírgula após o botão
- Organização semântica com `section` separada para flashcards

---

## 📌 Conclusão

A tela da plataforma agora possui **duas seções principais**: `resumos` e `flashcards`. Ambas estão sendo carregadas automaticamente do backend e renderizadas dinamicamente com JavaScript puro, mantendo organização, separação visual e interatividade moderna.

---

📅 **Próxima etapa (Dia 18):**
Criar o formulário para cadastrar flashcards no frontend e enviar via POST à API.
