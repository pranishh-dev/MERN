let p = new Promise((resolve, reject) => {
    // console.log(typeof resolve, typeof reject);
    resolve("thik he")
    // reject("galat he bhai")
})
// console.log(p);
// console.log(typeof p);

p.then(function onResolve(val) {
    console.log("Resolved: ", val);
}, function onReject(val) {
    console.log("Rejected: ", val);
})

//then gets resolve and reject -ye attach honre k baad hi fn call hoga in  microtask queue
//catch gets only reject(error)
//finally - alsways runs though its resolve or reject
//thesevworks for settle state not on initial/pending state

//promise chaining
let p2 = new Promise((resolve, reject) => {
    // resolve(5)
    reject("noo")
})
p2.then((num) => num * 5) //num=5 ,return 5*5=25
    .then((num) => num + 2) //num = 25 , return 25+2=27
    .then((num) => num + 5) //num = 27 , return 27+5 = 32
    .then((num) => console.log(num)) //num = 32 , clg(32)
    .catch((err) => console.log(err)) //if error clg(error)
    .finally(() => { console.log("ye to hamesha chalega regardless of reject or resolve"); })
    .then(() => {
        console.log("num");
    })



Promise.resolve("yesssir").then((val) => console.log("last", val))