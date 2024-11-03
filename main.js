const passwordBox = document.getElementById("password");
const btnEl = document.getElementById("passwordBtn");
const length = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*(){}<>_-";

let Allchars = upperCase + lowerCase + number + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while (length > password.length) {
        password += Allchars[Math.floor(Math.random() * symbols.length)];
    }

    passwordBox.value = password;
}

btnEl.addEventListener("click", createPassword);