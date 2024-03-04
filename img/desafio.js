let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function console() {
    console.log('O botão foi clicado')

};

function alerta() {
    alert('Eu amo JS')
};

function pergunta() {
    cidade = prompt('Qual o primeiro nome de alguma cidade do Brasil vem a sua cabeça qundo pensa em alguém?')
    alert(`Estive em ${cidade} e lembrei de você `)
};

function soma2Numeros() {
    let primeiroNumero = parseInt(prompt('Digite um número:'));
    let segundoNumero = parseInt(prompt('Digite outro número:'));
    let soma2Numeros = primeiroNumero + segundoNumero;
    alert(`A soma do numero 1 ${primeiroNumero} e do numero 2 ${segundoNumero} é ${soma2Numeros}`)
}

