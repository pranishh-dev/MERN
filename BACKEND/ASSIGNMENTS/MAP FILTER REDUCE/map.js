// 1. Convert Product Names to Uppercase
const products = ["laptop", "mobile", "headphones"]

const productUpper = products.map((product) => product.toLocaleUpperCase())
console.log(productUpper);

// 2. Add a Currency Symbol to Prices
const productPrice = [100, 250, 500]
const sProductPrice = productPrice.map(price => "$" + price)
console.log(sProductPrice);

// 3. Extract User Names
const colleagues = [
    { name: "Rahul", email: "rahul@example.com" },
    { name: "Priya", email: "priya@example.com" }
]
let colleagueNames = colleagues.map(colleague => colleague.name)
console.log(colleagueNames);

// 4. Create Updated Product Prices
const orgPrice = [100, 200, 300]
let disPrice = orgPrice.map(price => price * 0.9)

console.log("Original Price:", orgPrice);
console.log("Discounted Price:", disPrice);


/*5. Update Object Data Immutably
Create an array of user objects with name and role. Use map() and the spread operator to create a new
array where the role of every user is changed to "developer" without modifying the original array
 */
{
    
    let users = [
        { name: "Rahul", role: "student" },
        { name: "Priya", role: "student" }
    ]
    
    const modifiedUsers = users.map((user) => ({ ...user, role: "developer" }))
    console.log(modifiedUsers);
    
}

// 6.  Add a New Property Using map()
let items = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 }
]
let modifiedItems = items.map(item => ({ ...item, inStock: true }))
console.log(modifiedItems);


// 7. Display Technologies Using forEach()
const frontEnd = ["HTML", "CSS", "JavaScript"]
frontEnd.forEach(lang => console.log(lang))

/*9. Format User Names Using map()
Create an array of names and use map() to add the text "User: " before every name. Display the new
array.
*/

{
    let users = ["Rahul", "Priya", "Aman"]
    let userHaru = users.map(user=>"User: "+ user)
    console.log(userHaru);

}