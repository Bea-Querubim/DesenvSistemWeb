/*Atividade 2. O operador == compara objetos pela identidade. Mas às vezes é preferível comparar os valores
de suas propriedades reais. Escreva uma função chamada deepEqual que recebe dois valores e retorna true
apenas se eles forem o mesmo valor ou forem objetos com as mesmas propriedades, onde os valores das
propriedades são iguais quando comparados com uma chamada recursiva a deepEqual.
Para descobrir se os valores devem ser comparados diretamente (use o operador === para isso) ou se suas
propriedades devem ser comparadas, você pode usar o operador typeof.
Se ele produzir "object" para ambos os valores, você deve fazer uma comparação profunda.
Você precisa levar em conta uma exceção boba: por causa de um acidente histórico, typeof null
também produz "object".
A função Object.keys será útil quando você precisar percorrer as propriedades dos objetos para
compará-las.
Os objetos que a função deepEqual são os definidos pela notação {"param1": "valor1",
"param2": "valor"}.
 */

function deepEqual(a, b) {
    // Verifica se ambos são iguais diretamente
    if (a === b) {
        return true;
    }

    // Verifica se um dos valores é null ou se não são ambos objetos
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
        return false;
    }

    // Verifica se ambos os objetos têm o mesmo número de chaves
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    // Compara recursivamente todas as propriedades dos objetos
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }

    return true;
}
