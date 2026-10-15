let body = document.querySelector("body")

//-----------------------------------------------------------------------

//7. Remove an Event Listener
//8. Run an Event Only Once
let btn = document.createElement("button")

btn.setAttribute("id", "btn")
btn.textContent = "Click Me"
body.append(btn)
function fn(){
    console.log("run once");
}

btn.addEventListener("click", fn ,{once:true})

// btn.removeEventListener("click",fn)

//-----------------------------------------------------------------------
let parent = document.querySelector(".parent")
let testBtn = document.querySelector(".test-btn")

parent.addEventListener("click",()=>{
    console.log("Parent Clicked");
})
testBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("Button Clicked");
})