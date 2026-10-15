let body = document.querySelector("body")
let textareaDiv = document.querySelector(".textarea")
let bio = document.querySelector("textarea")
// let p = document.createElement("p")
// textareaDiv.append(p)

let p = document.querySelector("p")
let limit = 10
bio.maxLength = limit
p.textContent = `${limit} characters remaining`
bio.addEventListener("input", () => {
    let curentCharVal = limit - bio.value.length
    p.textContent = `${curentCharVal} characters remaining`
    if (curentCharVal <= 0) {
        p.textContent = "Max characters Reached!!"
        p.classList.add("alertRed")
    }
    else {
        p.classList.remove("alertRed")
    }
    console.log(curentCharVal);
})
