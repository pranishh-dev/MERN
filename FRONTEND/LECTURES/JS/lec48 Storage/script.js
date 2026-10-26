localStorage.setItem("num1", "1") //key-value (in string) --if passed other automatically changed into string
localStorage.setItem("num2", "1")
localStorage.setItem("num3", "1")
localStorage.setItem("num4", "1")
localStorage.setItem("num5", "1")

let num1Val = localStorage.getItem("num1")
console.log(num1Val);

let index3Val = localStorage.key("3")
console.log(index3Val); //cant guarentee order so gives random value at some case

localStorage.removeItem("num4")

document.querySelector("#clear-local-storage").addEventListener("click", () => {
    localStorage.clear()
})



//session storage
document.querySelector("#add-session-item").addEventListener("click",()=>{
    sessionStorage.setItem("session","item")
})
