const orangeThemeButton = document.querySelector(".orange_theme");
const blueThemeButton = document.querySelector(".blue_theme");
const ruButton = document.querySelector(".ru_button");
const formDiv = document.getElementById("form_div");

// Translation toggling buttons
orangeThemeButton.addEventListener("click", function() {
    document.documentElement.style.setProperty('--form-anchor-color', '#FF9C00');
})

blueThemeButton.addEventListener("click", function() {
    document.documentElement.style.setProperty('--form-anchor-color', '#0075ff');
})

// Translation itself
ruButton.addEventListener("click", function(){
    document.getElementById("page_title").innerHTML = "Регистрация";
    document.getElementById("form_header").innerHTML = "Регистрация";
    document.getElementById("acc_question").innerHTML = "Уже зарегистрированы?";
    document.getElementById("email").innerHTML = "Почта";
    document.getElementById("first_name").innerHTML = "Имя";
    document.getElementById("last_name").innerHTML = "Фамилия";
    document.getElementById("password").innerHTML = "Пароль";
    document.getElementById("month").innerHTML = "Месяц";
    document.getElementById("day").innerHTML = "День";
    document.getElementById("year").innerHTML = "Год";
    document.querySelector(".birth_p").innerHTML = "Дата рождения";
    document.getElementById("agreement").innerHTML = "Нажимая кнопку Зарегистрироваться, Я соглашаюсь с ";
    document.getElementById("and_word").innerHTML = " и ";
    document.getElementById("submit").value = "Создать аккаунт";
    document.getElementById("russian_lang").innerHTML = "РУС";
    document.getElementById("eng_button").innerHTML = "АНГ";


    // Translating anchors
    let formAnchors = formDiv.getElementsByTagName("a");
    formAnchors[0].innerHTML = "Войти";
    formAnchors[1].innerHTML = "Пользовательскими условиями";
    formAnchors[2].innerHTML = "Политикой Конфиденциальности";

})
