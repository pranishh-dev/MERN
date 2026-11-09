let body = document.querySelector("body")

let colorStrRandom = "0123456789abcdef"



setInterval(() => {
    let color = ""
    for (let i = 1; i <= 6; i++) {
        let random = Math.floor(Math.random() * colorStrRandom.length)
        color = color + colorStrRandom[random]
    }
    body.style.backgroundColor = `#${color}`
}, 50);
