// 15. Calculate the Total Cart Price
{
    const products = [500, 1200, 300]
    let cartTotal = products.reduce((acc, value) => {
        acc += value;
        return acc
    }, 0)
    console.log(cartTotal);
}

// 16. Count Total Products
{
    const products = ["Laptop", "Mouse", "Keyboard"]
    let count = products.reduce((acc, value) => {
        // acc+=1
        return acc + 1;
    }, 0)
    console.log(count);
}


// 17. Calculate the Total Quantity
{
    const cartProducts = [
        { name: "Laptop", quantity: 1 },
        { name: "Mouse", quantity: 2 }
    ]
    let quantity = cartProducts.reduce((acc, value) => {
        return acc + value.quantity
        // 1 + 2
    }, 0)
    console.log(quantity);
}

// 18. Calculate Total Order Amount
{
    const order = [
        { amount: 500 },
        { amount: 1000 },
        { amount: 750 }
    ]

    const totalPrice = order.reduce((acc, value) => {
        return acc + value.amount
    }, 0)
    console.log(totalPrice);

}
// 19. Create a Comma-Separated String
{
    const lang = ["HTML", "CSS", "JavaScript"]
    let langStr = lang.reduce((acc, value) => {
        if (acc) {
            return acc + ", " + value;
        }
        else {
            return value
        }

    }, "")
    console.log(langStr);
}

// 20. Calculate Final Cart Total
{
    const cart = [
        { name: "Mouse", price: 500, quantity: 2 },
        { name: "Keyboard", price: 1000, quantity: 1 }
    ]
    let cartTotal = cart.reduce((acc,value)=>{
        acc = acc + value.price *value.quantity
        return acc;
    },0)
    console.log(cartTotal);
}