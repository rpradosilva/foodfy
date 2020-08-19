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
    return res.render("index", {
        items: recipesList,
        pageId: "home",
        pageName: "Home"
    })
})

server.get("/about", function(req, res) {
    return res.render("about", {
        pageId: "about",
        pageName: "Sobre"
    })
})

server.get("/recipes", function(req, res) {
    return res.render("recipes", {
        items: recipesList,
        pageId: "recipes",
        pageName: "Receitas"
    })
})
server.get("/recipes/:index", function(req, res) {
    const recipeIndex = req.params.index
    return res.render("recipe", {
        item: recipesList[recipeIndex],
        ingredients: recipesList[recipeIndex].ingredients,
        preparations: recipesList[recipeIndex].preparation
    })
})

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})