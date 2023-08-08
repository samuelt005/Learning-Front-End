//Peça ao usuário para inserir uma senha e utilize um loop para verificar se ela atende aos critérios de segurança (por exemplo, contém pelo menos uma letra maiúscula, um número e um caractere especial).
let atendeRequisitos = false;
let senha;

function insereSenha() {
    senha = prompt(`
    Insira uma senha que contenha:
    - 2 caractéres especiais
    - 4 números
    - 1 letra maiúscula
    `);
}

function verificaSenha(senha) {
    let caracteresEspeciais = senha.match(/[^a-zA-Z0-9]/g);
    let numeros = senha.match(/[0-9]/g);
    let letraMaiuscula = senha.match(/[A-Z]/g);

    if (caracteresEspeciais === null || numeros === null || letraMaiuscula === null) {
        console.log("Senha não atende aos requisitos!");
        return false;
    } else if (caracteresEspeciais.length == 2 || numeros.length == 4 || letraMaiuscula.length == 1) {
        return true;
    } else {
        console.log("Senha não atende aos requisitos!");
        return false;
    }
}

while (!atendeRequisitos) {
    insereSenha();
    atendeRequisitos = verificaSenha(senha);
    if (atendeRequisitos) {
        console.log("Senha atende aos requisitos!");
    }
}

