const navToggleButton = document.querySelector(".navbar__nav-item--mobile")
const navToggleIcon = document.querySelector(".navbar__nav-link--mobile i")
const navbar = document.querySelector(".navbar__nav-list")

navToggleButton.addEventListener("click", () => {
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "flex"
        navToggleIcon.className = "fas fa-angle-up"
    } else {
        navbar.style.display = ""
        navToggleIcon.className = "fas fa-angle-down"
    }
})