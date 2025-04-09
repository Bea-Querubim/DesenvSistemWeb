/*
Atividade 3. Crie uma função que retorne uma Promise seguindo as seguintes orientações:
Se o argumento da função não for um número, retorne uma promessa rejeitada instantaneamente e
forneça uma mensagem de "erro" aos dados (em uma string);
Se os dados forem um número ímpar, retorne uma promessa resolvida 1 segundo depois e forneça os
dados "ímpares" (em uma string);
Se os dados forem um número par, retorne uma promessa rejeitada 2 segundos depois e forneça os
dados "par" (em uma string).
*/

function parOuImpar(x){
        return new Promise((resolve, reject) =>{
            if(typeof x !== "number") reject(new Error("Não é um número válido!"));
            else if(x % 2 !== 0){
                    setTimeout(() => {
                        resolve(`O numero ${x} é Impar`);
                    }, '2 seconds');
            }else {
                setTimeout(() => {
                    reject(new Error(`O numero ${x} é Par`));
                            }, '1 seconds');
            }     
        }
    );
}


parOuImpar('5')
    .then((ok) => console.log("Result: ", ok))
    .catch((e) => console.log("Teste passando string:\nError: ",e.message));


 parOuImpar(4)
     .then((ok) => console.log("Result: ", ok))
     .catch((e) => console.log("\nTeste passando numero 4:\nError: ",e.message));


 parOuImpar(5)
     .then((ok) => console.log("\nTeste passando numero 5: \nResult: ", ok))
     .catch((e) => console.log("Error: ",e.message));