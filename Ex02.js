//Prof. Luiz Gustavo D. de O. Véras -Desenvolvimento de Sistemas Web (DSWI6)
//Tecnologia em Análise e Desenvolvimento de Sistemas
//Aluna: Beatriz Querubim Batista - Prontuario BP3016374

/*
Atividade 2. Implemente uma função chamada doAction que retona uma Promise. A promise deve ser
resolvida 2 segundos após a sua chamada e deve retornar a mensagem olá mundo.
*/

function doAction(){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve( console.log('Olá mundo!'));
        }, '2 seconds');
    });
}

doAction().then({});