# 📒 Dia 24 — Desafio 90 Dias Estagiário DEV

📅 Data: 12/08/2025

## 🎯 Objetivo do dia
Melhorar a Experiência do Usuário (UX) implementando feedback de carregamento nos formulários e um sistema de "Mostrar mais" para conteúdos longos.
---

### ✅ Tarefas Realizadas:

1.  **Implementação do Estado de 'Loading' nos Botões:**
    * Modificados os formulários de Resumos e Flashcards.
    * Ao submeter o formulário, o botão é desativado (`disabled = true`) e seu texto muda para "Salvando...".
    * Utilizado o bloco `try...catch...finally` para garantir que, ao final da requisição (com sucesso ou erro), o botão seja sempre reativado.
    * Essa mudança previne cliques duplos e informa ao usuário que a ação está em progresso.

2.  **Funcionalidade 'Mostrar mais/menos' para Resumos:**
    * Criada uma nova classe CSS (`.truncado`) que limita a altura do texto do resumo e adiciona um efeito de degradê para indicar que há mais conteúdo.
    * Na renderização dos cards, o JavaScript agora verifica o tamanho do texto do resumo.
    * Se o texto for longo, ele é truncado por padrão e um botão "Mostrar mais" é adicionado dinamicamente.
    * O botão alterna a classe `.truncado` no parágrafo e muda seu próprio texto entre "Mostrar mais" e "Mostrar menos".

---

### 🧠 Aprendizados do Dia:

* **Gerenciamento de Estado de UI:** Aprendi a manipular o estado de elementos da interface (como desativar botões) em resposta a eventos assíncronos (requisições `fetch`). O uso do `finally` foi crucial para garantir que a UI nunca fique "travada".
* **Melhora Progressiva (Progressive Enhancement):** A funcionalidade "Mostrar mais" é um exemplo de melhora progressiva. A aplicação funciona sem ela, mas com ela a UX se torna muito melhor. Aprendi a adicionar essa lógica dinamicamente apenas quando necessário.
* **Lógica de UI com `classList.toggle`:** Aprofundei o uso do `classList.toggle` como uma forma limpa e eficiente de alternar entre dois estados visuais (texto completo vs. texto truncado).
* **CSS com Pseudo-elementos (`::after`):** Utilizei o pseudo-elemento `::after` para criar um efeito visual (o degradê), mostrando como o CSS pode resolver problemas de design de forma elegante.

---

### 🚀 Próxima etapa (Spoiler Dia 25):

* Implementar um campo de **busca/filtro** para os Resumos.
* O usuário poderá digitar um termo no campo de busca, e a lista de resumos será filtrada em tempo real para mostrar apenas os cards que contêm o termo digitado no título ou no conteúdo.