let outer = document.querySelector("#outer")
let inner = document.querySelector("#inner")
let btn = document.querySelector("#btn")


outer.addEventListener("click", (e) => {
    console.log("outer");
},
    { capture: true })

inner.addEventListener("click", (e) => {
    console.log("inner");
})
btn.addEventListener("click", (e) => {
    console.log("btn");
    e.stopPropagation() //stop event bubbling(propagation)
})

//bubbling isnt ideal and standard