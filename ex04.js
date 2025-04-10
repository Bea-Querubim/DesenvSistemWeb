/* Atividade 4. Considere o seguinte código:
Implemente as funções acima que retornam Promises seguindo a seguinte lógica:
firstPromise: deve ser resolvido se numInt é maior que 2 e rejeitada caso contrário;
secondPromise: deve ser resolvida se data + 1 é par e rejeitada caso contrário.
*/

function firstPromise(numInt){
 return new Promise((resolve, reject)=>{
    if(numInt > 2){
        resolve(numInt);
    }else{
        reject(new Error(`Erro: Menor que 2`));
    }
 });
}

function secondPromise(data){
    return new Promise((resolve, reject)=>{
        const res = data+1
        if (res % 2 == 0){
            resolve(`Numero ${data} é Par`);
        }else{
            reject(new Error(`Erro: numero ${data} é Impar`));
        }
    });
}
let numInt = 1;
//let numInt = 5;
//let numInt = 8;
firstPromise(numInt)
 .then(data => secondPromise(data))
 .then(data =>{
 console.log(data)
 }).catch(e => {
 console.log(e.message)
 })