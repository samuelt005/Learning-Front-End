//Considere o seguinte objeto que contém informações sobre um usuário:
//Utilize a desestruturação para extrair as propriedades nome, idade e email do objeto usuario
//e armazená-las em variáveis separadas.
//Em seguida, utilize a desestruturação para extrair as propriedades cidade, estado e pais do
//objeto endereco e armazená-las em variáveis separadas.

const usuario = {
    nome: "Maria",
    idade: 28,
    email: "maria@exemplo.com",
    endereco: {
        cidade: "São Paulo",
        estado: "SP",
        pais: "Brasil"
    }
}

const { nome, idade, email } = usuario;
const { cidade, estado, pais } = usuario.endereco;

console.log(nome);
console.log(idade);
console.log(email);

console.log(cidade);
console.log(estado);
console.log(pais);