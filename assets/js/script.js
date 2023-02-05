function toggleTheme() {
    const container = document.querySelector(".dark-gradient")
    const text = document.querySelector(".dark-text")
    const button = document.querySelector(".dark-button")
    const buttonContent = document.querySelector(".button")

    if (container.classList.contains("dark-gradient")) {
        container.classList.toggle("light-gradient")
    }
    if (text.classList.contains("dark-text")) {
        text.classList.toggle("light-text")
    }
    if (button.classList.contains("dark-button")) {
        button.classList.toggle("light-button")
    }

    if (button.classList.contains("light-button")) {
    buttonContent.innerHTML = "Dark Theme"
    } else {
        buttonContent.innerHTML = "Light Theme"
    }   
}