function media(R) {
   const prompt = require('prompt-sync')()
   let a = parseInt(prompt ("Digite a primeira nota: "))
   let b = parseInt(prompt ("Digite a segunda nota: "))
   let c = parseInt(prompt ("Digite a terceira nota: " )) 
   R = ((a + b + c) / 3)
   console.log("A média do aluno é: " + R)
};

media()