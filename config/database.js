const mongoose = require("mongoose")

mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/toDoList", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("Conectado") }).catch((err) => console.log(err)) //Com a propriedade connect estou realizando a conexão do mongoose com o mongo