// ---------------------------------------------------------------------------------------
//SELECTION 
console.log(document.getElementById("h1"));  

console.log(document.querySelector("h1"));
console.log(document.querySelector(".h1"));
console.log(document.querySelector("#h1"));

//evth up takes first element

console.log(document.querySelectorAll("h1"));

//-----------
//not important
console.log(document.getElementsByClassName("h1"));
console.log(document.getElementsByTagName("h1"));
//-----------


let bharosa = document.querySelector("p")
console.log(bharosa);
console.log(document.querySelector("p"));




// ---------------------------------------------------------------------------------------

// MODIFICATION
console.log(bharosa.innerHTML);
// bharosa.innerHTML = "<b>meri shyama ju</b>" // very risky

// bharosa.innerText = "<b>meri shyama ju</b>"
bharosa.textContent = "<b>meri shyama ju</b>"