let numbers = [ 1, 0, 9, 5, 6]

function display(element, index){
    console.log(index , element);
}

numbers.forEach(display)


///////////


function double(element,index , array){
    array[index] = element *2;
}
numbers.forEach(double)
numbers.forEach(display)

//Uppercase
let lang = ["HTML", "CSS", "JavaScript", "React"]
function uppercase(element, index , array){
    array[index] = element.toUpperCase();
}
lang.forEach(uppercase)
lang.forEach(display)
