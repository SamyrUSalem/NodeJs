const express = require("express")

const router = express.Router() //O Router seria uma função do express para a criação de rotas

const Checklist = require("../models/checklist")

router.get("/", async (req, res) => {
    try {
        let checklist = await Checklist.find({}) //Dessa forma, iremos devolver o checklist e as task que foram criadas
        res.status(200).render("checklists/index", { checklist: checklist }) //Estou pedindo para renderizar oq esta nesse caminho, e enviei uma variavel q possui a listagem do checklist
    } catch (error) {
        res.status(200).render("pages/error", { error: "Error de exibição" })
    }
})

router.post("/", async (req, res) => { //Assim seria uma rota do tipo Post(envio de dados)
    let { name } = req.body //Com isso, estou dizendo para procurar o name dentro do body
    try {
        let checklist = await Checklist.create({ name }) //Estou criando uma checklist de acordo com o model e guardando o resultado na variavel
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }

})

router.get("/:id", async (req, res) => {//O ":id" quer dizer q essa rota esta esperando um parâmetro id que sera enviado pelo usuário
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render("checklists/show", { checklist: checklist })
    } catch (error) {
        res.status(200).render("pages/error", { error: "Error a lista de Atividades" })
    }


})

router.put("/:id", async (req, res) => {
    let { name } = req.body
    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, { name }, { new: true }) //Como segundo parâmetro é colocado o elemento q será atualizado, o terceiro seria no momento do send, para o valor retornado ser atualizado
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let checklist = await Checklist.findByIdAndDelete(req.params.id)
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})

module.exports = router //Estou exportando a rota