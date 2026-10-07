// Create an array containing five colors and use forEach() to display every color
let colors = [ "red" , "green", "blue", "yellow", "pink"]
colors.forEach((element)=>console.log(element))

// Create an array of programming languages and use forEach() to display each element along with its
// index.
let languages = ["HTML", "CSS"]
languages.forEach((element, index)=>console.log(index, element))

// Perform the following operations on an array:
// 1. Add "React" using push().
// 2. Remove the first element using shift().
// 3. Display the final array.
languages.push("React")
languages.shift()
languages.forEach(display);
function display(element){
    console.log(element);
}
