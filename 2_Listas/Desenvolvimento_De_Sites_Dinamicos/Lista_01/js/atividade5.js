var valorEmDolares = prompt("Insira um valor em dolares:");
const cotacao = 4.74;

valorEmReais = valorEmDolares * cotacao;

console.log("R$ " + valorEmReais.toFixed(2));