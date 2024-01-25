const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.render("pages/index") //Estou usando o render para renderizar as views q se encontra nesse caminho
})

module.exports = router