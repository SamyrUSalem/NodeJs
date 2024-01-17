const process = require("process") //Essa seria uma biblioteca do próprio node, por conta disso n é necessário instalar 

console.log(process.argv) //Com esse método é possível verficar os paramentro que são passados via script

console.log("Oq vc acha legal ?")
process.stdin.on("data", (keyboard) => {//Com o stdin.on posso coletar os dados do usuário, o data seria os dados e depois utilizo uma arrow function para armazenar oq for digitado
    process.stdout.write(`Então vc acha legal ${keyboard} `) //Esse é um método para exibir dados no terminal, como o console.log
    process.exit() //Se n houver esse comando, a function ficaria aberta

})