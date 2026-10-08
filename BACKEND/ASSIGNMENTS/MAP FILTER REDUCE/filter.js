// 10. Filter Available Products
{
    const products = [
        { name: "Laptop", inStock: true },
        { name: "Mouse", inStock: false }
    ]

    let availableProducts = products.filter((product) => product.inStock == true)
    console.log(availableProducts);

    let availableProductsName = products.filter((product) => product.inStock == true).map((product) => product.name)
    console.log(availableProductsName);

}

/*12. Filter Expensive Products
Create an array of product objects containing name and price. Use filter() to get products with a price
greater than 1000.
*/
{
    const products = [
        { name: "Mouse", price: 500 },
        { name: "Keyboard", price: 1500 }
    ]
    const expProduct = products.filter(product => product.price > 1000)
    console.log(expProduct);
}

// 14. Filter Gmail Addresses
{
    const emails= ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]
    let gmails = emails.filter(email => email.includes("@gmail.com"))
    console.log(gmails);

}