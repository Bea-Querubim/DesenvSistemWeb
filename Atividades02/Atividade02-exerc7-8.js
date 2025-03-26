/*Atividade 7: Utilize o método reduce em combinação com o método concat para "achatar" (Flattening) um
array de arrays em um único array que contém todos os elementos dos arrays originais.
Entrada: [[1, 2, 3], [4, 5], [6]];
Saída: [1, 2, 3, 4, 5, 6];
Atividade 8. Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso.
Dica: use a função “split” de uma string que quebra a string em pedaços dado um separador como
argumento da função. Nesse caso, o separador é a barra (/) da data.
Exemplo: Para a entrada “22/04/1983” deve ser escrito “22 de abril de 1983”.*/
// Atividade 7: Achatar um array de arrays
function flatten(arrays) {
    return arrays.reduce((acc, current) => acc.concat(current), []);
  }

  // Atividade 8: Converter data para formato por extenso
function dataPorExtenso(data) {
    const meses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    
    const partes = data.split("/");  // Divide a data no formato "dd/mm/aaaa"
    const dia = partes[0];
    const mes = partes[1] - 1;  // Subtrai 1 pois os meses no array começam de 0 (janeiro)
    const ano = partes[2];
    
    return `${dia} de ${meses[mes]} de ${ano}`;
  }