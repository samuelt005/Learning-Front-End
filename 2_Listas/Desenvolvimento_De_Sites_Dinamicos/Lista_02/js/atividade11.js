//Crie um objeto chamado "contaBancaria" com métodos para depositar e sacar dinheiro, além de uma propriedade para o saldo atual. Em seguida, faça algumas operações de depósito e saque e imprima o saldo atual no console
let contaBancaria = {
    saldo: 0,
    depositar: function (valor) {
        this.saldo += valor;
    },
    sacar: function (valor) {
        if (this.saldo <= valor) {
            alert("Saldo insuficiente!");
        } else {
            this.saldo -= valor;
        }
    }
};

while (true) {
    var opcao = parseInt(prompt(`O que deseja fazer: 
    1 - Sacar
    2 - Depositar
    0 - Encerrar e imprimir saldo
    `));

    if (opcao == 0) {
        console.log(contaBancaria.saldo);
        break;        
    }

    var valor = parseInt(prompt("Valor: "));

    switch (opcao) {
        case 1:
            contaBancaria.sacar(valor);
        case 2:
            contaBancaria.depositar(valor);
        default:
            break;
    }
}