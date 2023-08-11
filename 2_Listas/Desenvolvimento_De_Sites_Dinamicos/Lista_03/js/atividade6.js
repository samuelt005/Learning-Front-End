//Crie uma função que receba um array de números como parâmetro e retorne um novo array
//sem elementos duplicados.
let numeros = [];

while (true) {
    let numero = parseInt(prompt("Insira um número para verificar repetição ou digite 0 para sair: "));
    if (numero === 0) {
        break;
    }
    numeros.push(numero);
}

let numerosUnicos = numeros.filter((anterior, atual) => {
    return numeros.indexOf(anterior) === atual;
});

alert(`Números do array sem repetir: ${numerosUnicos}`);