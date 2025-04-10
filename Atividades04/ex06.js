//Atividade 6. Refatore o seguinte trecho de código para utilizar async/await:
// Função delay aciona o .then após 1s

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
umPorSegundo(); //fim do enunciado
console.log(`----------------------------\n
        umPorSegundo assync...\n`)
 async function umPorSegundoAsync() {
    await delay().then(() =>{ //em uma função async, devo chamar o .then()?
        console.log('1s')
    });
    await delay().then(() =>{
        console.log('2s')
    });
    await delay().then(() =>{
        console.log('3s')
    });
 }

 async function umPorSegundoAsync() {
    await delay()
    console.log('1s');// aqui funciona mesmo sem chamar o .then()
    
    await delay()
    console.log('2s');
    
    await delay()
    console.log('3s');
    
 }
 umPorSegundoAsync();
