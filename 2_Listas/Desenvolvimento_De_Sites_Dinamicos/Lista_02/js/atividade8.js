//Crie um programa que permite ao usuário adicionar itens a uma lista de compras e exiba a lista completa quando ele finalizar.
var produto, quant;
var produtoLista = [], quantLista = [];

while (true) {
    produto = prompt("Insira um produto da lista de compras ou 0 para parar: ");
    if (produto == 0) {
        break;
    }
    quant = prompt("Insira a quantidade do produto " + produto + ": ");

    produtoLista.push(produto);
    quantLista.push(quant);
}

for (let i = 0; i < produtoLista.length; i++) {
    console.log("Produto " + (i + 1) + ": " + produtoLista[i] + "  " + "Quantidade: " + quantLista[i]);
}