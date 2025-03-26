/*
Desenvolvimento de Sistemas Web (DSWI6)
Tecnologia em Análise e Desenvolvimento de Sistemas
Aluna Beatriz Querubim  Batista - Prontuario: BP3016374
*/


/*Atividade 1. Escreva uma classe Vec que represente um vetor no espaço bidimensional (Use qualquer uma
das notações apresentadas em aula). Ela recebe parâmetros x e y (números), que deve salvar como
propriedades com os mesmos nomes.*/
class Vec {
//construtor
    constructor(valueX, valueY) {
    this.x = valueX;
    this.y = valueY;
    } 

    /*
    Forneça ao protótipo/classe de Vec dois métodos, plus e minus, que recebem outro vetor como parâmetro e
    retornam um novo vetor que contém a soma ou diferença dos valores x e y dos dois vetores (o vetor atual e o
    parâmetro).
    */
    plus(vet){
        return new Vec(this.x+vet.x, this.y+vet.y)
    }

    minus(vet){
        return new Vec(this.x-vet.x, this.y-vet.y)
    }

    /*
    Adicione uma propriedade getter length ao protótipo que calcula o comprimento do vetor - isto é, a distância
    do ponto (x, y) à origem (0, 0).*/
    //Fórmula para vetores bidimensionais |v| = √(a2 + b2)  -> https://mundoeducacao.uol.com.br/matematica/norma-ou-modulo-um-vetor.htm 
    get getLength(){
        const result = Math.sqrt((this.x * this.x) + (this.y * this.y)).toFixed(2);
        return result>=0 ? result : result*(-1) ; // retorna o modulo, ou seja, apenas o valor positivo
    }

    toString() { return `vetor[ ${this.x} ,${this.y}]`; }
}
/*
Teste sua classe criando dois objetos com new e demonstrando as saídas das operações dos métodos
implementados na classe.
*/

let vet1 = new Vec(1, 3);
let vet2 = new Vec(2, 4);

let resultPlus = vet1.plus(vet2);
let resultMinus = vet1.minus(vet2);

console.log(`Vet1: ${vet1}`);
console.log(`Vet2: ${vet2}`);

console.log(`\nComprimento do vet1: ${vet1.getLength}`);
console.log(`Comprimento do vet2: ${vet2.getLength}`);


console.log(`\n-----------------\nResultado da soma [vet1.plus(vet2)]: (${resultPlus.x}, ${resultPlus.y})`);
console.log(`Resultado da subtração [vet1.minus(vet2)]: (${resultMinus.x}, ${resultMinus.y})`);

console.log(`\nComprimento do vetor resultado da soma[vet1.plus(vet2)]: ${resultPlus.getLength}`);
console.log(`Comprimento do vetor resultado da subtração [vet1.minus(vet2)]: ${resultMinus.getLength}`);