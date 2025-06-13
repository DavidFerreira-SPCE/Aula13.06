//*const prompt = require('prompt-sync')()
//let num = parseInt(prompt ("Digite um número: "))

//function Verif_Num(a) {
//    let a = num
//    if (a % 2 != 0) {
//     console.log("Este Número Não é par")
//    } else {
//     console.log("Este Número é par")
//  }
//}
// Verif_Num()

// 5 Crie uma função que receba um número e verifique se ele é par ou ímpar. //
function Verif_Num(x = 0) {
    if (x = 0) {
        return ("é um Nº Nulo")
    } else if (x % 2 !== 0) {
        return ("é um Nº Impar")
    } else if (x % 2 ==0) {
        return ("é um Nº Par")
    }
}

console.log(Verif_Num(0))