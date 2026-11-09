let form = document.querySelector("form")
let username = document.querySelector("#name")
let password = document.querySelector("#password")
let email = document.querySelector("#email")
let address = document.querySelector("#address")
let errorMsg = document.createElement("span")
let passInServer = "meroprandhan"
let isSuccessH = document.querySelector("h2")
errorMsg.innerHTML = `<span id="error-msg" class=" alertRed"></span>`


function showError(result, param) {
    let error = param.parentElement.querySelector("#error-msg");

    if (result !== true) {
        if (!error) {
            error = document.createElement("span");
            error.id = "error-msg";
            error.classList.add("alertRed");
            param.parentElement.append(error);
        }
        error.textContent = result;
    } else {
        error?.remove();
    }

}
function isValid(param) {
    if (param.value.trim().length === 0) {
        return `Please enter your ${param.id}`
    }
    else {
        if (param === username) {
            if (param.value.trim().length < 3) {
                return "Name should be at least of 3 letters"
            }
            return true;
        }
        if (param === email) {
            if (param.value.length <= 3
                || !param.value.includes("@")
                || !param.value.includes(".")) {
                return "Enter a valid email";
            }
            return true
        }
        if (param === password) {
            if (password.value.length <=8 ) {
                return "Create valid password"
            }
            else { return true }
        }
    }
}




form.addEventListener("submit", (e) => {
    console.log(password);

    let isValidUsername = isValid(username);
    let isValidEmail = isValid(email);
    let isValidPass = isValid(password);

    (isValidUsername === true) ?
        console.log("Valid Username") :
        console.log("Invalid Username");;
    (isValidEmail === true) ?
        console.log("Valid Email") :
        console.log("Invalid Email");
    (isValidPass === true) ?
        console.log("Valid Password") :
        console.log("Invalid Password");

    showError(isValidUsername, username)
    showError(isValidEmail, email);
    showError(isValidPass, password);
    isSuccessH.classList.remove("hidden") ;

    (isValidUsername === true
        && isValidEmail === true
        && isValidPass === true) ?
        isSuccessH.textContent="Account created successfully":
        isSuccessH.textContent="Account cant be created";
        e.preventDefault();

})

