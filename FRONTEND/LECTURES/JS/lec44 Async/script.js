
let count = 0;
let id = setInterval(() => {
    count++
    console.log("HI");
    if (count >= 5) {
        clearInterval(id)
    }
}, 500);

