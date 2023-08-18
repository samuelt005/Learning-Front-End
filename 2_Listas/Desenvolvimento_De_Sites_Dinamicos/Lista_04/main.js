let divContainer = document.querySelector(".container");
let areaResposta = document.querySelector(".respostaQuestoes");
let quantidadeQuestoes = 7;

let funcoes = [
    exercicio1,
    exercicio2,
    exercicio3,
    exercicio4,
    exercicio5,
    exercicio6,
    exercicio7
];

window.addEventListener("load", () => {
    for (let i = 0; i < quantidadeQuestoes; i++) {
        let opcao = document.createElement("button");
        divContainer.appendChild(opcao);
        opcao.innerText = `Exercício ${i + 1}`;
        opcao.setAttribute("class", "opcao");
    }


    let opcoes = document.querySelectorAll(".opcao");

    opcoes.forEach((opcao, index) => {
        opcao.addEventListener("click", funcoes[index]);
    })
})

function imprimeResposta (value) {
    console.log("Chegou aqui!")
    areaResposta.innerHTML = "";
    let resposta = document.createElement("p");
    areaResposta.appendChild(resposta);
    resposta.innerText = `Bem-vindo Sr(a) ${value}`;
}

//Crie uma função que solicite ao usuário seu nome através de um input e, em seguida, exiba
//uma mensagem personalizada de boas-vindas na DOM.
function exercicio1() {
    areaResposta.innerHTML = "";
    let form = document.createElement("form")
    let label = document.createElement("label");
    let inputTexto = document.createElement("input");
    let buttonEnviar = document.createElement("button");
    areaResposta.appendChild(form);
    form.appendChild(label);
    form.appendChild(inputTexto);
    form.appendChild(buttonEnviar);
    label.innerText = "Insira seu nome:";
    buttonEnviar.innerText = "Enviar";
    inputTexto.type = "text";
    buttonEnviar.type = "submit";

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        imprimeResposta(inputTexto.value);
    });
}

//Crie um programa que solicite dois números ao usuário por meio de um formulário. Em
//seguida, calcule a soma dos dois números e exiba o resultado no DOM utilizando com a
//seguinte mensagem “{valor 1} + {valor 2} é igual a {resultado}” onde o resultado deve estar
//em negrito.
function exercicio2() {

}

//Crie um programa que solicite ao usuário um número através de um formulário e exiba o
//dobro desse número no DOM.
function exercicio3() {

}

//Crie um programa que solicite ao usuário o raio de um círculo por meio de um formulário.
//Em seguida, calcule e exiba a área do círculo no DOM. Formate a mensagem para incluir um
//link que redirecione para um site com a fórmula da área do círculo.
function exercicio4() {

}

//Crie um programa que simule um jogo de dados. Peça ao usuário para lançar o dado (gerar
//um número aleatório de 1 a 6) e exiba o resultado no DOM. Repita até que o usuário decida
//parar de jogar.
function exercicio5() {

}

//Crie uma função que converta uma temperatura de Celsius para Fahrenheit ou vice-versa,
//dependendo da escolha do usuário. Exiba o resultado no DOM.
function exercicio6() {

}

//Crie um programa que gere uma senha aleatória com uma combinação de letras maiúsculas,
//minúsculas, números e caracteres especiais. Peça ao usuário para escolher o tamanho da
//senha. Exiba a senha no DOM
function exercicio7() {

}