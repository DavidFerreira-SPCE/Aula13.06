// 14 Crie uma função que receba dois números e retorne o maior deles.

function maior(highest,sec_highest ) {
    let X = highest
    let Y = sec_highest

    if ( X > Y ) {
       return console.log ("O maior número entre eles é: " + X)
    } else {
        return console.log ("O maior número entre eles é: " + Y)
    }
        
}

(maior(1999,2880))