const mongoose = require("mongoose")

const checklistSchema = mongoose.Schema({ //O Schema faz com que todos os dados q estão no collection checklist siga esse padrão abaixo, então todos terão q ter um name (Esse tipo de banco de dados n tem uma estrtura fixa, mas tem monentos q é importante possuir  alguma estrutura pré montada)
    name: { type: String, required: true },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }]
})

module.exports = mongoose.model("Checklist", checklistSchema) //O model foi criado, e o seu nome é checklist