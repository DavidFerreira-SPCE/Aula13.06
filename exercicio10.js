// 10 Crie uma função que receba um valor em reais e uma taxa de conversão e retorne o valor em dólares.//

function cambio(Dol){
    const RS = 5.57
    return RS * Dol 
}

console.log(cambio(756).toFixed(2))


// Esse código tem uma maracutaia do JavaScript, ele ja aceita numeros float como declaração de variaveis, o float é real basicamente porém, quando for necessário ajustar
// a exibição para uma determinada quantidade de casas decimais, utilize a correção toFixed(Valor) para corrigir a quantidade de decimais solicitado

// No caso desse câmbio não era necessário fazer declaração de variavel em todos os espaços, somente na moeda que eu quero converter e o valor da moeda convertida para realizar
// o cálculo