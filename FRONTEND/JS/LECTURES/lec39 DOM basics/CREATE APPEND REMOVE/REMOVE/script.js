let body = document.querySelector("body")
let cards = document.querySelector("#cards")
let h2 = document.querySelector("h2")

body.removeChild(cards) //perfom on parent
h2.remove() //remove directly

//---------------------------------------------
let headings = document.querySelector(".headings")
let h = document.querySelector("h2")
console.log(h);
h.remove()


//------------------
// cloning
let clone1 = headings.cloneNode()
console.log(clone1);

let clone2 = headings.cloneNode(true) // subtree = clone true deeply clone all child -default false
console.log(clone2);

console.log(clone1 == clone2);
console.log(clone1 == headings);
console.log(clone2 == headings);
// cloneNode(true) copies the DOM subtree, but it doesn't connect the clone to the original or automatically insert it into the document.


// /-----------------
// insertion
console.log(headings.children); //return html collection not arrays


let aNode = document.querySelector("h1")
let nth = headings.children
headings.insertBefore(aNode, nth[1]) //insert aNode(always a node ) before nth[1]