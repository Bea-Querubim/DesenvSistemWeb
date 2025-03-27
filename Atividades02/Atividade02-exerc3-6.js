/*Considere a explicação a seguir para os exercícios 3, 4, 5 e 6
Objetos, que são os agrupamentos genéricos de valores, podem ser usados para construir diversos tipos de
estruturas de dados. Uma estrutura de dados comum é a lista (não confundir com array). Uma lista é um
conjunto aninhado de objetos, em que o primeiro objeto mantém uma referência para o segundo, o segundo
para o terceiro, e assim por diante.

let lista = {
 valor: 1,
 restante: {
 valor: 2,
 restante: {
 valor: 3,
 restante: null
 }
 }
};
Os objetos resultantes formam uma cadeia, como segue:
Uma característica interessante das listas é que elas podem compartilhar partes de sua estrutura. Por exemplo,
se eu criar dois novos valores {valor: 0, restante: lista} e {valor: -1, restante: lista} (com
lista referindo-se à vinculação definida anteriormente), eles são listas independentes, mas compartilham a
estrutura que compõe seus últimos três elementos. A lista original ainda é uma lista válida de três elementos.*/

//Atividade 3: Escreva uma função arrayToList que construa uma estrutura de lista como a mostrada quando fornecido [1, 2, 3] como argumento.
function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { valor: arr[i], restante: list };
  }
  return list;
}

console.log(`Atividdade 3, array [1,2,3] em lista -> ${JSON.stringify(arrayToList([1, 2, 3]))}`);

// Atividade 4: Também escreva uma função listToArray que produza um array a partir de uma lista.
function listToArray(list, arr = []) {
  if (list === null) return arr;
  arr.push(list.valor);
  return listToArray(list.restante, arr);
}

let listA = {
  valor: 1,
  restante: {
    valor: 2,
    restante: {
      valor: 3,
      restante: null,
    },
  },
};
console.log(`Atividdade 4:lista ->${JSON.stringify(listA)} em array: [${listToArray(listA)}]`);

// Atividade 5: Adicione uma função auxiliar prepend, que recebe um elemento e uma lista, e cria uma nova lista que adiciona o elemento na frente da lista de entrada
function prepend(value, list) {
  return { valor: value, restante: list };
}
let listB = listA;
console.log(`Atividdade 5: adiionando valor n 10 na lista ${JSON.stringify(listB)} -> ${JSON.stringify(prepend(10,listB))}`)

// Atividade 6: Crie uma funçao chamada nth, que recebe uma lista e um número, e retorna o elemento na posição fornecida na lista (com zero referindo-se ao primeiro elemento) ou undefined quando não há tal elemento.
function nth(list, n) {
  for (let i = 0; list !== null; i++) {
    if (i === n) {
      return list.valor;
    }
    list = list.restante;
  }
  return undefined;
}

console.log(`Atividdade 6: valor da listA no indice 0 -> ${nth(listA,0)}`)
console.log(`Atividdade 6: valor da listB no indice 2 -> ${nth(listB,2)}`)