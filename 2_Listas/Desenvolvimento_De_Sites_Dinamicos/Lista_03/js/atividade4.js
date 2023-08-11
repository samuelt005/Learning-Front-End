//Crie uma função que receba um array de números como parâmetro e retorne a soma de
//todos os elementos do array.
let numeros = [];

while (true) {
    let numero = parseInt(prompt("Insira um número para somar ou digite 0 para sair: "));
    if (numero === 0) {
        break;
    }
    numeros.push(numero);
}

let soma = numeros.reduce((anterior, atual) => {
    return anterior + atual;
});

alert(`Soma dos números: ${soma}`);