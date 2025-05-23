// Capturando o formulário e o elemento de resultado
const formImc = document.getElementById('form-imc');
const resultado = document.getElementById('resultado');

// Adicionando o evento de submit ao formulário
formImc.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verificando se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = 'Por favor, insira valores válidos!';
        return;
    }

    // Calculando o IMC
    const imc = peso / (altura * altura);
    let classificacao = '';

    // Definindo a classificação com base no IMC
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
        classificacao = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade grau 2';
    } else {
        classificacao = 'Obesidade grau 3';
    }

    // Exibindo o IMC e a classificação
    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${classificacao}).`;

    // Calculando e exibindo o peso ideal
    const pesoMinimo = 18.5 * altura * altura;
    const pesoMaximo = 24.9 * altura * altura;

    if (classificacao !== 'Peso normal') {
        resultado.innerHTML += `<br>💡 Seu peso ideal está entre <strong>${pesoMinimo.toFixed(1)}kg</strong> e <strong>${pesoMaximo.toFixed(1)}kg</strong>.`;
    }
});