# 📒 Dia 09 - Contador de Caracteres e Palavras

📅 Data: 05/05/2025

## ✅ Objetivo do dia:
Criar um mini projeto de contador de caracteres e palavras com funcionalidades extras para simular um comportamento mais profissional.
---

## 📚 O que aprendi hoje:

- Manipulação dinâmica de estilos com `classList.add()` e `classList.remove()`.
- Como criar feedback visual progressivo (cores para aviso e limite).
- Como bloquear a digitação acima de um limite de caracteres sem impedir o backspace.
- Prática com `textarea.value.length`, `.slice()`, `.replace()` e `.split()`.

---

## 🔧 Funcionalidades implementadas:

- ✅ Exibição do total de caracteres.
- ✅ Contagem de caracteres sem espaço.
- ✅ Contador de palavras.
- ✅ Alerta visual ao ultrapassar 200 caracteres.
- ✅ Botão "Limpar" que reseta o campo e os contadores.
- ✅ Contador regressivo funcional (caracteres restantes).
- ✅ Bloqueio de digitação ao atingir 200 caracteres (com `slice()`).

---

## 🚫 Problemas encontrados e resolvidos:

- Bug: Contadores de "palavras" e "sem espaço" não estavam atualizando.
  - **Causa**: ID `semEspaço` estava diferente do esperado pelo JavaScript (`semEspaco`).
  - **Solução**: Corrigir o ID no HTML para coincidir com o `getElementById`.

---

## 🧠 Observações:

- Essas melhorias reforçam a importância da validação em tempo real.
- Foi uma boa prática de DOM, eventos, manipulação de classes e tratamento de input.