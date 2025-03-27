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
console.log(abc.length);*/
let hash = "#";
console.log("Atividade 09:\n")
while (hash.length <= 7) {
  console.log(hash);
  hash += '#'; 
}

/*
Atividade 10. Suponha que o método toUpperCase não existisse em uma string. Implemente uma função
toUpperCase que retorna o mesmo resultado da original.*/
function toUpperCase(str) {
  const mapAcentos = {
    'á': 'Á', 'à': 'À', 'ã': 'Ã', 'â': 'Â', 'ä': 'Ä',
    'é': 'É', 'è': 'È', 'ê': 'Ê', 'ë': 'Ë',
    'í': 'Í', 'ì': 'Ì', 'î': 'Î', 'ï': 'Ï',
    'ó': 'Ó', 'ò': 'Ò', 'õ': 'Õ', 'ô': 'Ô', 'ö': 'Ö',
    'ú': 'Ú', 'ù': 'Ù', 'û': 'Û', 'ü': 'Ü',
    'ç': 'Ç'
  };
  
  return str.replace(/[a-záàãâäéèêëíìîïóòõôöúùûüç]/g, (char) => 
    mapAcentos[char] || String.fromCharCode(char.charCodeAt(0) - 32)
  );
}

console.log(`\nAtividade10:\nisso é um teste em maiusculo: ${toUpperCase("isso é um teste!")}\n\n`);

/*
Atividade 11: O método some da classe array retorna true para verificar se pelo menos um dos elementos
desse array atende a um critério especificado por uma função passada como argumento. Os arrays possuem
também um método chamado every. Este retorna true quando a função fornecida retorna true para cada
elemento no array. De certa forma, some é uma versão do operador || que atua em arrays, e every é como o
operador &&.
Implemente a sua própria função every como uma função que recebe um array e uma função como
parâmetros. Escreva essa versão utilizando um loop.
*/
function every(arr, func) {
  for (let element of arr) {
    if (!func(element)) { // Se algum elemento não passar no teste, retorna false
      return false;
    }
  }
  return true; // Se todos os elementos passarem, retorna true
}

console.log(`Atividade 11: verificar se [2,6,8] sao > 10 => ${every([2, 6, 8], x => x > 10)}`); 
console.log(`Atividade 11: verificar se [-1-2,-3] sao <0 => ${every([-1, -2, -3], x => x < 0)}`); 