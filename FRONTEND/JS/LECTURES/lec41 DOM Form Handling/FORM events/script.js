const form = document.querySelector("#form")
const btn = document.querySelector("#btn")

// btn.addEventListener("click",(e)=>{
//     e.preventDefault()
// })
// Result: The form doesn't submit through that button click.

form.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log("LaadliLaal");

    {
        const name = document.querySelector("#name").value
        const email = document.querySelector("#email").value
        const address = document.querySelector("#address").value
        const age = document.querySelector("#age").value

        const details = { name, email, address, age } //object short hand
        // The property name comes from the variable name, and its value comes from that variable.
        // equivalent to 
        // const details = {
        //     name: name,
        //     email:email,
        //     address:address,
        //     age:age 
        // }
        console.log(details);

        
        // name.addEventListener("click",(e)=>{
        //     console.log(name);
        // }) name now cant be used for events

    }
    {
        const name = document.querySelector("#name")
        const email = document.querySelector("#email")
        const address = document.querySelector("#address")
        const age = document.querySelector("#age")
        console.log({name:name.value,email:email.value,address:address.value,age:age.value}); //used as event can be used on name var now unlike name.value directly in upper block

        name.addEventListener("click",(e))
    }

})

