const express = require("express")
const routes = express.Router()
const recipesList = require("./database")

routes.get("/", function(req, res) {
    return res.render("index", {
        items: recipesList,
        pageId: "home"
    })
})

routes.get("/about", function(req, res) {
    return res.render("about", {
        pageId: "about"
    })
})

routes.get("/recipes", function(req, res) {
    return res.render("recipes", {
        items: recipesList,
        pageId: "recipes"
    })
})
routes.get("/recipes/:index", function(req, res) {
    const recipeIndex = req.params.index
    return res.render("recipe", {
        item: recipesList[recipeIndex],
        ingredients: recipesList[recipeIndex].ingredients,
        preparations: recipesList[recipeIndex].preparation
    })
})

module.exports = routes