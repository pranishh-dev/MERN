let body = document.querySelector("body")

//-----------------------------------------------------------------------
// 1. Handle a Button Click
// 2. Change Text on Click
// 4. Display the Clicked Element
// 5. Display Mouse Coordinate

let btn = document.createElement("button")
btn.setAttribute("id", "btn")
btn.textContent = "Click Me"
body.append(btn)

btn.addEventListener("click", (e) => {
    console.log("Button Clicked!");
    btn.textContent = "Thanks for Visiting"
    
    console.log(e.target);
    console.log(e.clientX,e.clientY);

})

//-----------------------------------------------------------------------
// 3. Handle a Mouseover Event
let heading = document.createElement("h1")
heading.textContent = "JS"
body.append(heading)

heading.addEventListener("mouseover", () => {
    heading.textContent = "Mouse is over the heading!"
})


//-----------------------------------------------------------------------
