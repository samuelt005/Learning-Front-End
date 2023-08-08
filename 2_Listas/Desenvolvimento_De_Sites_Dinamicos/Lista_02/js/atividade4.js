//Crie um programa que gere uma senha aleatória com uma combinação de letras maiúsculas, minúsculas, números e caracteres especiais. Peça ao usuário para escolher o tamanho da senha.
let tamanhoSenha = prompt("Insira o tamanho da senha:");

function gerarSenha(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    let contador = 0;

    while (contador < tamanho) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      contador += 1;
    }
    return resultado;
}

console.log(gerarSenha(tamanhoSenha));

