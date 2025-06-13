// 9 Crie uma função que receba uma idade e retorne se a pessoa é “Menor de idade” ou “Maior de idade”. //

function idade(ano = idadeInformada) {
    if(ano <= 0){
        return ("Por favor, Informe um número válido")
    } else if (ano > 0 && ano < 18) {
        return ("Julio tem "+ idadeInformada +" anos, logo é Menor de Idade")
     } else if (ano >= 18) {
        return ("Julio tem "+ idadeInformada +" anos, logo é Maior de Idade")
     }
}

const idadeInformada =  23
console.log(idade(idadeInformada))