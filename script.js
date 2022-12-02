const orangeThemeButton = document.querySelector(".orange_theme");
const blueThemeButton = document.querySelector(".blue_theme");
const ruButton = document.querySelector(".ru_button");
const engButton = document.querySelector(".en_button");
const formDiv = document.getElementById("form_div");

// Themes toggling buttons
let isBlueTheme = 1;
orangeThemeButton.addEventListener("click", function() {
    if (isBlueTheme) {
        isBlueTheme = 0;
        document.documentElement.style.setProperty('--form-anchor-color', '#FF9C00');
        orangeThemeButton.classList.toggle("grey_color");
        blueThemeButton.classList.toggle("grey_color");
    }
})

blueThemeButton.addEventListener("click", function() {
    if (isBlueTheme == 0) {
        isBlueTheme = 1;
        document.documentElement.style.setProperty('--form-anchor-color', '#0075ff');
        orangeThemeButton.classList.toggle("grey_color");
        blueThemeButton.classList.toggle("grey_color");
    }
})

// Translation with ternary function
let isRus = 0;
function ternTranslation (lang_flag) {
    document.getElementById("page_title").innerHTML = lang_flag ? "Регистрация" : "Form page";
    document.getElementById("form_header").innerHTML = lang_flag ? "Регистрация" : "Create an account";
    document.getElementById("acc_question").innerHTML = lang_flag ? "Уже зарегистрированы?" : "Already have an account? ";
    document.getElementById("email").innerHTML = lang_flag ? "Почта" : "Email";
    document.getElementById("first_name").innerHTML = lang_flag ? "Имя" : "First name";
    document.getElementById("last_name").innerHTML = lang_flag ? "Фамилия" : "Last name";
    document.getElementById("password").innerHTML = lang_flag ? "Пароль" : "Password";
    document.getElementById("month").innerHTML = lang_flag ? "Месяц" : "Month";
    document.getElementById("day").innerHTML = lang_flag ? "День" : "Day";
    document.getElementById("year").innerHTML = lang_flag ? "Год" : "Year";
    document.querySelector(".birth_p").innerHTML = lang_flag ? "Дата рождения" : "Date of birth";
    document.getElementById("agreement").innerHTML = lang_flag ? "Нажимая кнопку Создать аккаунт, Я соглашаюсь с " : "By Create account, I agree that I have read and accepted the ";
    document.getElementById("and_word").innerHTML = lang_flag ? " и " : " and ";
    document.getElementById("submit").value = lang_flag ? "Создать аккаунт" : "Create account";
    document.getElementById("russian_lang").innerHTML = lang_flag ? "РУС" : "RUS";
    document.getElementById("eng_button").innerHTML = lang_flag ? "АНГ" : "ENG";
    
    // Translating anchors
    let formAnchors = formDiv.getElementsByTagName("a");
    formAnchors[0].innerHTML = lang_flag ? "Войти" : "Sign in";
    formAnchors[1].innerHTML = lang_flag ? "Пользовательскими условиями" : "Terms of Use";
    formAnchors[2].innerHTML = lang_flag ? "Политикой Конфиденциальности" : "Privacy Policy";
}

ternTranslation(isRus);
// Translation toggling 
ruButton.addEventListener("click", function(){
    // Excluding unnecessary localization 
    if (isRus == 0) {
        isRus = 1;
        ternTranslation(isRus);
        engButton.classList.toggle("grey_color");
        ruButton.classList.toggle("grey_color");
    }
})

engButton.addEventListener("click", function() {
    // Excluding unnecessary localization 
    if (isRus == 1) {
        isRus = 0;
        ternTranslation(isRus);
        engButton.classList.toggle("grey_color");
        ruButton.classList.toggle("grey_color");
    } 
})
