let user = {
    name: "Rahul",
    age: 20,
    city: "Kathmandu"
};

// Without destucturing
// let name = user.name;
// let age = user.age;
// let city = user.city
// console.log(name);
// console.log(age);
// console.log(city);


// Destructuring is a way to extract values from arrays or properties from objects and store them in        variables.

//ARRAY destructuring:
let numbers = [0, 1, 2, 3, 4, 5]
let [zeroth, first, second, third] = numbers
console.log(first);


// OBJECT destructuring
let {name,age,city} = user // variable name must match with that of key
console.log(name, age , city);

let {name: firstName} = user //renaming variable name to other rather than key name
console.log(firstName);

//

let product ={
    name : "iphone",
    price : 220000,
    rating: 4.8,
    discount : 50,
    printDiscount(){
        console.log(product.discount);
        return product.discount // not good reference use this.discount
    },
    printName : function(){
        console.log(this.name);
    }
}

let {price, printDiscount , rating} = product
console.log(price, printDiscount() , rating);


for( [key,value] of Object.entries(product))
{
    console.log(key,value );
}