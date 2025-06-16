// 11 Crie uma função que receba um texto e retorne quantos caracteres esse texto possui. //

function Texto(Nome) {
    // Declaro que exemplo recebe o que for digitado no console
    let exemplo = Nome
    // O tamanho receberá os digitos e contará todos os imputs realizados pelo usuário, incluindo espaços
    let tamanho = exemplo.length;
    // após contar, o tamanho receberá o número pela contagem length
    return tamanho;
}
// O número será mostrado na tela
console.log( "O Texto com espaços possui " + (Texto("David Ferreira Leandro Lima") + " caracteres"));  