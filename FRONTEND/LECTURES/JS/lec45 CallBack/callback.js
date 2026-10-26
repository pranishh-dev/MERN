function searchPizza(cb1) {
    console.log("searching for Pizza");
    setTimeout((price) => {
        console.log("Pizza Found");
        price = 500
        cb1(price)
    }, 2000);
}
function payment(amt, fn) {
    console.log(`Payment on Process, Amount: ${amt}`);
    setTimeout(() => {
        console.log(`Payment Succcesful, Paid: ${amt}`);
        fn()
    }, 5000);
}
function addToCart(fn) {
    console.log("Adding in Cart....");
    setTimeout(() => {
        console.log("Added to Cart.");
        fn()
    }, 2000);
}

//callback hell
searchPizza(function (price) {
    addToCart(function () {
        payment(price, function () {
            console.log("pizza bas aa raha he");
        })
    })
})