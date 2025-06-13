// 8. Crie uma função que receba um ano de nascimento e retorne a idade da pessoa. //

function nascimento(ano = 2002) {
    const ano_atual = new Date().getFullYear()
     return ano_atual - ano
}


console.log("A idade é " + nascimento(1973) )