const express = require("express")

const router = express.Router() //O Router seria uma função do express para a criação de rotas

router.get("/", (req, res) => {
    console.log("Testando")
    res.send()
})

router.post("/", (req, res) => { //Assim seria uma rota do tipo Post(envio de dados)
    console.log(req.body)
    res.status(200).send(req.body)
})

router.get("/:id", (req, res) => {//O ":id" quer dizer q essa rota esta esperando um parâmetro id que sera enviado pelo usuário
    console.log(req.params.id)
    res.send(`Id enviado: ${req.params.id}`)
})

router.put("/:id", (req, res) => {
    console.log(req.params.id)
    res.send(`Id enviado com o método PUT: ${req.params.id}`)
})

router.delete("/:id", (req, res) => {
    console.log(req.params.id)
    res.send(`Delete: ${req.params.id}`)
})

module.exports = router //Estou exportando a rota