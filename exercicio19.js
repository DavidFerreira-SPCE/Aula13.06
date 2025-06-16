// 19 Crie uma função que receba um array de números e retorne a soma de todos os elementos. //

function somaElementos(array,x) {
    let soma = x
    for (let i = 0; i < array.length; i++){
        //fiz um erro aqui, nunca pode ser igual se não ele tenta somar casas a frente
        soma += array[i]
    }
    return soma
}
let numeros = [12,5,66,48,21]
let valor = 5


console.log("A soma dos números é: " + somaElementos(numeros, valor));