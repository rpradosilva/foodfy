const cards = document.querySelectorAll(".recipe__card")
const closeModal = document.querySelector(".modal-close")
const modalOverlay = document.querySelector(".modal-overlay")
const imageModal = document.querySelector(".modal__image")
const titleModal = document.querySelector(".modal__title")
const descModal = document.querySelector(".modal__desc")

for (let card of cards) {
    const cardImage = card.querySelector(".recipe__image img")
    const cardTitle = card.querySelector(".recipe__title")
    const cardDesc = card.querySelector(".recipe__desc")

    card.addEventListener("click", () => {
        modalOverlay.classList.add("modal-overlay__active")
        imageModal.src = cardImage.getAttribute("src")
        titleModal.textContent = cardTitle.textContent
        descModal.textContent = cardDesc.textContent
    })
}

closeModal.addEventListener("click", () => {
    modalOverlay.classList.remove("modal-overlay__active")
})