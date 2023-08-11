//Crie uma função que receba um array de números como parâmetro e retorne true se todos
//os elementos do array forem números pares, caso contrário, retorne false
let numeros = [];

while (true) {
    let numero = parseInt(prompt("Insira um número ou digite 0 para sair: "));
    if (numero === 0) {
        break;
    }
    numeros.push(numero);
}

function verificaNumeros () {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            alert("Este array contém números impares!");
            return false;
        }
    }
    return true;
}

if (verificaNumeros()) {
    alert("O array contem apenas números pares!");
}
