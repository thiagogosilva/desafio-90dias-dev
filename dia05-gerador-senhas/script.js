const comprimentoInput = document.getElementById('tamanho');
const comprimentoValor = document.getElementById('valor-tamanho');
const incluirMaiusculas = document.getElementById('maiusculas');
const incluirMinusculas = document.getElementById('minusculas');
const incluirNumeros = document.getElementById('numeros');
const incluirSimbolos = document.getElementById('simbolos');
const botaoGerar = document.getElementById('gerar');
const botaoCopiar = document.getElementById('copiar');
const campoSenha = document.getElementById('senha');
const mensagemCopiada = document.getElementById('mensagem-copiada');

comprimentoInput.addEventListener('input', () => {
    comprimentoValor.textContent = comprimentoInput.value;
});

function gerarSenha(comprimento, maiusculas, minusculas, numeros, simbolos) {
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const digitos = '0123456789';
    const simbolosEspeciais = '!@#$%^&*()_+=-{}[]<>.,';


let caracteresDisponiveis = '';
let senhaGerada = '';

if (maiusculas) caracteresDisponiveis += letrasMaiusculas;
if (minusculas) caracteresDisponiveis += letrasMinusculas;
if (numeros) caracteresDisponiveis += digitos;
if (simbolos) caracteresDisponiveis += simbolosEspeciais;

if (caracteresDisponiveis.length === 0) return 'Selecione pelo menos uma opção!';

for (let i = 0; i < comprimento; i++) {
    const index = Math.floor(Math.random() * caracteresDisponiveis.length);
    senhaGerada += caracteresDisponiveis[index];
}

return senhaGerada;

}

botaoGerar.addEventListener('click', () => {
    const comprimento = comprimentoInput.value;
    const senha = gerarSenha(
        comprimento,
        incluirMaiusculas.checked,
        incluirMinusculas.checked,
        incluirNumeros.checked,
        incluirSimbolos.checked
    );

    campoSenha.value = senha;
});

botaoCopiar.addEventListener('click', () => {
    const senha = campoSenha.value;

    if (!senha) {
        alert('Nenhuma senha para copiar!');
        return;
    }

    navigator.clipboard.writeText(senha)
        .then(() => {
            botaoCopiar.textContent = 'Copiado!';
            botaoCopiar.classList.add('copiado');

            setTimeout (() => {
                botaoCopiar.textContent = 'Copiar';
                botaoCopiar.classList.remove('copiado');
            }, 2000);
        })
        .catch(() => {
            alert('Erro ao copiar a senha!');
        });
});