const express = require("express") //Seria um framework como o objetivo de tratar as requisições e respostas do cliente-servidor
const checkListRouter = require("./src/routes/checklist")
const taskRouter = require("./src/routes/task")
const rootRouter = require("./src/routes/index")
const path = require("path")
const methodOverride = require("method-override") //Método usado para podermos trabalhar com o Put e Delete na requisição dos forms
require("../config/database")


const app = express() //Todos os métodos do express estarão no app

app.use(express.static(path.join(__dirname, "public"))) //Dessa forma, estou dizendo que os arquivos estaticos vão ficar na pasta public

app.use(express.json()) // Com esse middleware, é feita uma verificação se existe algum JSON na requisição e caso aja ele será processado e enviado pelo boy da req

app.use(express.urlencoded({ extended: true })) //Esse middleware irá fazer a requisição do formulario, faz com que os valores q virem da url(do forms) estejam dispobiveis

app.use(methodOverride("_method", { methods: ["POST", "GET"] })) //Iniciando o method override, o segundo parâmetro estou dizendo para o mesmo atuar no post e get (seria para sobrescrever esses dois valores de acordo com aquele q esta na url)

app.use("/checklist", checkListRouter) //Esse primeiro parâmetro quer dizer que todas as rotas q estãno checkListRouter são derivadas da rota /checklist
app.use("/checklist", taskRouter.checkDependent) //Esse middleware ira analisar a mesma url q o de cima
app.use("/", rootRouter)

app.set("views", path.join(__dirname, "src/views")) //Estou dizendo o caminho onde esta as views

app.set("view engine", "ejs") //Estou dizendo q as view é o EJS q foi instalado

app.listen(3000, () => {
    console.log("Deu tudo certo!")
})


//Aula
// const log = (req, res, next) => {//Dessa maneira é possível criar um novo middleware
//     console.log(req.body)
//     console.log(`Data de hoje: ${Date.now()}`)
//     next() //O next é usado para da seguimento no encadeamento ao próximo middlewares
// }

// app.use(log)

// app.get("/", (req, res) => {//Estou criando uma rota get, e dizendo q será uma chamada da raíz do próprio domínio(referencio isso com a "/")
//     res.send("<h1>To Do List</h1>")
// })

// app.get("/json", (req, res) => {//Essa rota é uma forma de devolver um dado json
//     res.json({ title: "Atividade", done: true })//todas as respostas serão convertidas para JSON, com isso poderia ser enviada para um app mobile ou outro tipo de sistema
// })

//Foi instalado o nodemon para ficar monitorando o arquvio e caso ocorra alguma mudança será atualizada automaticamente (npx nodemon app.js )


