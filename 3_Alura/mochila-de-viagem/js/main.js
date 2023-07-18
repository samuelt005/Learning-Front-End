//Constantes criadas para facilitar o acesso no document
const formulario = document.getElementById("novoItem");
const lista = document.getElementById('lista');

//Constante dos itens adicionados pelo usuário que vão ficar salvos no navegador
//Vai pegar os itens do localstorage, mas se não haver nada vai criar um array novo
const itens = JSON.parse(localStorage.getItem("itens")) || [];

//Função para puxar os itens salvos no localStorage
itens.forEach( (elements) => {
    criaElemento(elements);
})

//Função anônima para adicionar elementos na ul 
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); //Evita que o envio dos dados seja para o nevegador (não vai recarregar a página e jogar os dados na URL)
    
    //Constantes locais para acesar o "nome" e "quantidade" inserido pelo usuário
    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    //Constante para achar o nome do item inserido pelo usuário caso já exista
    const dadoExistente = itens.find(elements => elements.nome === nome.value);

    //Cria um objeto que vai receber no contexto o "nome" e "quantidade"
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    //Se o item já existir na string então ele vai atribuir o id do item existente ao item atual
    //Se o item não existir ele vai chamar a função para criar um elemento (li) e então inclui-lo na lista de itens
    if (dadoExistente) {
        itemAtual.id = dadoExistente.id; //Atribui o id do item existente ao item atual dentro do contexto da função
        
        atualizaElemento(itemAtual); //Chama a função para atualizar o elemento

        itens[itens.findIndex(elemento => elemento.id === dadoExistente.id)] = itemAtual; //Sobrescreve o objeto do array itens pelo item atual
    } else {
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0; //Se o array é maior que 0 pega o ultimo id e soma + 1, se o array for igual a 0 atribui o primeiro item o id 0 (usando if ternário)

        criaElemento(itemAtual); //Chama a função para criar elementos

        itens.push(itemAtual); //Insere o objeto atual no array de itens
    }

    localStorage.setItem("itens", JSON.stringify(itens)); //Armazena no local storage os itens como string (substitui por completo a chave "itens")

    //Limpa os campos "nome" e "quantidade" de qualquer dado após clicar no botão "Adicionar"
    nome.value = ""; 
    quantidade.value = "";
})

//Função para criar um elemento novo, ou seja, uma li com dados dentro para cada item salvo no localStorage
function criaElemento(item) { //Recebe o nome e quantidade inserido pelo usuário

    const novoItem = document.createElement('li'); //cria uma nova li
    novoItem.classList.add("item"); //Adiciona a class "item" a li

    const numeroItem = document.createElement('strong'); //Cria a tag strong
    numeroItem.dataset.id = item.id;
    numeroItem.innerHTML = item.quantidade; //Adiciona a quantidade inserida pelo usuário dentro da tag strong

    novoItem.appendChild(numeroItem); //Insere a tag strong dentro da li
    novoItem.innerHTML += item.nome; //Insere dentro da li o nome inserido pelo usuário

    novoItem.appendChild(botaoDeleta(item.id)); //Cria um botão e insere o mesmo na li. Envia como parâmetro o id do item para exclui-lo no localStorage

    lista.appendChild(novoItem); //Adiciona no HTML da página, na parte da ul a nova li criada
}

//Função para atualizar o elemento existente
function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade; //Vai selecionar o item com data-id igual ao item.id (item atual que foi encontrado anteriormente, e vai sobscrever a parte interna da tag HTML pela quantidade do item atual)
}

//Função para criar uma tag button com o texto "X"
function botaoDeleta(id) {
    const elementoBotao = document.createElement("button"); //Cria uma tag button
    elementoBotao.innerText = "X"; //adiciona o texto "X" a tag button
    elementoBotao.classList.add("botaoDeleta"); //adiciona a class "botaoDeleta" a tag button para estilização

    elementoBotao.addEventListener("click", function() { //cria uma função anônima, mas que não é arrow function, pois arrow function não permite usar o "this"
        deletaElemento(this.parentNode, id); //chama a função "deletaElemento" passando como parâmetro a tag pai do botão clicado e o id do item
    })

    return elementoBotao;
}

//Função para deletar elemento li pai do elemento do botão delete criado
function deletaElemento(element, id) {
    element.remove(); //elimina o elemento li

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1); //Acha o index correto do id passado dentro dos elementos e deleta o mesmo

    localStorage.setItem("itens", JSON.stringify(itens)); //Armazena no local storage os itens como string (substitui por completo a chave "itens")
}