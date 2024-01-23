const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    name: { type: String, required: true },
    done: { type: Boolean, default: false },
    checklist: {
        type: mongoose.Schema.Types.ObjectId, //Dessa forma, estou efetuando uma referência então toda task tem q esta associada ao Checklist
        ref: "Checklist", //Referenciando o model criado
        required: true
    }
})

module.exports = mongoose.model("Task", taskSchema) 