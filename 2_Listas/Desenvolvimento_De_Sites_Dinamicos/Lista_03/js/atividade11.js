//Crie uma classe chamada "Retângulo" que tenha os atributos largura e altura. A classe deve
//ter um método chamado calcularArea que retorna a área do retângulo (largura * altura)
class Retangulo {
    largura;
    altura;
    calculaArea = () => {
        return this.altura * this.largura;
    }
}

let retangulo1 = new Retangulo();
retangulo1.largura = prompt("Insira a largura do retângulo: ");
retangulo1.altura = prompt("Insira a altura do retângulo: ");

alert(`Área total do retângulo: ${retangulo1.calculaArea()}`);