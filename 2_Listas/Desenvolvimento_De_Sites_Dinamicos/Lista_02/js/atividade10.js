//Crie um objeto chamado "calculadora" com métodos para adição, subtração, multiplicação e divisão. Em seguida, use esses métodos para calcular e imprimir o resultado de uma operação matemática no console.
var calculadora = {
    adicao: function (a, b) {
      return a + b;
    },
    subtracao: function (a, b) {
        return a - b;
    },
    multiplicacao: function (a, b) {
        return a * b;
    },
    divisao: function (a, b) {
        return a / b;
    }
  };

var numeroA = parseFloat(prompt("Insira o primeiro número: "));
var numeroB = parseFloat(prompt("Insira o segundo número: "));

var opcao = parseInt(prompt(`O que deseja fazer com os dois número: 
1 - Adição
2 - Subtração
3 - Multiplicação
4 - Divisão
`));

switch (opcao) {
    case 1:
       console.log(calculadora.adicao(numeroA, numeroB));
        break;
    case 2:
        console.log(calculadora.subtracao(numeroA, numeroB));
        break;
    case 3:
        console.log(calculadora.multiplicacao(numeroA, numeroB));
        break;
    case 4:
        console.log(calculadora.divisao(numeroA, numeroB));
        break;
    default:
        break;
}