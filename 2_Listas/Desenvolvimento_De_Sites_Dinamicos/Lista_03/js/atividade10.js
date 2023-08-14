//Crie uma função que recebe dois arrays de mesmo tamanho, um contendo chaves e outro
//contendo valores. A função deve retornar um objeto Map, onde as chaves são os elementos
//do primeiro array e os valores são os elementos correspondentes do segundo array.
function mapearArrays(array1, array2) {
    const mapa = new Map();

    for (let i = 0; i < array1.length; i++) {
        mapa.set(array1[i], array2[i]);
    }

    return mapa;
}

const array1 = ["elemento 1", "elemento 2", "elemento 3", "elemento 4"]
const array2 = [10, 20, 30, 40]
console.log(mapearArrays(array1, array2));
