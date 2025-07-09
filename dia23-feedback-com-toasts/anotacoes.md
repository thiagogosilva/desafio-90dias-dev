# 📒 Dia 23 — Desafio 90 Dias Estagiário DEV

📅 Data: 09/07/2025

## 🎯 Objetivo do dia
Refinar a Experiência do Usuário (UX) da aplicação, substituindo todas as mensagens de feedback por um sistema de notificações "toast" mais profissional e não-bloqueante.

---

### ✅ Tarefas Realizadas:

1.  **Criação do Sistema de Notificações (Toast):**
    * Adicionado um container (`#toast-container`) no HTML para abrigar as notificações.
    * Desenvolvido o CSS para estilizar os toasts, incluindo posicionamento fixo na tela, cores para sucesso (`.success`) e erro (`.error`), e animações de entrada e saída.
    * Criada a função reutilizável `showToast(message, type)` em JavaScript para gerenciar todo o ciclo de vida de uma notificação (criação do elemento, exibição com animação e remoção automática após 3 segundos).

2.  **Refatoração Completa do Código:**
    * Substituídos todos os `alert()` e manipulações de `textContent` por chamadas à nova função `showToast()`.
    * A refatoração foi aplicada nas validações de formulário, mensagens de sucesso de cadastro/edição e nos feedbacks de exclusão.
    * Removidos os elementos HTML (`<p id="mensagem-status">` e `<p id="mensagem-flashcard">`) que se tornaram desnecessários.
    * Corrigida uma "condição de corrida" na exclusão de itens, usando `setTimeout` para garantir que o toast de sucesso sempre seja exibido antes do recarregamento da lista.

---

### 🧠 Aprendizados do Dia:

* **Criação de Componentes de UI com JS Puro:** Aprendi a criar um componente de interface (o toast) do zero, manipulando o DOM com `createElement`, `appendChild`, `classList` e `remove`.
* **Animações com CSS e JavaScript:** Aprofundei o conhecimento em como o JavaScript pode controlar animações de CSS, adicionando e removendo classes (`.show`) para ativar `transitions` e `@keyframes`.
* **Código Reutilizável e Limpo:** A criação da função `showToast` demonstrou o poder de encapsular uma lógica complexa em uma única chamada, tornando o resto do código muito mais limpo e fácil de ler.
* **Lógica Assíncrona e UX:** O `setTimeout` usado para resolver a 'corrida' na exclusão foi um ótimo aprendizado sobre como o tempo de execução e a ordem das operações podem impactar a experiência do usuário.

---

### 🚀 Próxima etapa (Spoiler Dia 24):

* Implementar um estado de **'loading' (carregamento)** nos botões dos formulários.
* Quando o usuário clicar em "Salvar", o botão será desativado e mostrará um 'spinner' ou a mensagem "Salvando...", prevenindo cliques duplos e dando um feedback imediato de que a ação está em progresso.