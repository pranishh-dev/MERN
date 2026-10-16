let username = document.querySelector("#name")
let email = document.querySelector("#email")
let address = document.querySelector("#address")

username.addEventListener("change",()=>{
    console.log("change");
})

email.addEventListener("focus",()=>{
    console.log("focus");
})

address.addEventListener("blur",()=>{
    console.log("blur"); //unfocus
})

//----------------------------------------------------------------
//password hint
let password = document.querySelector("#password")
let passHint = document.querySelector("#password-hint")
password.addEventListener("focus",()=>{
    passHint.classList.remove("hidden")
})
password.addEventListener("blur",()=>{
    passHint.classList.add("hidden")
})

// less suitable:(clicklabel)
// First click → Shows the hint.
// Second click → Hides the hint.
// Third click → Shows it again.
// password.addEventListener("click",()=>{
//     passHint.classList.toggle("hidden")
// })