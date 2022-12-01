const orangeThemeButton = document.querySelector(".orange_theme");
const blueThemeButton = document.querySelector(".blue_theme");

orangeThemeButton.addEventListener("click", function() {
    document.body.classList.add("orange_theme");
})
blueThemeButton.addEventListener("click", function() {
    document.body.classList.remove("orange_theme");
})