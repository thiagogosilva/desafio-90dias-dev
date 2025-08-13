# 📒 Dia 25 — Desafio 90 Dias Estagiário DEV

📅 Data: 13/08/2025

## 🎯 Objetivo do dia
Acelerar o desenvolvimento e implementar múltiplas funcionalidades de UX em um único dia: filtros de busca em tempo real e um botão "Voltar ao Topo".
---

### ✅ Tarefas Realizadas:

1.  **Filtro de Busca para Resumos:**
    * Adicionado um campo de busca (`#filtro-resumos`) acima da lista.
    * Implementada a lógica em JavaScript para ouvir o evento `input` e filtrar os cards em tempo real.
    * A busca não diferencia maiúsculas de minúsculas e verifica o título e o conteúdo de cada resumo.

2.  **Filtro de Busca para Flashcards (Replicação e Refatoração):**
    * Adicionado um segundo campo de busca (`#filtro-flashcards`) para a seção de flashcards.
    * O CSS foi refatorado para usar uma classe comum (`.filtro-input`), evitando código duplicado (princípio DRY).
    * A lógica do filtro foi adaptada para buscar na pergunta e resposta dos flashcards, mantendo a consistência da aplicação.

3.  **Botão 'Voltar ao Topo':**
    * Criado um botão com `position: fixed` que fica no canto inferior direito da tela.
    * O botão fica oculto por padrão e aparece suavemente quando o usuário rola a página para baixo (usando o evento `scroll`).
    * Ao ser clicado, o botão executa uma rolagem suave (`behavior: 'smooth'`) de volta para o topo da página.

---

### 🧠 Aprendizados do Dia:

* **Reutilização de Lógica e Padrões:** Ao replicar o filtro, pratiquei como adaptar um padrão de código para um novo contexto. A refatoração do CSS para uma classe reutilizável foi um exemplo prático do princípio DRY (Don't Repeat Yourself).
* **Manipulação de Eventos do Browser:** Trabalhei com dois novos eventos importantes: `input` para reações em tempo real à digitação e `scroll` para reações baseadas na posição da página.
* **Interação com a Janela do Browser (`window`):** Utilizei o objeto `window` para acessar propriedades como `window.scrollY` e métodos como `window.scrollTo()`, entendendo melhor a interação do JavaScript com o navegador.
* **Simulação de um Ritmo de Trabalho:** Hoje o dia foi mais intenso, com múltiplas tarefas. Foi um ótimo exercício para gerenciar o tempo, focar em uma entrega de cada vez e sentir um pouco do ritmo de um ambiente de desenvolvimento real.

---

### 🚀 Próxima etapa (Spoiler Dia 26):

* Substituir os `confirm()` de exclusão por um **Modal customizado**.
* Vamos criar nossa própria janela de confirmação do zero com HTML, CSS e JavaScript. Ela será mais bonita e terá uma experiência de usuário melhor que o `confirm()` nativo do navegador, que bloqueia a interação com a página.