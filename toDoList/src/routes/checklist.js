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

router.get("/new", async (req, res) => {
    try {
        let checklist = new Checklist() //Com isso, estou passando um objeto vazio como parâmetro mas como o form é preenchido esse objeto tambem vai ser
        res.status(200).render("checklists/new", { checklist: checklist })
    } catch (error) {
        res.status(500).render("pages/error", { error: "Error de Carregamento" })

    }
})

router.get("/:id/edit", async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render("checklists/edit", { checklist: checklist })
    } catch (error) {
        res.status(500).render("pages/error", { error: "Erro ao editar" })

    }
})

router.post("/", async (req, res) => { //Assim seria uma rota do tipo Post(envio de dados)
    let { name } = req.body.checklist //Com isso, estou dizendo para procurar o name dentro do checklist (pq o forms esta armazenando nesse objeto)
    let checklist = new Checklist({ name })
    try {
        await checklist.save() //Estou criando uma checklist de acordo com o model 
        res.redirect("/checklist") //Estou redirecionando para a tela de checklist
    } catch (error) {
        res.status(422).render("checklist/new", { checklist: { ...checklist, error } }) //Dessa maneira, estou devolvendo o checklist q foi passado junto com o error q diz aonde ocorrei
    }

})

router.get("/:id", async (req, res) => {//O ":id" quer dizer q essa rota esta esperando um parâmetro id que sera enviado pelo usuário
    try {
        let checklist = await Checklist.findById(req.params.id).populate("tasks") //Como quero q mostre as tasks q estão associadas a um checklist, o populate vai fazer com q o mongoose procure no array de tasks q estão dentro do model checklist e irá pega-las (auxiliando no campo q possui o numero de tarefas, dessa forma será possivel verificar quantas tarefas possuem)
        res.status(200).render("checklists/show", { checklist: checklist })
    } catch (error) {
        res.status(500).render("pages/error", { error: "Erro ao exibir a lista de Atividades" })
    }


})

router.put("/:id", async (req, res) => {
    let { name } = req.body.checklist
    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, { name }, { new: true }) //Como segundo parâmetro é colocado o elemento q será atualizado, o terceiro seria no momento do send, para o valor retornado ser atualizado
        res.redirect("/checklist")
    } catch (error) {
        let errors = error.errors
        res.status(422).render("checklists/edit", { checklist: { ...checklist, errors } })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        let checklist = await Checklist.findByIdAndDelete(req.params.id)
        res.redirect("/checklist")
    } catch (error) {
        res.status(500).render("pages/error", { error: "Erro ao remover a lista de Atividades" })
    }
})

module.exports = router //Estou exportando a rota