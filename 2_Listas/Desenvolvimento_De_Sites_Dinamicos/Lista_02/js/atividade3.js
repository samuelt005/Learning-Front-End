//Crie uma função que converta uma temperatura de Celsius para Fahrenheit ou vice-versa, dependendo da escolha do usuário. Exiba o resultado no console.
let opcaoConversao;

function escolherOpcao() {
    opcaoConversao = prompt(`
    Escolha uma opção:
    1 - Celsius para Fahrenheit
    2 - Fahrenheit para Celsius
    `)
}

escolherOpcao();

if (opcaoConversao == 1) {
    let tempParaConverter = prompt("Insira uma temperatura em Celsius para converter:");
    let tempConvertida = ((tempParaConverter * 9 / 5) + 32);
    console.log(tempConvertida.toFixed(2) + " °F");
    escolherOpcao();
} else if (opcaoConversao == 2) {
    let tempParaConverter = prompt("Insira uma temperatura em Fahrenheit para converter:");
    let tempConvertida = ((tempParaConverter - 32) * 5 / 9);
    console.log(tempConvertida.toFixed(2) + " °C");
    escolherOpcao();
} else {
    escolherOpcao;
}