// 13 Crie uma função que receba um número e retorne se ele é um número primo. //

function Primo(P) {
    if (P < 2) {
    return console.log("Este número " + P + " não é primo")
    }
    for (let i = 2; i <= Math.sqrt(P); i++) {
        if (P % i === 0) {
            return console.log("Este número " + P + " não é primo")
            break
        } 
        else return ("Este número " + P + " é primo")
        break;
    }
}
(Primo(10))  