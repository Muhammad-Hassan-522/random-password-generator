const passBox = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_-+={[}]|\:;<,>.?/"

const allCharacters = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    // password += upperCase[Math.floor(Math.random() * upperCase.length)];
    // password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    // password += numbers[Math.floor(Math.random() * numbers.length)];
    // password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passBox.value = password;
}

function copyPassword() {
    // Get the input element by its ID
    passBox.select();
    // Execute the copy command
    document.execCommand("copy");
    // Deselect the text
    inputElement.setSelectionRange(0, 0);
}