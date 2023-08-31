const EXIBIR_TAREFAS = document.querySelector("#exibirTarefas");

EXIBIR_TAREFAS.addEventListener("click", (event) => {
    event.preventDefault();

    let tarefas = [];

    function exibirTarefas() {
        const listaTarefas = document.getElementById("listaTarefas");
        listaTarefas.innerHTML = "";

        for (let i = 0; i < tarefas.length; i++) {
            const li = document.createElement("li");
            li.textContent = "Tarefa " + (i + 1)  + ": " + tarefas[i];
            listaTarefas.appendChild(li);
        }
    }

    function adicionarTarefa() {
        const inputTarefa = document.getElementById("inputTarefa");
        const textoTarefa = inputTarefa.value.trim();

        if (textoTarefa !== "") {
            tarefas.push(textoTarefa);
            inputTarefa.value = "";
            exibirTarefas();
        }
    }

    AREA_RESPOSTA.innerHTML = `
    <h1 class="tituloNoticias">Cadastro de Tarefas</h1>
    <input type="text" id="inputTarefa" placeholder="Digite uma nova tarefa">
    <button id="addButton">Adicionar Tarefa</button>
    <ul id="listaTarefas"></ul>
    `;

    // Event listener para o botão de adicionar tarefa
    const addButton = document.getElementById("addButton");
    addButton.addEventListener("click", adicionarTarefa);

    // Renderiza as tarefas iniciais (caso existam)
    exibirTarefas();
});



