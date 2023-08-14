//Crie uma função que recebe uma string como parâmetro e conta a quantidade de
//ocorrências de cada palavra na frase. A função deve retornar um objeto Map, onde as chaves
//são as palavras encontradas e os valores são as contagens das palavras.
function contarPalavras(frase) {
    const palavras = frase.split(" ");
    const contagem = new Map();

    palavras.forEach((palavra) => {
        const palavraFormatada = palavra
            .toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        
        if (contagem.has(palavraFormatada)) {
            contagem.set(palavraFormatada, contagem.get(palavraFormatada) + 1);
        } else {
            contagem.set(palavraFormatada, 1);
        }
    });

    return contagem;
}

let frase = prompt("Insira uma frase para contar as palavras: ");
console.log(contarPalavras(frase));
