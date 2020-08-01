const navToggleButton = document.querySelector(".nav-toggle__item")
const navToggleIcon = document.querySelector(".nav-toggle__link i")
const navbar = document.querySelector(".nav__group")

navToggleButton.addEventListener("click", () => {
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "flex"
        navToggleIcon.className = "fas fa-angle-up"
    } else {
        navbar.style.display = ""
        navToggleIcon.className = "fas fa-angle-down"
    }
})