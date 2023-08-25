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


function exercicio1() {
}
