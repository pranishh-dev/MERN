let product ={
    name : "iphone",
    price : 220000,
    rating: 4.8,
    discount : 50,
    printDiscount(){
        console.log(product.discount); // not good reference use this.discount
    },
    printName : function(){
        console.log(this.name);
    }
}

console.log(product);

console.log(product.name);
console.log(product["price"]);

product.printDiscount();
product.printName()

//OBJECT METHODS
console.log(Object.keys(product));
console.log(Object.values(product));

console.log(Object.entries(product)); //NESTED ARRAY of Key value
