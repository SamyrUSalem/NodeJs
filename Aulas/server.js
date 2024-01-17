const http = require("http")

const server = http.createServer((req, res) => { //Com esse código pude criar o servidor, e ele possui dois parâmetros q seria a requisição e a resposta
    console.log(req.method) //Estou pedindo para vizualizar o método q esta sendo utilizado, q no caso é op GET
    console.log(req.url)
    res.statusCode = 200 //O código de status q seria a resposta dada para o cliente, o 200 indica q deu tudo certo
    res.end("<h1>Primeiro Server</h1>")

})
server.listen(3000, () => {//O server esta ouvindo a porta 3000, caso de tudo certo e algo chegue nela, sera executado a seguinte function
    console.log("Deu tudo certo!")
})

