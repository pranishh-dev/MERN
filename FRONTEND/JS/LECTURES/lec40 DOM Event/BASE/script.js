let body = document.querySelector("body")


//ADD EVENT LISTENER
let btn1 = document.querySelector("#btn1")
// btn.addEventListener("click",function (){
//     console.log("PriyaLal");
// })

// btn.addEventListener("click", () => console.log("Pyariju ko meri sudh kaun karawe"))

btn1.addEventListener("click", () => {
    console.log("Pyariju ko meri sudh kaun karawe")
})

// ?("event - click , dblclick, mouse up mouse down side over", "callback func")
let btn2 = document.querySelector("#btn2")
let naamJap = () => {
    console.log("Radhavallabh sri harivansh");
}
btn2.addEventListener("dblclick", naamJap)


//reveal h1 after a click
let btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", () => {
    let h1 = document.createElement("h1")
    h1.innerText = "Naam jap gara bhai sri radhavallabh sri harivansh"
    body.append(h1)
})

//reveal h2 after a click but no repition
let btn4 = document.querySelector("#btn4")
let gift = document.querySelector("#gift")
btn4.addEventListener('click', () => {
    // gift.classList.add("visible")
    // gift.classList.remove("hidden")
    gift.classList.toggle("hidden")

})



//--------------------------------------------------
let clickThis = document.querySelector("#clickThis")
// clickThis.addEventListener("dblclick",(event)=>{
//     console.log(event);
//     console.log(event.type);

//     console.log(event.target); //jis element par click kya
//     console.log(event.currentTarget); //jis element par event listener laga huwa he
// })


clickThis.addEventListener("dblclick",(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.key);

    console.log(e.clientX);
    console.log(e.clientY);
})


//REMOVE EVENTLISTENER
let btn5 = document.querySelector("#btn5")
function fn() {
    console.log("RADHA naam sudharasam rasayitumm jiwastu me bimhala");
}
btn1.addEventListener("click",fn)
btn1.removeEventListener("click",fn)
 //both the event and fn must be same, callback fn must point to same fn by reference


 //third paramter aside eventType and callback fn
 //options
let btn6 = document.querySelector("#btn6")
btn6.addEventListener("click",fn , {once:true})
