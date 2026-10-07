let naam = ["priyalal", "shyamashyam", "ladlilal"]

console.log(naam[0], naam[4]);

console.log(naam.length);

console.log(naam[naam.length - 1]); //acces last value
console.log(naam.at(1));
console.log(naam.at(-1));

for (let i = 0; i < naam.length; i++) {
    console.log(" ");
    console.log(naam[i]);
}


//2D array
let proDetails = [["shoes ", 435], ["cap", 50]]
console.log(proDetails[1]);

for (let i = 0; i < proDetails.length; i++) {
    for (let j = 0; j < proDetails[i].length; j++) {
        // console.log(" ");
        console.log(proDetails[i][j]);
    }
}



// methods
let sampleARR = [ "hello" ,"hii" , "priya"]
sampleARR.pop()
console.log(sampleARR);

sampleARR.push("PRIYALAL")
console.log(sampleARR);

sampleARR.shift() // dletes from start
console.log(sampleARR);

sampleARR.unshift("jai jai sri hit harivansh") // add at beginning
console.log(sampleARR);
