function searchPizza() {
    return new Promise((resolve, reject) => {
        console.log("searching for Pizza");
        setTimeout((price) => {
            console.log("Pizza Found");
            price = 500
            resolve(price)
        }, 2000);
    });

}
function addToCart(price) {
    return new Promise((resolve, reject) => {
        console.log("Adding in Cart....");
        setTimeout(() => {
            console.log("Added to Cart.");
            resolve(price)
        }, 2000);
    });
}

function payment(amt) {
    return new Promise((resolve, reject) => {
        console.log(`Payment on Process, Amount: ${amt}`);
        setTimeout(() => {
            let isSucessful = false
            if (isSucessful) {
                console.log(`Payment Succcesful, Paid: ${amt}`);
                console.log("pizza bas aaraha he bhai");
            } else {
                reject("Pizza nahi arra ha he bhai")
            }
        }, 5000);
    });

}

let res = searchPizza()

res.then((price) => addToCart(price))
    .then(price => payment(price))
    .then(() => console.log("Bas aaraha he"))
    .catch((err) => console.log(err))