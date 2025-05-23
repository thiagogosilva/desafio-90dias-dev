const botaoAdicionar = document.getElementById('adicionar');
const inputTarefa = document.getElementById('nova-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

// 🔄 Carrega tarefas salvas
window.addEventListener('load', () => {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefasSalvas.forEach(tarefa => criarTarefa(tarefa.texto, tarefa.concluida));  
});

// 📦 Salvar tarefas no localStorage
function salvarTarefas () {
    const tarefas = [];
    document.querySelectorAll('#lista-tarefas li').forEach(li => {
        tarefas.push({
            texto: li.textContent,
            concluida: li.classList.contains('concluida')
        });
    });
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// ➕ Criar nova tarefa
function criarTarefa(texto, concluida = false) {
    const li = document.createElement('li');
    li.textContent = texto;
    if (concluida) li.classList.add('concluida');
    
    li.addEventListener('click', () => {
        li.classList.toggle('concluida');
        salvarTarefas();
    });
    
    li.addEventListener('dblclick', () => {
        listaTarefas.removeChild(li);
        salvarTarefas();
    });

    li.style.cursor = 'pointer'; // cursor personzlizado
    listaTarefas.appendChild(li);
}

botaoAdicionar.addEventListener('click', () => {
    const texto = inputTarefa.value.trim();

    if (texto !== '') {
        criarTarefa(texto);
        inputTarefa.value = '';
        inputTarefa.focus();
        salvarTarefas();
    }
});

inputTarefa.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        botaoAdicionar.click();
    }
});