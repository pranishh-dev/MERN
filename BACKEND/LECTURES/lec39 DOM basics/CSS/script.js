let link = document.querySelector("a")
link.setAttribute("href", "https://wikipedia.org")
link.setAttribute("target", "_blank")

let p = document.querySelector("p")
let style = document.querySelector("#style")

console.log(p.getAttribute("style"));
let res = p.getAttribute("style")
console.log(res)

p.removeAttribute("style")


//-----------------------------------

let btn = document.querySelector("button")
btn.textContent = "click me bro "

console.log(btn.getAttribute("type"));

// btn.setAttribute("disabled","")
btn.disabled = true

console.log(btn.disabled);

//-----------------------------------

// class list
let pTest1 = document.querySelector("#test-p1")
let pTest2 = document.querySelector("#test-p2")
let pTest3 = document.querySelector("#test-p3")

pTest1.classList.add("random")
pTest2.classList.add("random")
pTest3.classList.add("random")

pTest2.classList.remove("main-heading")

//toggle : if on turn it off and vice versa
pTest3.classList.toggle("random")
// pTest3.classList.toggle("main-heading")

//contains: true or false if class exists on that element or not
console.log(pTest3.classList.contains("main-heading"));


//-------------------------------------------------------------------
let pTest4 = document.querySelector("#test-p4")
pTest4.style.backgroundColor = "red"  /// style = {background-color:red} //camel ->kebab
pTest4.dataset.helloDosto = "white" //data-hello-dosto = white
//  btn.dataset.discount = "20%";

console.log(pTest4.dataset.helloDosto); 
