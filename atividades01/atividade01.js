//Atividade01 para entrega [Aluna: Beatriz Querubim Batista - Prontuario: BP3016374]

//Atividade 1. Verifique o tipo das diferentes variáveis usando typeof:
console.log("Atividade 1: \n")
let variable1 = 10;
let variable2 = "hello";
let variable3 = true;

console.log(typeof(variable1));
console.log(typeof(variable2));
console.log(typeof(variable3));
console.log("\n ------------------------------- \n");

//Atividade 2. Acesse as propriedades do objeto a seguir:
console.log("Atividade 2: \n")

let person = {
    name: "John",
    age: 30,
    city: "New York"};

console.log(`Nome: ${person.name}`);
console.log(`Idade: ${person.age}`);
console.log(`Cidade: ${person.city}`)
console.log("\n ------------------------------- \n");

//Atividade 3. Verifique o uso de var, let e const e veja as saídas do código
//em um script. Explique o porque do resultado apresentado:
console.log("Atividade 3: \n")

var a = 1;
let b = 2;
const c = 3;
a = 10 // Qual a saída?
console.log(`variavel A esta com o novo valor de ${a}`);
b = 20 // Qual a saída?
console.log(`variavel B esta com o novo valor de ${b}`);

//c= 30 // Qual a saída?
console.log(`variavel C, por ser uma constante, apos a declaração, não é possivel alterar seu valor!\nValor de c:${c}\n\n erro apresentado: TypeError: Assignment to constant variable.`);
console.log("\n ------------------------------- \n");


//Atividade 4. Verifique quais dos valores abaixo são Truthy e Falsy. Faça-o
//utilizando a função Boolean(valor) e imprima o resutado:
/* 
10
true
false
{}
undefined
null
''
'abba'
0
*/
console.log("Atividade 4: \n")

console.log(Boolean(10) ? 10 : 'false'); 
console.log(Boolean(true));
console.log(Boolean(false)); 
console.log(Boolean({}) ? '{}' : 'false'); 
console.log(Boolean(undefined) == false ? 'undefined' : 'Truthy'); 
console.log(Boolean(null) == false ? 'null' : 'false'); 
console.log(Boolean('') == false ? '\"\"' : 'Truthy'); 
console.log(Boolean('abba') ? 'abba' : 'false'); 
console.log(Boolean(0)==false ? '0' : 'true' );
console.log("\n ------------------------------- \n");

//Atividade 5. Verifique as comparações a seguir com os operadores == e ===.
//Qual será a saída para cada um deles? Teste em um script para ver se acertou:
console.log("Atividade 5: \n")

console.log(5 == "5") 
console.log('5 == "5" , são equivalentes em valores, retorna true\n')
console.log(5 === "5")
console.log('5 === "5" , são equivalentes em valores POREM diferentes em tipos ( um é int e o outro string), retorna false\n')
console.log(5 == 5)
console.log('5 == 5 , são equivalentes em valores retorna true\n')
console.log(5 === 5)
console.log('5 === 5 , são equivalentes em valores e IGUAIS em tipos ( ambos são inteiros), retorna true')
console.log("\n ------------------------------- \n");


//Atividade 6. Faça uma atribuição via desestruturação utilizando o objeto abaixo:
console.log("Atividade 6: \n")

let person1 = { name: "Alice", age: 25 };

let { name, age } = person1;

console.log(name); // Alice
console.log(age); // 25
console.log("\n ------------------------------- \n");

//Atividade 7. Defina uma função utilizando function e faça o código abaixo funcionar:
console.log("Atividade 7: \n")

function add(num1, num2) {
    return num1 + num2;
}

console.log(`função soma:` + add(2, 3)); // 5
console.log("\n ------------------------------- \n");

//Atividade 8. Defina uma função utilizando Arrow Function e faça o código abaixo funcionar:
console.log("Atividade 8: \n")

function multiply(num1, num2) {
    return num1 * num2;
}
console.log(`função mutiplicacao:` + multiply(2, 3)); // 6
console.log("\n ------------------------------- \n");

//Atividade 9. Utilize as funções das Atividades 7 e 8 e cria uma nova função
//que as receba como parâmetro. A função deve mostrar o valor resultante:
console.log("Atividade 9: \n")

function executeFunction(name, num1, num2){
    return name == add ? add(num1, num2) : name == multiply ? multiply(num1,num2) : 'função nao existente';
}
console.log(`função que chama a funcao de soma:` + executeFunction(add, 2, 3)); // 5
console.log(`função que chama a funcao de multiplicacao:` + executeFunction(multiply, 2, 3)); // 6
console.log("\n ------------------------------- \n");
