let div =document.createElement("div")
console.log(div);

let p = document.createElement("p")
p.innerText = "MERE PRANNATH SRI SHYAMA"

let body = document.querySelector("body")
body.appendChild(div) //old and can take single input only and no text only

div.append(p) //modern and can take multiple nodes at once and can acpt text
div.append(p,"priyalal ","sri hit harivanshhhhhhh")

div.append("radhavallabh sri hit harivansh") //at last
div.prepend("jai jai shyama jai jai shyam jai jai sri vrindavan dhaammmm") // at front