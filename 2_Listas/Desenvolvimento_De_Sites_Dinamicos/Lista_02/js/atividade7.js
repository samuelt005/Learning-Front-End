//Crie uma calculadora que solicite ao usuário o peso e a altura e calcule o IMC. Exiba a categoria do IMC (abaixo do peso, peso normal, sobrepeso, etc.) usando condicionais.
let peso = parseInt(prompt("Insira seu peso em KG:"));
let altura = parseInt(prompt("Insira sua altura em cm:"));

let alturaMetros = altura / 100;

var imc = peso / (alturaMetros * alturaMetros);

console.log("Seu IMC é: " + imc);

if (imc < 18.5) {
    console.log("Você esta abaixo do peso normal!");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Você esta com peso normal!");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Você esta com excesso de peso!");
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Você esta com obesidade classe I!");
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Você esta com obesidade classe II!");
} else if (imc > 40) {
    console.log("Você esta com obesidade classe III!");
}