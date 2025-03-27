/*Atividade 7: Utilize o método reduce em combinação com o método concat para "achatar" (Flattening) um
array de arrays em um único array que contém todos os elementos dos arrays originais.
Entrada: [[1, 2, 3], [4, 5], [6]];
Saída: [1, 2, 3, 4, 5, 6];*/
function achatar(arrays) {
  return arrays.reduce((acc, current) => acc.concat(current), []);
}

let arr = [[1, 2, 3], [4, 5], [6]];
console.log(`achatando o array ${JSON.stringify(arr)} -> ${JSON.stringify(achatar(arr))} `);

/*Atividade 8. Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso.
Dica: use a função “split” de uma string que quebra a string em pedaços dado um separador como
argumento da função. Nesse caso, o separador é a barra (/) da data.
Exemplo: Para a entrada “22/04/1983” deve ser escrito “22 de abril de 1983”.*/
function dataEmExtenso(data) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  let [dia, mes, ano] = data.split("/");
  
  return `${dia} de ${meses[parseInt(mes) - 1]} de ${ano}`;
}

let dt1 = "22/04/1983";
console.log(`A data ${dt1} em extenso é igual a ${dataEmExtenso(dt1)}`);
