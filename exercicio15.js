// 15 Crie uma função que receba um número e retorne se ele é positivo, negativo ou zero.

function verifNumeros(X){
    N = parseInt(X)

    if (N == 0) {
        return (console.log("O número é zero"))
    } else if (N < 0) {
        return (console.log("O número " + N + " é negativo."))
    } else {
        return (console.log("O número " + N + " é positivo."))
    }
}

verifNumeros(1)