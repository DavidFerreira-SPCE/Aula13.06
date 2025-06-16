// 18 Crie uma função que receba um valor e um percentual e retorne o valor com o percentual aplicado (ex: desconto). //

function desconto(valor) {
    let desconto = 0.1
    let valorinicial = valor
    let valor_final

     valor_final = valor - (valor * desconto)
     return valor_final
}

console.log("Seu valor total da compra após a aplicação do benefício (desconto) de 10% aplicado ficaram no valor de: R$ " + desconto(382.50))  