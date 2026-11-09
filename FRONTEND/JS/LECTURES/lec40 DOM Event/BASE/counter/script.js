let counter = 0;
let btn = document.querySelector("#btn")
function count() {
    counter++;
    console.log(counter);

    if (counter >= 3) {
        btn.removeEventListener("click", count)
    }
}
btn.addEventListener("click", count)
