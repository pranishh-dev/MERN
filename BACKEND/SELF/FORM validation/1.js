let form = document.querySelector("form")
let username = document.querySelector("#name")
let password = document.querySelector("#password")
let email = document.querySelector("#email")
let address = document.querySelector("#address")
let errorMsg = document.createElement("span")
errorMsg.innerHTML = `<span id="error-msg" class=" alertRed"></span>`


function showError(result, param) {
    errorMsg.textContent = (result === true) ? "" : result;
    if (result !== true) param.parentElement.append(errorMsg); 

}
function isValid(param) {
    if (param === username) {
        if (param.value.trim().length == 0) {
            return "Please enter your name"
        }
        if (param.value.trim().length < 3) {
            return "Name should be at least of 3 letters"
        }
        return true;
    }
    if (param === email) {
        if (param.value.trim().length === 0) {
            return "Please enter your email"
        }
        else if (param.value.length <= 3
            || !param.value.includes("@")
            || !param.value.includes(".")) {
            return "Enter a valid email";
        }
        return true
    }

}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValidUsername = isValid(username);
    let isValidEmail = isValid(email);
    (isValidUsername === true) ?
        console.log("Valid Username") :
        console.log("Invalid Username");;
    (isValidEmail === true) ?
        console.log("Valid Email") :
        console.log("Invalid Email");;

    showError(isValidUsername, username)
    showError(isValidEmail, email);

    (isValidUsername === true && isValidEmail === true) ?
        console.log("The form is valid and ready to be sumbitted") :
        console.log("The form is invalid and is not ready to be sumbitted");
})

