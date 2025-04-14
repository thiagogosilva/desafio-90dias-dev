const btn = document.getElementById('toggle-dark-mode');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');


if (document.body.classList.contains('dark-mode')) {
    btn.textContent = '☀️ Modo Claro';
} else {
    btn.textContent = '🌙 Modo Escuro';
}
});