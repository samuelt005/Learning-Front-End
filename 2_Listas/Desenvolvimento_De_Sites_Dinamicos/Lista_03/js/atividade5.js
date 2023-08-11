//Crie uma função que receba um array de números como parâmetro e retorne o maior
//elemento do array.
let numeros = [];

while (true) {
    let numero = parseInt(prompt("Insira um número para comparar ou digite 0 para sair: "));
    if (numero === 0) {
        break;
    }
    numeros.push(numero);
}

let maiorNumero = numeros.reduce((anterior, atual) => {
    return anterior > atual ? anterior : atual;
});

alert(`Maior número do array: ${maiorNumero}`);