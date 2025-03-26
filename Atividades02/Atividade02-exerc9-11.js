/*
Atividade 9. Escreva um loop que realiza sete chamadas para console.log para exibir o seguinte triângulo:
#
##
###
####
#####
######
#######
Pode ser útil saber que você pode encontrar o comprimento de uma string escrevendo .length após ela.
let abc = "abc";
console.log(abc.length);

Atividade 10. Suponha que o método toUpperCase não existisse em uma string. Implemente uma função
toUpperCase que retorna o mesmo resultado da original.
Atividade 11: O método some da classe array retorna true para verificar se pelo menos um dos elementos
desse array atende a um critério especificado por uma função passada como argumento. Os arrays possuem
também um método chamado every. Este retorna true quando a função fornecida retorna true para cada
elemento no array. De certa forma, some é uma versão do operador || que atua em arrays, e every é como o
operador &&.
Implemente a sua própria função every como uma função que recebe um array e uma função como
parâmetros. Escreva essa versão utilizando um loop.
*/

// Atividade 9: Criar um triângulo de '#'
for (let i = 1; i <= 7; i++) {
  console.log('#'.repeat(i));
}

// Atividade 10: Implementar toUpperCase
function toUpperCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= 'a' && char <= 'z') {
      result += String.fromCharCode(char.charCodeAt(0) - 32);
    } else {
      result += char;
    }
  }
  return result;
}

// Atividade 11: Implementar every
function every(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      return false;
    }
  }
  return true;
}