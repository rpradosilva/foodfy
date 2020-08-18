const express = require("express")
const server = express()
const port = 5000
const nunjucks = require("nunjucks")


server.set("view engine", "njk")

server.use(express.static("public"))

server.listen(port, function() {
    console.log(`Server is running in: http://localhost:${port}`)
})


server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/about", function(req, res) {
    return res.render("about")
})

server.get("/recipes", function(req, res) {
    return res.render("recipes")
})


nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})