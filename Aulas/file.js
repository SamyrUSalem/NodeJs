const fs = require("fs") //Biblioteca do  próprio node para a manipulação de arquivos

fs.writeFile("newData.txt", "Primeiro arquivo criado a partir do NodeJs\n", err => { //Com o writeFile é posssível criar um novo arquivo, o primeiro parâmetro é o nome(no caso é um arquivo txt), depois vem o conteúdo e o terceiro seria uma forma de tratar com o error caso n seja possível a criação
    console.log(err)
})

fs.appendFile("newData.txt", "Acrescentando Conteúdo", err => {//Com o append é possível adicionar conteúdos em um arquivo existente
    console.log(err)
})

fs.rename("newData.txt", "dataNew.txt", err => { //Com o rename, posso trocar o nome de um certo arquivo, insiro o arquivo q desejo mudar e coloco o novo nome
    console.log(err)
})

fs.unlink("dataNew.txt", err => console.log(err)) //Com o link é possivel remover arquivos

console.log(__dirname); //Essa seria uma variavel de ambiente do node, a mesma mostra a pasta q será criada o arquivo