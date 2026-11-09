let obj1 = {
    name: "PRANISH",
    niwas: "Vrindavan"
}

let obj2 = {
    fav: "priyalal"
}
let merged = { ...obj1, ...obj2 }
console.log(merged);

let { name: firstName, niwas, age = 16 } = obj1
console.log(firstName, niwas, age);

// delete from object

console.log(obj1);
delete obj1.name
console.log(obj1);

// delete from array

{
    let nums = [1, 2, 3, 4, 5]
    delete nums[1];
    console.log(nums);
}

{
    let nums = [1, 2, 3, 4, 5]
    nums.splice(2, 2) // starting from index 2 , delete 2 elements
    console.log(nums);
}

// delete deletes but doesnt sshift remaing element to front but splice does.

// adding into array
{

    let nums = [1, 2, 3, 4, 5]
    console.log(nums);
    nums.splice(2, 0, "srivrindavan") //startings from index2 delete none and add "srivrindavan" --add
    console.log(nums);
}


//replace array elements
{
    let nums = [1, 2, 3, 4, 5]
    nums.splice(2, 1, "three") // starting from index 2 , delete 1 element and add "three " --replace
    console.log(nums);
}

//splice 
{
    let nums = [1, 2, 3, 4, 5]
    console.log(nums.slice(3, 4)); //excludes (4+1)th element
    console.log(nums.slice(3)); //gives evth from index 3
}

// FIND 
let arrObj = [
    { name: "Priyalal", dhaam: "srivrindavan" },
    { name: "Sitaram", dhaam: "saket " }
]
let resArr = arrObj.find((ladle) => ladle.name === "Priyalal")
console.log(resArr);
console.log(resArr.dhaam);

// findindex

let resIndex = arrObj.findIndex((ladle) => ladle.name === "Sitaram")
console.log(resIndex);

//flat
let arr = [1,2,3,4,[5,6,7,[8,9,[10,11]]]]
let flattenArray = arr.flat(Infinity)
console.log(flattenArray);
console.log(...flattenArray);