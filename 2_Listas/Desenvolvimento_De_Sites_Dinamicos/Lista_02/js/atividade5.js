//Peça ao usuário para digitar uma palavra e conte quantas vogais (A, E, I, O, U) existem na palavra. Exiba o resultado no console.
let palavra = prompt("Insira uma palavra qualquer:");

function contarVogais(palavra) { 
    let contador = palavra.match(/[aeiou]/gi).length;
    return contador;
}

console.log("Total de vogais na palavra: " + contarVogais(palavra));