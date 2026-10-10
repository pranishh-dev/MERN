
let city = "Delhi"

function printCity(){
    console.log(city);
}

function random(fn){
    let city = "Varanasi"
    fn()
}

random(printCity)
