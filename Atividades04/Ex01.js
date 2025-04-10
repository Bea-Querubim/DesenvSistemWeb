//Prof. Luiz Gustavo D. de O. Véras -Desenvolvimento de Sistemas Web (DSWI6)
//Tecnologia em Análise e Desenvolvimento de Sistemas
//Aluna: Beatriz Querubim Batista - Prontuario BP3016374

/* 
Atividade 1. Crie uma função que após 5 segundos dobre o resultado de um número passado como
argumento. Essa função deverá retornar uma Promise. Use o setTimeOut como temporizador.
*/
function dobrarEm5Segundos(x) {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(x*2);
        }, 5000);
    });
}

dobrarEm5Segundos(5).then(result => {
    console.log(`O valor 5 após dobrar o valor é igual a: ${result}`);
});
   