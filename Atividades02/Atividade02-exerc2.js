/*Atividade 2. O operador == compara objetos pela identidade. Mas às vezes é preferível comparar os valores
de suas propriedades reais. Escreva uma função chamada deepEqual que recebe dois valores e retorna true
apenas se eles forem o mesmo valor ou forem objetos com as mesmas propriedades, onde os valores das
propriedades são iguais quando comparados com uma chamada recursiva a deepEqual.
Para descobrir se os valores devem ser comparados diretamente (use o operador === para isso) ou se suas
propriedades devem ser comparadas, você pode usar o operador typeof.
Se ele produzir "object" para ambos os valores, você deve fazer uma comparação profunda.
Você precisa levar em conta uma exceção boba: por causa de um acidente histórico, typeof null
também produz "object".
A função Object.keys será útil quando você precisar percorrer as propriedades dos objetos para
compará-las.
Os objetos que a função deepEqual são os definidos pela notação {"param1": "valor1",
"param2": "valor"}.
 */

function deepEqual(a, b) {
  if (!(a === b)) {
    // Verifica se um dos valores é null ou se não são ambos objetos
    if (
      typeof a !== "object" ||
      typeof b !== "object" ||
      a === null ||
      b === null
    ) {
      return false;
    }

    //verifica se sao do mesmo tamanho
    let itensA = Object.keys(a);
    let itensB = Object.keys(b);
    if (itensA.length !== itensB.length) {
      return false;
    }

    // Compara recursivamente item a item dos objetos
    for (let item of itensA) {
      if (!itensB.includes(item) || !deepEqual(a[item], b[item])) {
        return false;
      }
    }
  }

  //retorna true se são estritamente iguais, ate obj com as mesmas chaves e mesmos valores
  return true;
}
let obj1 = { param1: "valor1", param2: "valor" };
let obj2 = { param1: "valor1", param2: "valor2", param3: "valor" };
let obj3 = { param1: "valor3", param2: "valor" };

console.log(deepEqual(obj1, obj2))
console.log(deepEqual('a','b'))
console.log(deepEqual(1,1))
console.log(deepEqual(obj1,obj1))
console.log(deepEqual(obj1,obj3))
console.log(deepEqual({},obj3))