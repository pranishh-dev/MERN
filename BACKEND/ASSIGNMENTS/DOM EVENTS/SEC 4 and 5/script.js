let body = document.querySelector("body")

let parentDiv1 = document.querySelector("#parent1")
let btn1 = document.querySelector("#btn1")

// Demonstrate Event Bubbling
parentDiv1.addEventListener("click",(e)=>{
    console.log("Parent Clicked");
})
btn1.addEventListener("click",(e)=>{
    console.log("Button Clicked");
})

// ----------------------------------------------------------------------------
let parentDiv2 = document.querySelector("#parent2")
let btn2 = document.querySelector("#btn2")

// Demonstrate Event Capturing
parentDiv2.addEventListener("click",(e)=>{
    console.log("Parent Clicked");
},
{capture:true})
btn2.addEventListener("click",(e)=>{
    console.log("Button Clicked");
},{capture:true})

//---------------------------------------------------------------------------------

// Handle Multiple Buttons Using Event Delegation
let buttons = document.querySelector("#btns")
buttons.addEventListener("click",(e)=>{
    console.log(e.target.textContent, "is clicked.")
})


//---------------------------------------------------------------------------------
// Handle a Dynamic List Using Event Delegation
let skills = ["HTML","CSS" , "JS"]
let skillsList = document.createElement("ul")
skillsList.setAttribute("id","skills")
skills.forEach((skill)=>{
    let li = document.createElement("li")
    li.textContent = skill
    skillsList.append(li)
})
body.append(skillsList)

skillsList.addEventListener("click",(e)=>{
    console.log("You clicked:" , e.target.textContent);
})