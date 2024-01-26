const express = require("express")
const checkDependentRoute = express.Router()
const Checklist = require("../models/checklist")
const Task = require("../models/task")

checkDependentRoute.get("/:id/tasks/new", async (req, res) => {
    try {
        let task = Task()
        res.status(200).render("tasks/new", { checklisId: req.params.id, task: task })
    } catch (error) {
        res.status(422).render("pages/error", { error: "Error ao carregar o forms" })
    }
})

checkDependentRoute.post("/:id/tasks", async (req, res) => {
    let { name } = req.body.task
    let task = new Task({ name, checklist: req.params.id })

    try {
        await task.save()
        let checklist = await Checklist.findById(req.params.id)
        checklist.tasks.push(task) //Estou indo na propriedade tasks q foi criada no model checklist e enviando os dados para ela
        await checklist.save()
        res.redirect(`/checklist/${req.params.id}`)
    } catch (error) {
        let errors = error.errors
        res.status(422).render("tasks/new", { task: { ...task, errors }, checklisId: req.params.id })
    }
})

module.exports = { checkDependent: checkDependentRoute }