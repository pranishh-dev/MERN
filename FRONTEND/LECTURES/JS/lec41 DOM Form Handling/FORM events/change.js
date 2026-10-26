let naam = document.querySelector("#name")

naam.addEventListener("input", () => {
    console.log(naam.value);
})

naam.addEventListener("change", () => {
    console.log("dada");
})//logs after the focus is changed

//---------------------------------------------------------

// change and input behaves same on checkbox radio select-dropdown

//---------------------------------------------------------

// change event on checkbox
let checkbox = document.querySelectorAll('.checkboxDiv>input')
checkbox.forEach((opt) => {
    opt.addEventListener("change", () => {
        console.log(opt.checked);
    })
    /*
    opt.addEventListener("input", () => {
        console.log(opt.checked);
    })
        */
})



//---------------------------------------------------------

// change event on radio
let genders = document.querySelectorAll(".radioDiv>input")
genders.forEach((gender) => {
    gender.addEventListener("change", () => {
        console.log(gender.value);
    })
})

//---------------------------------------------------------

// change event on radio
let countries = document.querySelector("#country")


countries.addEventListener("change", () => {
    console.log(country.value);
})


