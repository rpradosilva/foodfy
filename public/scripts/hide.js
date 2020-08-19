const contents = document.querySelectorAll(".recipe__section")

for (let content of contents) {
    const hideButton = content.querySelector(".recipe__section--button")
    const hideContent = content.querySelector(".recipe__section--text")

    hideButton.addEventListener("click", () => {
        if (hideButton.textContent == "Mostrar") {
            hideButton.textContent = "Esconder"
        } else {
            hideButton.textContent = "Mostrar"
        }
        hideContent.classList.toggle("recipe__section--hide")
    })
}