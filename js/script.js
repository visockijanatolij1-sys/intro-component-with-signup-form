const form = document.querySelector(".form-hero");

const firstNameInput = document.querySelector(".input-name");
const lastNameInput = document.querySelector(".input-last_name");
const emailInput = document.querySelector(".input-email");
const passwordInput = document.querySelector(".input-password");

const firstNameError = firstNameInput.nextElementSibling;
const lastNameError = lastNameInput.nextElementSibling;
const emailError = emailInput.nextElementSibling;
const passwordError = passwordInput.nextElementSibling;

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, errorElement){
    input.classList.add("error");
    errorElement.classList.add("show");
}

function hideError(input, errorElement){
    input.classList.remove("error");
    errorElement.classList.remove("show");
}

form.addEventListener("submit", function (event){
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (firstName === ""){
        showError(firstNameInput, firstNameError);
    } else {
        hideError(firstNameInput, firstNameError);
    }

    if (lastName === ""){
        showError(lastNameInput, lastNameError);
    } else {
        hideError(lastNameInput, lastNameError);
    }

    if (!isValidEmail(email)){
        showError(emailInput, emailError);
    } else {
        hideError(emailInput, emailError);
    }

    if (password === ""){
        showError(passwordInput, passwordError);
    } else {
        hideError(passwordInput, passwordError);
    }
 

})