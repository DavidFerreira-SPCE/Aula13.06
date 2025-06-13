const prompt = require('prompt-sync')()
let num = parseInt(prompt ("Digite um número: "))

function Verif_Num(a) {
    let a = num
    if (a % 2 != 0) {
    console.log("Este Número Não é par")
    } else {
    console.log("Este Número é par")
    }
}

Verif_Num()