const changeThemeBtn = document.querySelector(".navbar__nav-item--theme")
const bodyDocument = document.getElementsByTagName("BODY")[0]

function storageTheme(id, value) {
    localStorage.setItem(id, JSON.stringify(value))
}

function loadTheme() {
    const defaultTheme = JSON.parse(localStorage.getItem("theme"))
    if (defaultTheme == null || defaultTheme == "light" || defaultTheme == "") {
        bodyDocument.classList.remove("dark-mode")
    } else {
        bodyDocument.classList.add("dark-mode")
    }
}

function changeTheme() {
    const currentTheme = bodyDocument.getAttribute("class")
    if (currentTheme == null || currentTheme == "light" || currentTheme == "") {
        bodyDocument.classList.add("dark-mode")
        storageTheme("theme", "dark")
    } else {
        bodyDocument.classList.remove("dark-mode")
        storageTheme("theme", "light")
    }
}

changeThemeBtn.addEventListener("click", changeTheme)

loadTheme()