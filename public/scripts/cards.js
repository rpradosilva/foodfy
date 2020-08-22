const cards = document.querySelectorAll(".card")

for (let card = 0; card < cards.length; card++) {
    cards[card].addEventListener("click", () => {
        window.location.href = `/recipes/${card}`
    })
}