const orangeThemeButton = document.querySelector(".orange_theme");
const blueThemeButton = document.querySelector(".blue_theme");

orangeThemeButton.addEventListener("click", function() {
    document.documentElement.style.setProperty('--form-anchor-color', '#FF9C00');
})
blueThemeButton.addEventListener("click", function() {
    document.documentElement.style.setProperty('--form-anchor-color', '#0075ff');
})