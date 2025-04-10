/*
Atividade 5. Considere a função a seguir. Ela é uma função de soma que precisará ter como resultado um
número par. Para isso, você precisará criar os seguintes callbacks:
callbackSucesso() = trará uma mensagem de sucesso, dizendo que a operação foi concluída com
sucesso e que o número somado é par.
callBackError() = trará uma mensagem de erro, dizendo que a operação falhou, trazendo um número
impar (resultado da soma).
Crie uma função que produza uma Promise para representar essa operação de somar.
Dica: Utilize uma promise com callback que recebe como parâmetros os objetos (resolve, reject).

*/

//entendendo o enunciado e realizando a logica
function somar(a,b){
    const res = a + b;
    if (res % 2 == 0){
    callbackSucesso(res);
    } else {
    callbackError(res);
    }
   }
function callbackSucesso(res){
    console.log("\nResposta gerada com sucesso");
    console.log(`O numero somado é igual a ${res} e é Par!`)
   }
function callbackError(res){
    console.log(`\nOperação falhou.`);
    console.log(`O numero somado é igual a ${res} e é Impar!`)
   }

console.log("usando callback...\n");
somar(2, 4, callbackSucesso, callbackError); //callbackSucesso por ser par
somar(3, 4, callbackSucesso, callbackError); //callbackErro por ser impar

console.log("\n----------------------------\n")

//adaptando o codigo acima em uma promise
function somarPromisse(numUm, numDois){
    return new Promise((resolve, reject)=>{
        const result = numUm + numDois;
        if(result %2 == 0){
            resolve(result);
        }else {
            reject(result);
        }
    });
}
console.log("usando Promise...\n");
somarPromisse(2,4)
    .then(callbackSucesso)
    .catch(callbackError);

somarPromisse(1,2)
    .then(callbackSucesso)
    .catch(callbackError);

