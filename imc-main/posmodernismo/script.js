function mostrarTela(idTela) {
    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });
    document.getElementById(idTela).classList.add("ativa");
}

function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const genero = document.getElementById('genero').value;

    if (!nome) {
        alert('Por favor, insira seu nome');
        return;
    }
    if (isNaN(peso) || peso <= 0) {
        alert('Por favor, insira um peso válido');
        return;
    }
    if (isNaN(altura) || altura <= 0) {
        alert('Por favor, insira uma altura válida');
        return;
    }
    if (!genero) {
        alert('Por favor, selecione seu gênero');
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else if (imc < 35) classificacao = 'Obesidade Grau I';
    else if (imc < 40) classificacao = 'Obesidade Grau II';
    else classificacao = 'Obesidade Grau III';

    const textoResultado = `Olá, ${nome} (${genero}).\nSeu IMC é ${imc.toFixed(2)}\nClassificação: ${classificacao}`;
    document.getElementById('resultadoIMC').textContent = textoResultado;

    mostrarTela('Resultado');
}