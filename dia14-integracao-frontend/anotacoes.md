# 📒 Dia 14 — Desafio 90 Dias Estagiário DEV

📅 Data: 16/05/2025

## 🎯 Objetivo do dia
Iniciar a integração do frontend com o backend da **Plataforma de Estudos**, buscando os resumos salvos no banco de dados (MongoDB Atlas) e exibindo na interface do usuário com HTML, CSS e JavaScript puro.
---

## 🧠 O que foi implementado hoje

### ✅ Frontend funcional:
- `index.html` com estrutura semântica
- `script.js` com requisição `fetch()` para `GET /resumos`
- Criação dinâmica de elementos HTML via JavaScript
- Estilo visual com `style.css` (grid responsivo, hover, card clean)

### ✅ Backend:
- Backend rodando em `http://localhost:5000`
- Usando `nodemon` para desenvolvimento contínuo

### ✅ Correções importantes:
- Entendido que o terminal do servidor **precisa permanecer aberto** durante os testes
- Retorno ao uso da porta 5000 no backend
- Organização mantida entre repositórios:
  - `desafio-90dias-DEV` para o desafio
  - `plataforma-estudos` como projeto real
---

## 🧪 Testes realizados

| Teste                      | Resultado                           |
|----------------------------|-------------------------------------|
| `GET /resumos` via fetch   | ✅ Funcionando                      |
| Exibição dinâmica no HTML  | ✅ Funcionando                      |
| Tratamento de erro         | ✅ Com try/catch                    |
| Estilização visual         | ✅ Cards com responsividade e hover |

---

## 🧩 Aprendizados do dia

- Como integrar frontend e backend usando `fetch()` e `async/await`
- Importância de esperar o `DOMContentLoaded` para iniciar requisições JS
- Como organizar o HTML para receber conteúdo dinâmico
- Uso de `.map()`, `.join()`, e manipulação de elementos com `createElement` ou `innerHTML`
- Como um pequeno detalhe (como fechar o terminal) pode quebrar toda a comunicação da API

---

## 📌 Conclusão

Primeira versão do **frontend funcional da Plataforma de Estudos** criada com sucesso! Agora é possível visualizar todos os resumos cadastrados diretamente no navegador, consumindo dados reais do MongoDB. Backend e frontend conectados com sucesso. 🚀

---

📅 **Próxima etapa (Dia 15):**
Adicionar formulário no frontend para cadastrar novos resumos usando `POST /resumos` via JavaScript.
