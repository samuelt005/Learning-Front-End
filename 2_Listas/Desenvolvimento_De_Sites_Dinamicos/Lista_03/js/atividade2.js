//Crie uma função que receba o nome de um aluno e suas notas em três disciplinas diferentes.
//Em seguida, calcule a média das notas e retorne uma mensagem usando template strings,
//informando o nome do aluno, suas notas e a média calculada.
let nome = prompt("Insira seu nome: ");
let nota1 = parseInt(prompt("Insira a primeira nota: "));
let nota2 = parseInt(prompt("Insira a segunda nota: "));
let nota3 = parseInt(prompt("Insira a terceira nota: "));

media = (nota1 + nota2 + nota3) / 3;

alert(`Nome: ${nome} 
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
Média: ${media}
`);
