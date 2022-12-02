const orangeThemeButton = document.querySelector(".orange_theme");
const blueThemeButton = document.querySelector(".blue_theme");
const ruButton = document.querySelector(".ru_button");
const engButton = document.querySelector(".en_button");
const formDiv = document.getElementById("form_div");

// Themes toggling buttons
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

engButton.addEventListener("click", function() {
    document.getElementById("page_title").innerHTML = "Form page";
    document.getElementById("form_header").innerHTML = "Create an account";
    document.getElementById("acc_question").innerHTML = "Already have an account?";
    document.getElementById("email").innerHTML = "Email";
    document.getElementById("first_name").innerHTML = "First name";
    document.getElementById("last_name").innerHTML = "Last name";
    document.getElementById("password").innerHTML = "Password";
    document.getElementById("month").innerHTML = "Month";
    document.getElementById("day").innerHTML = "Day";
    document.getElementById("year").innerHTML = "Year";
    document.querySelector(".birth_p").innerHTML = "Date of birth";
    document.getElementById("agreement").innerHTML = "By Create account, I agree that I have read and accepted the ";
    document.getElementById("and_word").innerHTML = " and ";
    document.getElementById("submit").value = "Create account";
    document.getElementById("russian_lang").innerHTML = "RUS";
    document.getElementById("eng_button").innerHTML = "ENG";
    
    // Translating anchors
    let formAnchors = formDiv.getElementsByTagName("a");
    formAnchors[0].innerHTML = "Sign in";
    formAnchors[1].innerHTML = "Terms of Use";
    formAnchors[2].innerHTML = "Privacy Policy";
    
})
// Translating back
