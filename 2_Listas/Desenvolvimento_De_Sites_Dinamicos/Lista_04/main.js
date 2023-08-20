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



//Crie uma função que solicite ao usuário seu nome através de um input e, em seguida, exiba
//uma mensagem personalizada de boas-vindas na DOM.
function exercicio1() {

    function imprimeResposta (value) {
        areaResposta.innerHTML = "";
        let resposta = document.createElement("p");
        areaResposta.appendChild(resposta);
        resposta.innerText = `Bem-vindo Sr(a) ${value}`;
    }

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

    function imprimeResposta (value1, value2) {
        areaResposta.innerHTML = "";
        let resposta = document.createElement("p");
        let resultado = parseInt(value1) + parseInt(value2);
        areaResposta.appendChild(resposta);
        resposta.innerText = `${value1} + ${value2} é igual a ${resultado}`;
    }

    areaResposta.innerHTML = "";
    areaResposta.innerHTML = `
        <form class="formulario">
            <label>Primeiro número:</label>
            <input class="primeiroNumero" type="number">
            <label>Segundo número:</label>
            <input class="segundoNumero" type="number">
            <button>Somar</button>
        </form>
    `;

    let form = document.querySelector(".formulario");
    let primeiroNumero = document.querySelector(".primeiroNumero");
    let segundoNumero = document.querySelector(".segundoNumero");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        imprimeResposta(primeiroNumero.value, segundoNumero.value);
    });
}

//Crie um programa que solicite ao usuário um número através de um formulário e exiba o
//dobro desse número no DOM.
function exercicio3() {
    function imprimeResposta (value) {
        areaResposta.innerHTML = "";
        let resposta = document.createElement("p");
        let dobro = parseInt(value) * 2;
        areaResposta.appendChild(resposta);
        resposta.innerText = `O dobro de ${value} é ${dobro}`;
    }

    areaResposta.innerHTML = "";
    areaResposta.innerHTML = `
        <form class="formulario">
            <label>Insira um número:</label>
            <input class="numero" type="number">
            <button>Calcular</button>
        </form>
    `;

    let form = document.querySelector(".formulario");
    let numero = document.querySelector(".numero");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        imprimeResposta(numero.value);
    });
}

//Crie um programa que solicite ao usuário o raio de um círculo por meio de um formulário.
//Em seguida, calcule e exiba a área do círculo no DOM. Formate a mensagem para incluir um
//link que redirecione para um site com a fórmula da área do círculo.
function exercicio4() {
    function imprimeResposta (value) {
        areaResposta.innerHTML = "";
        let resposta = document.createElement("p");
        const PI = 3.14159265359;
        let area = PI * (parseInt(value) * parseInt(value));
        areaResposta.appendChild(resposta);
        resposta.innerHTML = `<a href="https://www.4devs.com.br/area_circulo">Área do círculo é ${area.toFixed(2)}</a.>`;
    }

    areaResposta.innerHTML = "";
    areaResposta.innerHTML = `
        <form class="formulario">
            <label>Insira o raio de um círculo:</label>
            <input class="raio" type="number">
            <button>Calcular</button>
        </form>
    `;

    let form = document.querySelector(".formulario");
    let raio = document.querySelector(".raio");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        imprimeResposta(raio.value);
    });
}

//Crie um programa que simule um jogo de dados. Peça ao usuário para lançar o dado (gerar
//um número aleatório de 1 a 6) e exiba o resultado no DOM. Repita até que o usuário decida
//parar de jogar.
function exercicio5() {
    areaResposta.innerHTML = "";
    areaResposta.innerHTML = `
        <div>
            <p id="numeroDado"></p>
            <button type="button" id="botao">Rejogar dado</button>
        </div>
    `;

    const numeroDado = document.getElementById("numeroDado");
    const botaoRejogar = document.getElementById("botao");

    function gerarNumero() {
        numeroDado.innerHTML = Math.floor(Math.random() * 6) + 1;
    }

    botaoRejogar.addEventListener("click", gerarNumero);
}

//Crie uma função que converta uma temperatura de Celsius para Fahrenheit ou vice-versa,
//dependendo da escolha do usuário. Exiba o resultado no DOM.
function exercicio6() {

    function celsiusParaFahrenheit() {
        areaResposta.innerHTML = "";
        areaResposta.innerHTML = `
        <form class="formulario">
            <label>Insira a temperatura em Celsius:</label>
            <input class="input" type="number">
            <button class="converter">Converter para Fahrenheit</button>
        </form>
    `;
        let form = document.querySelector(".formulario");
        let input = document.querySelector(".input");

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let convertido = (input.value * (9/5)) + 32;
            areaResposta.innerHTML = "";
            areaResposta.innerHTML = `<p>Temperatura em Fahrenheit é: ${convertido.toFixed(2)}</p>`;
        });
    }

    function fahrenheitParaCelsius() {
        areaResposta.innerHTML = "";
        areaResposta.innerHTML = `
        <form class="formulario">
            <label>Insira a temperatura em Fahrenheit:</label>
            <input class="input" type="number">
            <button class="converter">Converter para Celsius</button>
        </form>
    `;
        let form = document.querySelector(".formulario");
        let input = document.querySelector(".input");

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            let convertido = (input.value - 32) * (5/9);
            areaResposta.innerHTML = "";
            areaResposta.innerHTML = `<p>Temperatura em Celsius é: ${convertido.toFixed(2)}</p>`;
        });
    }

    areaResposta.innerHTML = "";
    areaResposta.innerHTML = `
        <form class="buttons">
            <button type="button" class="cToF">Converter Celsius para Fahrenheit</button>
            <button type="button" class="fToC">Converter Fahrenheit para Celsius</button>
        </form>
    `;

    const botao1 = document.querySelector(".cToF");
    const botao2 = document.querySelector(".fToC");

    botao1.addEventListener("click", celsiusParaFahrenheit);
    botao2.addEventListener("click", fahrenheitParaCelsius);
}

//Crie um programa que gere uma senha aleatória com uma combinação de letras maiúsculas,
//minúsculas, números e caracteres especiais. Peça ao usuário para escolher o tamanho da
//senha. Exiba a senha no DOM
function exercicio7() {
    function gerarSenha() {
        areaResposta.innerHTML = "";
        const caracteres =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&*+,-.;<=>?@[]{|}";
        let resultado = "";
        const tamanho = parseInt(tamanhoSenha.value);

        for (let i = 0; i < tamanho; i++) {
            resultado += caracteres.charAt(
                Math.floor(Math.random() * caracteres.length)
            );
        }

        areaResposta.innerHTML = `
            <p>Sua senha é:</p>
            <p>${resultado}</p>
        `;
    }

    areaResposta.innerHTML = `
        <form class="formulario">
            <label>Insira o tamanho da senha que deseja gerar:</label>
            <input class="input" type="number">
            <button type="submit">Gerar</button>
        </form>
    `;

    let tamanhoSenha = document.querySelector(".input");
    let formulario = document.querySelector(".formulario");

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        gerarSenha();
    });
}