// Captura os elementos do HTML
const textarea = document.getElementById("texto");
const contadorCaracteres = document.getElementById("caracteres");
const contadorSemEspaco = document.getElementById("semEspaco");
const contadorPalavras = document.getElementById("palavras");
const alerta = document.getElementById("alerta");
const contadorRestantes = document.getElementById("restantes");
const btnLimpar = document.getElementById("btnLimpar");

// Define o limite de caracteres permitidos
const LIMITE_CARACTERES = 200;

// Função principal que atualiza os contadores
function atualizarContadores() {
    const texto = textarea.value; 
    const totalCaracteres = texto.length;
    const caracteresSemEspacos = texto.replace(/\s/g, "").length;
    const palavras = texto.trim().split(/\s+/).filter(p => p !== "").length;

    contadorCaracteres.textContent = totalCaracteres;
    contadorSemEspaco.textContent = caracteresSemEspacos;
    contadorPalavras.textContent = palavras;

    const restantes = LIMITE_CARACTERES - totalCaracteres;
    contadorRestantes.textContent = restantes;

    // Troca a cor conforme o restante
    contadorRestantes.classList.remove("normal", "atencao", "limite");

    if (restantes <= 10) {
        contadorRestantes.classList.add("limite");
    } else if (restantes <= 50) {
        contadorRestantes.classList.add("atencao");
    } else {
        contadorRestantes.classList.add("normal");
    }

    if (totalCaracteres > LIMITE_CARACTERES) {
        alerta.classList.remove("oculto");
    } else {
        alerta.classList.add("oculto");
    }
}

textarea.addEventListener("input", () => {
    if (textarea.value.length > LIMITE_CARACTERES) {
        textarea.value = textarea.value.slice(0, LIMITE_CARACTERES);
    }
    atualizarContadores();
});

btnLimpar.addEventListener("click", () => {
    textarea.value = "";
    atualizarContadores();
});

atualizarContadores();
