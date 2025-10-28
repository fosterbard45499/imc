// Função para trocar entre telas
function mostrarTela(idTela) {
  // Oculta todas as telas
  document.querySelectorAll(".tela").forEach(tela => {
    tela.classList.remove("ativa");
  });

  // Mostra apenas a tela selecionada
  document.getElementById(idTela).classList.add("ativa");
}

function calcularIMC() {
  const nome = document.querySelector('#nome').value;
  const peso = parseFloat(document.querySelector('#peso').value);
  const altura = parseFloat(document.querySelector('#altura').value);
  const genero = document.querySelector('#genero').value;

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
  else if (imc < 35) classificacao = 'Obesidade I';
  else if (imc < 40) classificacao = 'Obesin II';
  else classificacao = 'Obesidade III';

  const textoResultado = `Olá, ${nome} (${genero}). Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;

  document.getElementById('resultadoIMC').textContent = textoResultado;

  mostrarTela('TelaResultado');
}