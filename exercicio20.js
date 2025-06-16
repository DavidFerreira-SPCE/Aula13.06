// 20 Crie uma função que receba um array de nomes e exiba um cumprimento para cada nome no console. //
function cumprimentarNomes () {
    {   for (let i = 0; i < nomes.length; i++) {
            console.log("Seja Bem Vindo, " + nomes[i] + "!");
        }
    }
}

let nomes = ["Thiago","Julio","Matheus","Elias","David","Leonardo"]

cumprimentarNomes()


// Respeitar as regras do array, se for string, coloque as aspas, se não for ai deixa inteiro
// O contador é para auxiliar e não atrapalhar, as vezes declare antes de usar o contador, assim você fica mais direcionado, fazer um contador sem ter as variaveis lhe confundirá
// com uma frequência muito alta  