
let body = document.querySelector("body")
let btn = document.querySelector(".btn")

/*
3. Select Multiple Elements Using querySelectorAll()
*/
let lists = document.querySelectorAll("ul>li")

/*
5. Add HTML Using innerHTML
*/
let pp = document.querySelector(".pp")
pp.innerHTML = "<p>MERI SRIJI</p>"

/*
4. Change Content Using textContent
6. Change an Attribute Using setAttribute()
7. Add and Remove Classes Using classList
*/

let p = document.querySelector("#msg")
p.textContent = "Welcome to my website!"

p.setAttribute("style", `color:red`)
p.removeAttribute("class")

p.classList.add("random")
p.classList.remove("random")

/*
9. Read Data Using dataset
10. Create an Element Using createElement()
*/

// btn.dataset.category = "button";
// console.log(btn.dataset.category);

let pData = document.createElement("p")
pData.innerHTML = btn.dataset.category
body.append(pData)

/*
11. Add an Element Using appendChild()
12. Add Elements Using append() and prepend()
13. Insert an Element Using insertBefore()
*/

body.appendChild(pData)
body.append(pData)
body.prepend(pData)

let list = document.querySelector("ul")
let li = document.querySelector("ul>li")

// Remove an Element
console.log(li);
list.removeChild(li)
// li.remove()

// Insert an Element Using insertBefore()
let listElement = list.children;
let li2 = document.createElement("li")
li2.textContent = "React"
list.insertBefore(li2, listElement[1])

//------------------------------------------------------------

// Clone an Element Using cloneNode
let clonebtn = btn.cloneNode(true)
body.append(clonebtn)
