//Crie um programa que simule um jogo de dados. Peça ao usuário para lançar o dado (gerar um número aleatório de 1 a 6) e exiba o resultado no console. Repita até que o usuário decida parar de jogar.
const numeroDado = document.getElementById("numeroDado");
const botaoRejogar = document.getElementById("botao");

function gerarNumero() {
    let numero = Math.floor(Math.random() * 6) + 1;
    numeroDado.innerHTML = numero;
}

botaoRejogar.addEventListener("click", gerarNumero);