//Peça ao usuário para digitar vários números e, em seguida, calcule a média desses números. Exiba o resultado no console.
let numerosParaSomar = [];
let numero = 1;
let total = 0;

while (numero != 0) {
    numero = prompt("Insira um número ou digite 0 para parar: ");
    if (numero > 0) {
        numerosParaSomar.push(numero);
    }
}

for (let i = 0; i < numerosParaSomar.length; i++) {
    total += parseInt(numerosParaSomar[i]);
}

let media = total / numerosParaSomar.length;

console.log(media);
