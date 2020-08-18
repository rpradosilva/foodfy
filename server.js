const express = require("express")
const server = express()
const port = 5000
const nunjucks = require("nunjucks")
const recipesList = require("./data")


server.set("view engine", "njk")

server.use(express.static("public"))

server.listen(port, function() {
    console.log(`Server is running in: http://localhost:${port}`)
})


server.get("/", function(req, res) {
    return res.render("index", { item: recipesList, pageId: "home", pageName: "Home" })
})

server.get("/about", function(req, res) {
    return res.render("about", { pageId: "about", pageName: "Sobre" })
})

server.get("/recipes", function(req, res) {
    return res.render("recipes", { item: recipesList, pageId: "recipes", pageName: "Receitas" })
})


nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})