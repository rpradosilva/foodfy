const contents = document.querySelectorAll(".content__section")

for (let content of contents) {
    const hideButton = content.querySelector(".content__section-button")
    const hideContent = content.querySelector(".content__section-text")

    hideButton.addEventListener("click", () => {
        if (hideButton.textContent == "Mostrar") {
            hideButton.textContent = "Esconder"
        } else {
            hideButton.textContent = "Mostrar"
        }
        hideContent.classList.toggle("content__section--hide")
    })
}